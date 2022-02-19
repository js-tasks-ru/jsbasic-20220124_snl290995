function toggleText() {
  let name = document.querySelector('.toggle-text-button');
    name.addEventListener('click', toggleText1);
      function toggleText1() {
        let text = document.querySelector('button');
        text.addClassName('tok');
        document.getElementsByClassName('tok').style = "display: none";
        text.classList.toggle('tok');
      }
   }


