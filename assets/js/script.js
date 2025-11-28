
function previous () {
    const widthSlider = document.querySelector(".carousel").offsetWidth;
    const sliderContent = document.querySelector(".carousel-container");
    sliderContent.scrollLeft -= widthSlider;
    const scrollLeft = sliderContent.scrollLeft;

    if(scrollLeft == widthSlider){
        document.querySelector(".carousel-btn-prev").style.display = "none";
    } else{
        document.querySelector(".carousel-btn-next").style.display = "block";
    }
}

function next (){
    const widthSlider = document.querySelector(".carousel").offsetWidth;
    const sliderContent = document.querySelector(".carousel-container");
    sliderContent.scrollLeft += widthSlider;
    const scrollLeft = sliderContent.scrollLeft;
    const itemsSlider = sliderContent.querySelectorAll(".carousel-content");

    if(scrollLeft == widthSlider*(itemsSlider.length -2)){
    document.querySelector(".carousel-btn-next").style.display = "none";
    }else{
        document.querySelector(".carousel-btn-prev").style.display = "block";
    }
}