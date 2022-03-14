var slide = document.getElementById("slider-side");

slide.addEventListener("click", comeSlide);

function comeSlide(){
    var element = document.getElementsByClassName("side-bar")[0];
    element.classList.add("display-slider");
}

var hide = document.getElementById("slider-hide");

hide.addEventListener("click", hideSide);

function hideSide(){
    var element = document.getElementsByClassName("side-bar")[0];
    element.classList.remove("display-slider");
}


var info = document.getElementById("info-button");

info.addEventListener("mouseover", displayInfo);

function displayInfo(){
    console.log("abc");
    document.getElementsByClassName("info-box")[0].classList.toggle("info-box-display");
}