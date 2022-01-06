
let secDeg = 0;
let minDeg = 0;
let hourDeg = 0;
function setDate(){
    const time = new Date();
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    if(seconds == 0){
        secDeg = secDeg+(minutes*6)+90;
    }
    
document.querySelector('.min-hand').style.transform = `rotate(${(minutes*6)+90}deg)`;
document.querySelector('.second-hand').style.transform = `rotate(${(seconds*6)+90}deg)`;
document.querySelector('.hour-hand').style.transform = `rotate(${(hour*30)+90}deg)`;
}
setInterval(setDate, 1000);