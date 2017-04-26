var i = 0;

function recursiveFn() {
  i++;
  recursiveFn();
}

try {
  recursiveFn();
} catch(ex) {
  console.log('i = ' + i + ' error: ' + ex);
}

// demo07
// function foo() {
//     var a = 10;

//     function fn1() {
//         return a;
//     }

//     function fn2() {
//         return 10;
//     }

//     fn2();
// }

// foo();

// demo06
// var a = 10;
// var obj = {
//     a: 20
// };
// function fn () {
//     console.log(this.a);
// }

// fn.call(obj); // 20

// demo05
// (function() {
//     var a = 10;
//     var b = 20;

//     var test = {
//         m: 20,
//         add: function(x) {
//             return a + x;
//         },
//         sum: function() {
//             return a + b + this.m;
//         },
//         mark: function(k, j) {
//             return k + j;
//         }
//     };

//     window.test = test;
// })();

// console.log( test.add(100) );
// console.log( test.sum() );
// console.log( test.mark() );

// var _mark = test.mark;
// console.log( _mark() );

// demo04
// function foo() {
//     var a = 2;

//     return function bar() {
//         var b = 9;

//         return function fn() {
//             console.log(a, b);
//         };
//     };
// }

// var bar = foo();
// var fn = bar();
// fn();

// demo03
// function foo() {
//     var a = 2;

//     return function bar() {
//         var b = 9;

//         return function fn() {
//             console.log(a);
//         };
//     };
// }

// var bar = foo();
// var fn = bar();
// fn();

// demo02
// var fn;
// var m = 20;
// function foo() {
//     var a = 2;
//     function baz(a) {
//         console.log(a);
//     }
//     fn = baz;
// }
// function bar() {
//     fn(m);
// }

// foo();
// bar(); // 20

// demo1
// var fn;
// function foo() {
//   var a = 2;
//   function baz() {
//     console.log(a);
//   }
//   fn = baz;
// }
// function bar() {
//   fn();
// }

// foo();
// bar(); // 2
