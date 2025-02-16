let [milliseconds, seconds, minutes, hours ] = [0, 0, 0, 0];
let timerRef = document.querySelector(".timer-display");
let int = null;
document.getElementById("start-timer").addEventListener("click", () =>{
    if(int !==null){
        clearInterval(int);
        
    }
    int = setInterval(displayTimer, 10);
});
function displayTimer(){
    milliseconds += 10;
    seconds = milliseconds == 1000 ? 
     (seconds + 1) % 60 : seconds;
     minutes = (seconds == 0 && milliseconds == 0) ? (minutes+1) % 60 : minutes;
     hours = (minutes == 0 && seconds == 0 && milliseconds == 0 )? hours +1 : hours;
     milliseconds = milliseconds == 1000 ? 0 : milliseconds;
     let h = hours.toString().padStart(2, "0");
     let m = minutes.toString().padStart(2, "0");
     let s= seconds.toString().padStart(2, "0");
     let ms= milliseconds.toString().padStart(3, "0");
     timerRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}
     document.getElementById("pause-timer").addEventListener("click", () => {
        clearInterval(int);
        
     });

     document.getElementById("reset-timer").addEventListener("click", () => {
        clearInterval(int);
        [milliseconds,seconds, minutes, hours] = [0, 0, 0, 0];
        timerRef.innerHTML = "00 : 00 : 00 : 000";
     });
 
