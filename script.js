const startBtn = document.querySelector('#start-button')
const stopBtn = document.querySelector('#stop-button')
const resetBtn = document.querySelector('#reset-button')
const timer = document.querySelector('#timer')

let timerId;
let lastTimerStartTime = 0;

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

function startTimer(){
  startBtn.disabled = true ;// 1) once we've started the timer then it does'nt make sense to press start again (can also use the setAttribute() method here)
  
  stopBtn.disabled = false; 

  resetBtn.disabled = true; 

  lastTimerStartTime = Date.now()

  console.log(`started with ${lastTimerStartTime}`)

  timerId =  requestAnimationFrame(updateTimer) ;
}  


function stopTimer(){
    startBtn.disabled = false;
    stopBtn.disabled =  true ;
    resetBtn.disabled = false;
   
    lastTimerStartTime = Date.now() 

    cancelAnimationFrame(timerId);
}

function resetTimer(){
    resetBtn.disabled = true;
    timer.textContext = '00:00:000'
}

function updateTimer(){
    const millisElasped = Date.now() - lastTimerStartTime;
    const secsElasped = millisElasped / 1000;
    const minutesElasped = secsElasped / 60;
   
    // console.clear()

    // console.log(
    //     `millisElasped : ${millisElasped} &  secsElasped : ${secsElasped} & minutesElasped : ${minutesElasped}`
    //  )

    const millisText = millisElasped % 1000 ;
    const secsText = Math.floor(secsElasped % 60);
    const minutesText = Math.floor(minutesElasped % 60)

    // console.log(
    //     `millisText : ${millisText} & secsText : ${secsText} & minutesText: ${minutesText}`
    //  )
     timer.textContent = `${minutesText} : ${secsText} : ${millisText}`
   timerId = requestAnimationFrame(updateTimer)
}
