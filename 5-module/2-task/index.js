function toggleText() {
  let name = document.querySelector('.toggle-text-button');
    name.addEventListener('click', toggleText1);
   

      function toggleText1() {
        let text = document.querySelector('div');
        text.classList.add('tok');
        document.getElementsByClassName('.tok')[0].style = "display: none";
        text.classList.toggle('tok');
      }
   }


