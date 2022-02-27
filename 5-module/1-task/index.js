'use strict'

function hideSelf() {
  let name = document.querySelector('.hide-self-button');
    name.addEventListener('click', hideSelf1);
      function hideSelf1 (){
        name.hidden = true;
      }
}
