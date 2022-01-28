'use strict'

function factorial(n) {
    let sum = 1;
    if (n == 0 || n == 1) {
        return 1;
    } else {
        for (let i=2; i <= n; i++) {
            sum=sum * i; 
        }
        return sum;
    };
};

alert(factorial(1));
alert(factorial(0));
alert(factorial(6));