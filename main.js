const day1 = document.getElementById("day")
const hour1 = document.getElementById("hour")
const minute1 = document.getElementById("min")
const second1 = document.getElementById("sec")

const newyear = new Date("Jan 1,2025 00:00:00").getTime()

updateCountdown()

function updateCountdown(){
    const now = new Date().getTime();
    const gap = newyear - now;
    const sec = 1000;
    const minute = sec * 60;
    const hour = minute * 60;
    const day = hour *24
    
    const d = Math.floor(gap/day)
    const h = Math.floor((gap%day)/hour)
    const m = Math.floor((gap%day)/minute)
    const s = Math.floor((gap%day)/sec)
    day1.innerHTML = d;
    hour1.innerHTML = h;
    minute1.innerHTML = m;
    second1.innerHTML = s;
    setTimeout(updateCountdown,1000);
}