"use strict"

// function calculating lengthof childs of slider

function calcChilds(parent, children){

    let length = children.length;

    if (window.innerWidth<621){
        parent.style.width = 100 * length + "%";
    } else if (window.innerWidth<940 && window.innerWidth>=621){
        parent.style.width = 50*length + "%";
    } else if(window.innerWidth>=940){
        parent.style.width = "100%";
    };

};

let videoParent = document.querySelector(".video .slider2-scroll");
let videoChildren = document.querySelectorAll(".video .slider2-item");

calcChilds(videoParent, videoChildren);

// function for slider
function slideItemsRight(parent, childs, leftArrow, rightArrow, a, step, dotsTrue, dots, unit){
console.log(a)
    let countChilds = childs.length;
    console.log(countChilds)

    if(a<countChilds){
        parent.style.transform = "translateX("+(-step)+unit+")";
        leftArrow.classList.remove("disabled");
    };

    if(a==(countChilds-1)){
        rightArrow.classList.add("disabled");
    };

    if(dotsTrue){
        changeDots(dots, a);
    }

};

function slideItemsLeft(parent, childs, leftArrow, rightArrow, a, step, dotsTrue, dots, unit){
    console.log(a)
    let countChilds = childs.length;
    console.log(countChilds)

    if(a<countChilds && a>=0){
        parent.style.transform = "translateX("+(-step)+unit+")";
        rightArrow.classList.remove("disabled");
        console.log("here")
    };

    if(a==0){
        leftArrow.classList.add("disabled");
    };

    if(dotsTrue){
        changeDots(dots, a);
    }

};

function changeDots(dots, a){
    for(let i=0; i<dots.length; i++){
        dots[i].classList.remove("choosed");
    };
    dots[a].classList.add("choosed");
};

let percent = "%";
let pixel = "px";




// slider for new products

let newLeft = document.querySelector(".new .arrow_left");
let newRight = document.querySelector(".new .arrow_right");
let newParent = document.querySelector(".new .slider-dotts-slider");
let newChilds = document.querySelectorAll(".new .slider-dotts-slider-item");
let newStep = 0;
let y=0;
let newDots = document.querySelectorAll(".new .dott_item");
let newDotsTrue = true;

function newSlideItemRight(){
    
    if(newStep<(100 - 100/newChilds.length)){
        y++;
        newStep = newStep + 100/newChilds.length;
    };
    slideItemsRight(newParent, newChilds, newLeft, newRight, y, newStep, newDotsTrue, newDots, percent);
    
};

function newSlideItemLeft(){
    
    if(newStep>0){
        y--;
        newStep = newStep - 100/newChilds.length;
    };
    slideItemsLeft(newParent, newChilds, newLeft, newRight, y, newStep, newDotsTrue, newDots, percent);
    
};

newRight.addEventListener("click", newSlideItemRight);
newLeft.addEventListener("click", newSlideItemLeft);


//slider for sale

let saleLeft = document.querySelector(".sale .arrow_left");
let saleRight = document.querySelector(".sale .arrow_right");
let saleParent = document.querySelector(".sale .slider-dotts-slider");
let saleChilds = document.querySelectorAll(".sale .slider-dotts-slider-item");
let saleStep = 0;
let x=0;
let saleDots = document.querySelectorAll(".sale .dott_item");
let saleDotsTrue = true;

function saleSlideItemRight(){
    
    if(saleStep<(100 - 100/saleChilds.length)){
        x++;
        saleStep = saleStep + 100/saleChilds.length;
    };
    slideItemsRight(saleParent, saleChilds, saleLeft, saleRight, x, saleStep, saleDotsTrue, saleDots, percent);
    
};

function saleSlideItemLeft(){
    
    if(saleStep>0){
        x--;
        saleStep = saleStep - 100/saleChilds.length;
    };
    slideItemsLeft(saleParent, saleChilds, saleLeft, saleRight, x, saleStep, saleDotsTrue, saleDots, percent);
    
};

