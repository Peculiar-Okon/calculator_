let secondhand = document.getElementById("secondhand")
let minutehand = document.getElementById("minutehand")
let hourhand = document.getElementById("hourhand")

// let set_clock = setInterval(() => {
//     let date_now = new Date()

//     let hr = date_now.getHours()
//     let min = date_now.getMinutes()
//     let sec = date_now.getSeconds()

//     let calc_hr = (hr % 12) * 30 + (min / 2)
//     let calc_min = (min * 6) * (sec / 10)
//     let calc_sec = sec * 6

//     hourhand.style.transform = `rotate(${calc_hr}deg)`
//     minutehand.style.transform = `rotate(${calc_min}deg)`
//     secondhand.style.transform = `rotate(${calc_sec}deg)`

// }, 1000)

setInterval(() => {
    const date = new Date();
    console.log(date.getMinutes())
    const secDeg = date.getSeconds() / 60 * 360 - 90;
    const minDeg = date.getMinutes() / 60 * 360 - 90;
    const hourDeg = (date.getHours() % 12 + date.getMinutes() / 60) / 12 * 360 - 90;
    
    secondhand.style.transform = `rotate(${secDeg}deg)`;
    minutehand.style.transform = `rotate(${minDeg}deg)`;
    hourhand.style.transform = `rotate(${hourDeg}deg)`;
}, 1000);