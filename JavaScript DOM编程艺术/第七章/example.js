window.onload = function() {
    var testdiv = document.getElementById('testdiv');

    var para = document.createElement('p');
    var txt1 = document.createTextNode('This is ');
    var emphasis = document.createElement('em');
    var txt2 = document.createTextNode(' content.');
    var txt3 = document.createTextNode('my');

    emphasis.appendChild(txt3);

    para.appendChild(txt1);
    para.appendChild(emphasis);
    para.appendChild(txt2);

    testdiv.appendChild(para);


    // 利用window.name跨域实践
    var state = 0;
    var iframe = document.createElement('iframe');

    loadfn = function() {
        if (1 === state) {
            var data = iframe.contentWindow.name;
            console.log(data);

            // 获取数据后销毁这个iframe，释放内存
            iframe.contentWindow.document.write('');
            iframe.contentWindow.close();
            document.body.removeChild(iframe);
        } else if (0 === state) {
            state = 1;
            iframe.contentWindow.location = 'http://localhost:8081/proxy.html';
        }
    };

    iframe.src = 'http://localhost:8082/gallery.html';
    iframe.style.display = 'none';
    iframe.onload = loadfn;

    document.body.appendChild(iframe);
};