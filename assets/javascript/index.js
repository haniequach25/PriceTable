var slideWrapper = document.querySelector(".tour-wrapper");
var nextButton = document.querySelector(".next-button");
var previousButton = document.querySelector(".previous-button");
var listDots = document.querySelectorAll(".list-dots-item");

var index = 0;
var percent = 0;

function makeSlideShow(direction) {
    if(direction === "next") {
        if(index<2) {
            percent = percent + 100;
            slideWrapper.style.right = percent + "%";
            index++;
        }
        else {
            percent = 0;
            slideWrapper.style.right = percent + "%";
            index = 0;
        }
    }
    else {
        if(index>0) {
            percent = percent - 100;
            slideWrapper.style.right = percent + "%";
            index--;
        }
        else {
            percent = 200;
            slideWrapper.style.right = percent + "%";
            index = 2;
        }
    }
    clearInterval(intervalSlide);
    intervalSlide = setInterval(function(){ 
        makeSlideShow("next");
    }, 5000);
}

listDots.forEach((dot) => {
    dot.addEventListener('click', function(event) {
        dotIndex = event.target.dataset.index;
        percent = 100 * dotIndex;
        slideWrapper.style.right = percent + "%";
        index = dotIndex;
        clearInterval(intervalSlide);
        intervalSlide = setInterval(function(){ 
        makeSlideShow("next");
        }, 5000);
    })
})

nextButton.addEventListener('click', ()=> {
    makeSlideShow("next");
})

previousButton.addEventListener('click', ()=> {
    makeSlideShow("previous");
})


var intervalSlide = setInterval(function(){ 
    makeSlideShow("next");
}, 5000);

setInterval(function() {
    listDots.forEach(function(dot, i) {
        dot.classList.remove('current-slide');
        if(i == index) {
            dot.classList.add('current-slide');
        }
    })
}, 100)