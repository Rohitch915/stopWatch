let timer = document.querySelector('.timer');
let startStopBtn = document.querySelector('.start-stop-btn');
let resetBtn=document.querySelector('.reset-btn');
let sec = 0;
let min = 0;
let hour = 0;
let leadingZeroSec = '0';
let leadingZeroMin = '0';
let leadingZeroHour = '0';
let stopwatch='pause';
let timerInterval=null;
function start() {
    leadingZeroSec = '0';
    leadingZeroMin = '0';
    leadingZeroHour = '0';
    sec++;
    if (sec / 60 === 1) {
        min++;
        sec = 0;
        if (min / 60 === 1) {
            hour++;
            min = 0;
        }
    }
    if (sec < 10) {
        leadingZeroSec += sec.toString();
    } else {
        leadingZeroSec = sec;
    }
    if (min < 10) {
        leadingZeroMin += min.toString();
    } else {
        leadingZeroMin = min;
    }
    if (hour < 10) {
        leadingZeroHour += hour.toString();
    } else {
        leadingZeroHour = hour;
    }

    let time = timer.innerHTML = leadingZeroHour + ':' + leadingZeroMin + ':' + leadingZeroSec;
}


startStopBtn.addEventListener('click', function () {
   if(stopwatch==='pause'){
    timerInterval=window.setInterval(start,1);
    startStopBtn.innerHTML='<i class="fa fa-pause resume"></i>';
    startStopBtn.style.backgroundColor='yellow';
    stopwatch='resume';
   }else{
    startStopBtn.innerHTML='<i class="fa fa-play pause-btn"></i>';
    startStopBtn.style.backgroundColor='green';
    window.clearInterval(timerInterval);
    stopwatch='pause';
  
   }
})
resetBtn.addEventListener('click',function() {
   sec=0;
   min=0;
   hour=0;
  timer.innerHTML = '00:00:00';
  startStopBtn.innerHTML='<i class="fa fa-play pause-btn"></i>';
    startStopBtn.style.backgroundColor='green';
    window.clearInterval(timerInterval);
    stopwatch='pause';
})
