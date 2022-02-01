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

(factorial(1));
(factorial(0));
(factorial(6));