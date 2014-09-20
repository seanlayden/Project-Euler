// var evens = [];
// var odds = [];
//
// var evengen = function (x) {
//   for (i = 2; i <= x; i = i + 2) {
//     evens.push(i);
//   };
// };
//
// var oddgen = function (x) {
//   for (i = 3; i <= x; i = i + 2) {
//     odds.push(i);
//   };
// };
//
// evengen(50);
// oddgen(50);
// console.log(evens);
// console.log(odds);
//
// var primes = [1, 2, 3];
//
// // var checkPrime = function(x, n) {
// //
// //   for (i = 0; i <=x; i++) {
// //     if (n % evens[0] == 0 && n % odds[i] == 0) {
// //       console.log('not prime');
// //     } else {
// //       push.primes(n);
// //     };
// //   };
// //
// // };
// //
// // checkPrime(47);
//
// var primesgen = function(x) {
//   for (i = 4; i <= x; i++) {
//     if (i % evens[0] == 0 && i % odds[i] == 0) {
//       console.log('not prime');
//     } else {
//       push.primes(n);
//     };
//   };
// };


var evens = [];
var odds = [];

var evengen = function (x) {
  for (i = 2; i <= x; i = i + 2) {
    evens.push(i);
  };
};

var oddgen = function (x) {
  for (i = 3; i <= x; i = i + 2) {
    odds.push(i);
  };
};

evengen(50);
oddgen(50);
console.log(evens);
console.log(odds);

var primes = [1, 2, 3];

// var primesgen = function(x) {
//   for (i = 4; i <= x; i++) {
//     for (j = 0; j <= (i-1); j++) {
//       if (i % evens[j] == 0 || (i % odds[j] == 0)) {
//         console.log('not prime');
//       } else {
//         primes.push(i);
//       };
//     };
//   };
// };

var primesgen = function(x) {
  for (i = 4; i <= x; i++) {
    for (j = 0; j < (i-1); j++) {
      if (i % evens[0] == 0 && i % odds[j] == 0) {
        primes.push(i);
      };
    };
  };
};

primesgen(50);
console.log(primes);
