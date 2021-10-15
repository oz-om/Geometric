let divs = document.querySelectorAll('.geo div');
let shuffl = document.querySelector('.shuffl');

let num = Array(divs.length);
let arr = Array(...num.keys());
let randomNum;
let box;


function shuffling(arr) {
  for (var i = 0; i < arr.length; i++) {
    randomNum = Math.floor(Math.random() * arr.length)
    box = arr[i];
    arr[i] = arr[randomNum]
    arr[randomNum] = box;

    divs.forEach((div, index) => {
      div.style.order = `${arr[index]}`
    })
  }
}

shuffl.addEventListener('click', function() {
  shuffling(arr)
})

window.onload = shuffling(arr)