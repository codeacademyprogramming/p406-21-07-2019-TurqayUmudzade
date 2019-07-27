const slider=document.querySelector('.slider');

const ArrowL=document.querySelector('.left');
const ArrowR=document.querySelector('.right');

var index=0;

ArrowR.addEventListener('click',function(){
  if(index<2)
    index++;
    slider.style.transform='translate( '+ (index)* -(100/3) +'%)';

});

ArrowL.addEventListener('click',function(){
    if(index>0)
      index--;
      console.log(index);
      slider.style.transform='translate( '+ (index)* -(100/3) +'%)';
  
  });