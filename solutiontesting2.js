////////////////////////////////
//      Factor Generator      //
////////////////////////////////

var amount = 1000;
var numberFactors = [];

var factor = function (x) {
  if (amount % 2 != 0) {
    for (i = 1; i <= amount; i +=2) {
      if (amount % i == 0) {
        numberFactors.push(i);
      };
    };
  } else {
    for (i = 1; i <= amount; i++) {
      if (amount % i == 0) {
        numberFactors.push(i);
      };
    };
  };
};

factor(amount);
console.log(numberFactors);


////////////////////////////////
//   Prime Number Generator   //
////////////////////////////////

var odds = [];
var primes = [];

var oddgen = function (x) {
  for (i = 1; i <= x; i = i + 2) {
    odds.push(i);
  };
};

oddgen(amount);

var primesgen = function(limit) {
  for (n = 3; n <= limit; n += 2) {
      holder = [];
        for (i=0; i <= odds.length; i++) {
           if(n % odds[i] == 0) {
             holder.push(odds[i]);
           };
        };
      if(holder.length == 2) {
        primes.push(n);
      };
  };
};

primesgen(amount);
console.log(primes);

////////////////////////////////
//          Solution          //
////////////////////////////////



var odds = [];
var primes = [];
amount = 78;

var oddgen = function (x) {
  for (i = 1; i <= x; i = i + 2) {
    odds.push(i);
  };
};

oddgen(amount);


var numberFactors = [];

var factor = function (x) {
  if (amount % 2 != 0) {
    for (i = 1; i <= amount; i +=2) {
      if (amount % i == 0) {
        numberFactors.push(i);
      };
    };
  } else {
    for (i = 1; i <= amount; i++) {
      if (amount % i == 0) {
        numberFactors.push(i);
      };
    };
  };
};

factor(amount);
console.log(numberFactors);

var primeFactors = numberFactors.every(function(index) {
  for (index = 0; index <= numberFactors.length; index++) {
    holder = [];
      for (i=0; i <= odds.length; i++) {
        if (numberFactors[index] % odds[i] == 0) {
          holder.push(odds[i]);
        };
      };
      if(holder.length == 2 && numberFactors[index] % 2 != 0) {
        primes.push(numberFactors[index]);
      };
  };
});

console.log(primes);

var primesMax = Math.max.apply(Math, primes);
console.log(primesMax)
