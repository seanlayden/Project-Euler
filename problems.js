/** This is the solution to problem 1 of the The Euler Project. The problem takes all the numbers that are
a multiple of 3 or 5, and then sums them. In the code below, I have shown the result for two values - 1000, and 4 million.**/


var input1 = 1000;
var input2 = 4000000;

var solution1 = function(x) {
    var sum = 0;
    for (i=0; i < x; i++) {
      if(i % 3 ==0 || i % 5 == 0) {
        sum = sum + i;
      };
    };
    console.log(sum);
};

solution1(input1);
solution1(input2);

/** This is the solution to problem 2 of The Euler Project.**/

/**

We need to extend the Fibonacci sequence out to it's 4 millionth iteration - and then sum all of the even integers to that point.

First, we need to figure out how to program the actual sequence.
Then, we need to take all of the even components of the sequence, and sum them together.

*********I found that 4 million was a VERY large sum - so much that the console returns infinity.*********

PSEUDOCODE:

var fibonacci = [];
var summation;

var counter = function(x) {
  for () {
    fibonacci.push();

    if (placeholder % 2 = 0) {
      summation += placeholder;
      return summation;
  }
}
}

**/

var fibonacci = [1, 2];
var summation = 0;

var counter = function(x) {
  for (i=0; i<= x; i++) {
  fibonacci.push(fibonacci[i] + fibonacci[i + 1]);

    if (fibonacci[i] % 2 == 0) {
      summation = summation + fibonacci[i];
      console.log(summation);
    };
  }
}

counter(/**interations to be summed**/);


/** Comments **/

for (i=0, i<x, i++) {
  for (j=2, j<(x-1), j++) {
    if (i % j == wholenumber) {
      console.log(not prime);
    } else {
      console.log(prime);
    }

  }
}
