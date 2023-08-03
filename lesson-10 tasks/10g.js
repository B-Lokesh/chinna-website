
function fun1(selector){

  const toggle1 = document.querySelector(selector);
  if(!toggle1.classList.contains('is-toggled'))
  {
       // Before turning this button ON, check if there's
      // already a button that's turned ON and turn it OFF.
    turnOffPreviousButton();
    toggle1.classList.add('is-toggled');
  }
  else{
    toggle1.classList.remove('is-toggled');
  }
  function turnOffPreviousButton() {
    const previousButton = document.querySelector('.is-toggled');
    if (previousButton) {
      previousButton.classList.remove('is-toggled');
    }
  }
}
