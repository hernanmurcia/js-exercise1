var bgColor = document.querySelector('#bg-color');

function numInRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function changeColor(){
  bgColor.style.backgroundColor = '#' + numInRange(100000, 999999);

}
bgColor.addEventListener('click', changeColor);