saleRight.addEventListener("click", saleSlideItemRight);
saleLeft.addEventListener("click", saleSlideItemLeft);


// function for counting scroll container length

function calcLength(count, child){
    for (let i=0; i<child.length; i++){
        count += child[i].clientWidth+23;
    };
    count -= 23;
    return count;
}


//slider for videos

let videosLeft = document.querySelector(".video .arrow_left");
let videosRight = document.querySelector(".video .arrow_right");
let videosParent = document.querySelector(".video .slider2-scroll");
let videosChilds = document.querySelectorAll(".video .slider2-item");
let videosStep = 0;
let a=0;
let videosDots = "";
let videosDotsTrue = false;

let videosScrollLength = 0;
videosScrollLength = calcLength(videosScrollLength, videosChilds);

// function slider2Right(step,childs,func1, func2, length){

//     if(window.innerWidth<620){
//         if(step<(100 - 100/childs.length)){
//             a++;
//             step = step + 100/childs.length;
//         };
//         func1();
//     } else {
//         if(step<length){
//             a++;
//             step = step + (childs[0].clientWidth+23);
//             console.log(childs[0].clientWidthь)
//         };
//         func2();
//     };

// };

// function videosFunc1(){
//     slideItemsRight(videosParent, videosChilds, videosLeft, videosRight, y, videosStep, videosDotsTrue, videosDots, percent);
// };
// function videosFunc2(){
//     slideItemsRight(videosParent, videosChilds, videosLeft, videosRight, y, videosStep, videosDotsTrue, videosDots, pixel);
// };

// function videosSlideItemRight(){
//     slider2Right(videosStep, videosChilds, videosFunc1 , videosFunc2, videosScrollLength);
// }

function videosSlideItemRight(){
    
    if(window.innerWidth<620){
        if(videosStep<(100 - 100/videosChilds.length)){
            a++;
            videosStep = videosStep + 100/videosChilds.length;
        };
        slideItemsRight(videosParent, videosChilds, videosLeft, videosRight, a, videosStep, videosDotsTrue, videosDots, percent);
    } else {
        if(videosStep<videosScrollLength){
            a++;
            videosStep = videosStep + (videosChilds[0].clientWidth+23);
        };
        slideItemsRight(videosParent, videosChilds, videosLeft, videosRight, a, videosStep, videosDotsTrue, videosDots, pixel);
    }
    
};

function videosSlideItemLeft(){
    
    if(window.innerWidth<620){
        if(videosStep<(100 - 100/videosChilds.length)){
            a--;
            videosStep = videosStep - 100/videosChilds.length;
        };
        slideItemsRight(videosParent, videosChilds, videosLeft, videosRight, a, videosStep, videosDotsTrue, videosDots, percent);
    } else {
        if(videosStep<videosScrollLength){
            a--;
            videosStep = videosStep - (videosChilds[0].clientWidth+23);
        };
        slideItemsRight(videosParent, videosChilds, videosLeft, videosRight, a, videosStep, videosDotsTrue, videosDots, pixel);
    }

};

videosRight.addEventListener("click", videosSlideItemRight);
videosLeft.addEventListener("click", videosSlideItemLeft);


//slider for review

let reviewLeft = document.querySelector(".review .arrow_left");
let reviewRight = document.querySelector(".review .arrow_right");
let reviewParent = document.querySelector(".review .slider2-scroll");
let reviewChilds = document.querySelectorAll(".review .slider2-item");
let reviewStep = 0;
let b=0;
let reviewDots = "";
let reviewDotsTrue = false;

function reviewSlideItemRight(){
    
    if(reviewStep<(100 - 100/reviewChilds.length)){
        b++;
        reviewStep = reviewStep + 100/reviewChilds.length;
    };
    slideItemsRight(reviewParent, reviewChilds, reviewLeft, reviewRight, b, reviewStep, reviewDotsTrue, reviewDots);
    
};

