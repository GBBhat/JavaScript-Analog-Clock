let hour = document.getElementById("hour")
let min = document.getElementById("min")
let sec = document.getElementById("sec")

function displaytime () {
    let date = new Date()

    let hh = date.getHours()
    let mm = date.getMinutes()
    let ss = date.getSeconds()

    let hourRotate = 30*hh + (mm/2)
    let minRotation = 6*mm
    let secRotation = 6*ss 

    hour.style.transform = `rotate(${hourRotate}deg)`
    min.style.transform = `rotate(${minRotation}deg)`
    sec.style.transform = `rotate(${secRotation}deg)`
}

setInterval(displaytime, 1000)