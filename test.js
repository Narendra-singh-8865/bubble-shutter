function startgame(){
let scorevalue = 0;
let timevalue = 1; 
let number = 0;
let numbersum = 0;
let minnumber = 0;
let clickcheak = "notclick";

const bbl = document.querySelector('.bbl');
const score = document.querySelector('#score');
const time = document.querySelector('#time');
const img = document.querySelector('#scope');
let man = document.querySelector('#man');
const sumdisplay = document.querySelector('#sum');

document.querySelector('#restart').onclick = function(){location.reload() };

function rendamfunction() {
  number = Math.floor(Math.random()*30) + 1;
  if(number<=7){
 // bbl.style.backgroundColor = '#855a0fa1';
 bbl.textContent = `- ${number}`;
  minnumber = number;
 }
 else{
  bbl.style.backgroundColor = 'rgba(50, 62, 170, 0.774)';
  bbl.textContent = `${number}`;
  } 

  const left = Math.floor(Math.random() * (man.clientWidth - 50));
  const top = Math.floor(Math.random() * (man.clientHeight - 50));
  bbl.style.left = left + 'px';
  bbl.style.top = top + 'px';
}

bbl.addEventListener('click', function() {
clickcheak = "click";
console.log(clickcheak);

  numbersum += number - minnumber;
    numbersum -=minnumber;
    if(numbersum<0){
     numbersum = 0;
    }
   if(scorevalue!=null){
    sumdisplay .textContent = `Sum : ${numbersum}`; 
    scorevalue++;
    score.textContent = `Score: ${scorevalue}`;
   }});

let timeout2 = setInterval(rendamfunction, 1000);

let timeout = setInterval(function(){
  timevalue++
  time.textContent = `Time: ${timevalue} sect`;
    if(timevalue>=60){
      alert(`Game Over! Your score is: ${scorevalue}`);
      scorevalue = null;     
      bbl.style.display = 'none';     
      img.style.display = 'none';     
    clearInterval(timeout2);
    clearInterval(timeout); 
  } },1000);


  man.addEventListener('mousemove', function (e) {
    img.style.left = e.clientX + 'px';
    img.style.top = e.clientY + 'px';
   });
  }

 document.querySelector('#Start').onclick = function(){ startgame(); };