function reviewSlideItemLeft(){
    
    if(reviewStep>0){
        b--;
        reviewStep = reviewStep - 100/reviewChilds.length;
    };
    slideItemsLeft(reviewParent, reviewChilds, reviewLeft, reviewRight, b, reviewStep, reviewDotsTrue, reviewDots);
    
};

reviewRight.addEventListener("click", reviewSlideItemRight);
reviewLeft.addEventListener("click", reviewSlideItemLeft);


//slider for news

let newsLeft = document.querySelector(".news .arrow_left");
let newsRight = document.querySelector(".news .arrow_right");
let newsParent = document.querySelector(".news .slider2-scroll");
let newsChilds = document.querySelectorAll(".news .slider2-item");
let newsStep = 0;
let c=0;
let newsDots = "";
let newsDotsTrue = false;

function newsSlideItemRight(){
    
    if(newsStep<(100 - 100/newsChilds.length)){
        c++;
        newsStep = newsStep + 100/newsChilds.length;
    };
    slideItemsRight(newsParent, newsChilds, newsLeft, newsRight, c, newsStep, newsDotsTrue, newsDots);
    
};

function newsSlideItemLeft(){
    
    if(newsStep>0){
        c--;
        newsStep = newsStep - 100/newsChilds.length;
    };
    slideItemsLeft(newsParent, newsChilds, newsLeft, newsRight, c, newsStep, newsDotsTrue, newsDots);
    
};

newsRight.addEventListener("click", newsSlideItemRight);
newsLeft.addEventListener("click", newsSlideItemLeft);


//slider for article

let articleLeft = document.querySelector(".article .arrow_left");
let articleRight = document.querySelector(".article .arrow_right");
let articleParent = document.querySelector(".article .article-main-scroll");
let articleChilds = document.querySelectorAll(".article .article-item");
let articleStep = 0;
let d=0;
let articleDots = "";
let articleDotsTrue = false;

function articleSlideItemRight(){
    
    if(articleStep<(100 - 100/articleChilds.length)){
        d++;
        articleStep = articleStep + 100/articleChilds.length;
    };
    slideItemsRight(articleParent, articleChilds, articleLeft, articleRight, d, articleStep, articleDotsTrue, articleDots);
    
};

function articleSlideItemLeft(){
    
    if(articleStep>0){
        d--;
        articleStep = articleStep - 100/articleChilds.length;
    };
    slideItemsLeft(articleParent, articleChilds, articleLeft, articleRight, d, articleStep, articleDotsTrue, articleDots);
    
};

articleRight.addEventListener("click", articleSlideItemRight);
articleLeft.addEventListener("click", articleSlideItemLeft);


// slider for recommendations
// let recomLeft = document.querySelector(".recommendation .arrow_left");
// let recomRight = document.querySelector(".recommendation .arrow_right");
// let recomParent = document.querySelector(".recommendation-slider");
// let recomChilds = document.querySelectorAll(".recommendation-item");
// let recomStep = 0;
// let x=0;
// let recomDotsTrue = false;
// let empty;

// recomParent.style.width = recomChilds.length*100 + "%";
// for(let i=0; i<recomChilds.length; i++){
//     recomChilds[i].style.width = 100/recomChilds.length + "%";
// };

function recomSlideItemRight(){
    
    if(recomStep<(100 - 100/recomChilds.length)){
        x++;
        recomStep = recomStep + 100/recomChilds.length;
    };
    slideItemsRight(recomParent, recomChilds, recomLeft, recomRight, x, recomStep, recomDotsTrue, empty);
    
};

function recomSlideItemLeft(){
    
    if(recomStep>0){
        x--;
        recomStep = recomStep - 100/recomChilds.length;
    };
    slideItemsLeft(recomParent, recomChilds, recomLeft, recomRight, x, recomStep, recomDotsTrue, empty);
    
};

