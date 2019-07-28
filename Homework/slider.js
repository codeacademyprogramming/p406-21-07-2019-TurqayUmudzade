const slider = document.querySelector('.slider');

const ArrowL = document.querySelector('.left');
const ArrowR = document.querySelector('.right');

var index = 1;

// ArrowR.addEventListener('click', function () {
//   if (index < 2)
//     index++;

//   setInterval(function () { slider.style.transform = 'translate( ' + (index) * -(100 / 3) + '%)'; }, 300);


// });

// ArrowL.addEventListener('click', function () {
//   if (index > 0)
//     index--;
//   console.log(index);
//   setInterval(function () { slider.style.transform = 'translate( ' + (index) * -(100 / 3) + '%)'; }, 300);

// });

function a() {
  slider.style.transform = 'translate( ' + (index) * -(100 / 3) + '%)'
  index++;
  if (index == 3)
    index = 0;

}
;
setInterval(a, 2000);
