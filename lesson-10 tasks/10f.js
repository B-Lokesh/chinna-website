
function fun1(selector){

  const toggle1 = document.querySelector(selector);
  if(!toggle1.classList.contains('is-toggled'))
  {
    toggle1.classList.add('is-toggled');
  }
  else{
    toggle1.classList.remove('is-toggled');
  }
}
