
const menu = document.getElementById("mobile-menu")
const navLeft = document.querySelector(".nav-left")
const navRight = document.querySelector(".nav-right")

menu.addEventListener("click",()=>{
navLeft.classList.toggle("active")
navRight.classList.toggle("active")
})

const track = document.getElementById("track")

let position = 0
const step = 220

function autoSlide(){

position -= step

if(Math.abs(position) > track.scrollWidth / 2){
position = 0
}

track.style.transform = `translateX(${position}px)`

}

setInterval(autoSlide,2500)