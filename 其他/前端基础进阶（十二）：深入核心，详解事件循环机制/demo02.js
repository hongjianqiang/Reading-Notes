// demo02
console.log('1、golb1');

setTimeout(function() {
    console.log('8、timeout1');
    process.nextTick(function() {
        console.log('12、timeout1_nextTick');
    });
    new Promise(function(resolve) {
        console.log('9、timeout1_promise');
        resolve();
    }).then(function() {
        console.log('14、timeout1_then');
    });
});

setImmediate(function() {
    console.log('16、immediate1');
    process.nextTick(function() {
        console.log('20、immediate1_nextTick');
    });
    new Promise(function(resolve) {
        console.log('17、immediate1_promise');
        resolve();
    }).then(function() {
        console.log('22、immediate1_then');
    });
});

process.nextTick(function() {
    console.log('4、glob1_nextTick');
});

new Promise(function(resolve) {
    console.log('2、glob1_promise');
    resolve();
}).then(function() {
    console.log('6、glob1_then');
});

setTimeout(function() {
    console.log('10、timeout2');
    process.nextTick(function() {
        console.log('13、timeout2_nextTick');
    });
    new Promise(function(resolve) {
        console.log('11、timeout2_promise');
        resolve();
    }).then(function() {
        console.log('15、timeout2_then');
    });
});

process.nextTick(function() {
    console.log('5、glob2_nextTick');
});

new Promise(function(resolve) {
    console.log('3、glob2_promise');
    resolve();
}).then(function() {
    console.log('7、glob2_then');
});

setImmediate(function() {
    console.log('18、immediate2');
    process.nextTick(function() {
        console.log('21、immediate2_nextTick');
    });
    new Promise(function(resolve) {
        console.log('19、immediate2_promise');
        resolve();
    }).then(function() {
        console.log('23、immediate2_then');
    });
});