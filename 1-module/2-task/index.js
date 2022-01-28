'use strict'

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if ( userName=='' || userName == null || userName.length < 4) {
      alert('Некорректное имя');
  } else {
    alert(`Welcome back, ${userName}!`)  
  }
}

sayHello();

