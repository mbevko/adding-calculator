let numOne = document.querySelector(".num_one");
let numTwo = document.querySelector(".num_two");
let sum = document.querySelector(".sum");

numOne.addEventListener('input', add);
numTwo.addEventListener('input', add);

function add () {
  let one = parseFloat(numOne.value) || 0;
  let two = parseFloat(numTwo.value) || 0;
  sum.innerHTML = one + two;
  
};

let clear = document.querySelector(".clear");
clear.addEventListener('click', function () {
  numOne.value = "";
  numTwo.value = "";
  sum.innerHTML = "";
});


