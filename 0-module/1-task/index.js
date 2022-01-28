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

function sayHello() {
    let userName = prompt('Введите ваше имя');
  
    if ( userName=='' || userName == null || userName.length < 4) {
        alert('Некорректное имя');
    } else {
      alert(`Welcome back, ${userName}!`)  
    }
  }
  
  sayHello();


  function ucFirst(str) {
    if (!str) 
      return str;
     else {
      return str.charAt(0).toUpperCase() + string.slice(1);
    }
  };
  
  ucFirst('вася');
  ucFirst('');

function checkSpam(strr) {
    let name = strr.toLowerCase();
    if (name == '1xbet now' || name == 'free xxxxx') {
        return true;
    } else {
        return false;
    };
};

alert(checkSpam('1XBeT now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam('innocent rabbit')); 


function truncate(str, maxlength) {
    if (str.length > maxlength) {
        str = str.substring(0, maxlength)+ String.fromCharCode(8230);
        return str;
    } else {
        return str;
    }
}

alert(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20));
alert(truncate('Вот, что мне', 20));