"use strict"


// text for h2

let mainHeaderProd = document.querySelector(".main_h2");
let textCopy = document.querySelector(".breadcrumbs_link:last-child");

function copyText(){
    if(window.innerWidth>1099){
        mainHeaderProd.innerHTML = textCopy.innerHTML;
    };
};
copyText();


// photo slider


let bigImg = document.querySelector(".product_img-big");
let smallImg = document.querySelectorAll(".product_img-small");
let smallImgContainer = document.querySelectorAll(".img-small-container");

function showBigImg(){

    for( let i=0; i<smallImgContainer.length; i++){
        if(smallImgContainer[i].classList.contains("choosed")){
            var srcsetBig = smallImg[i].children[0].getAttribute("srcset");
            var srcBig = smallImg[i].children[1].getAttribute("src");
            var altBig = smallImg[i].children[1].getAttribute("alt");
            bigImg.children[0].setAttribute("srcset", srcsetBig);
            bigImg.children[1].setAttribute("src", srcBig);
            bigImg.children[1].setAttribute("alt", altBig);
        };
    };

};

showBigImg();
function setClass(a){

    for( let i=0; i<smallImgContainer.length; i++){
        smallImgContainer[i].classList.remove("choosed");
    };
    smallImgContainer[a].classList.add("choosed");

};

for ( let i=0; i<smallImgContainer.length; i++){
    smallImgContainer[i].addEventListener("click", function(){
        setClass(i);
        showBigImg();
    })
};


// counting prices

let productPrices = document.querySelectorAll(".product-models .product-price");
let firstPrice = document.querySelectorAll(".product-models .product_main-price span");
let secondPrice = document.querySelectorAll(".product-models .product_old-price span");
let productEconomy = document.querySelectorAll(".model_economy span");

function countDiscount(){

    for( let i=0; i<productPrices.length; i++){
        let economy = (+secondPrice[i].innerHTML) -(+firstPrice[i].innerHTML);
        productEconomy[i].innerHTML = ""+economy+"";
    };

}

 countDiscount();

 
// function for slider
function slideItemsRight(parent, childs, leftArrow, rightArrow, a, step, dotsTrue, dots){

    let countChilds = childs.length;

    if(a<countChilds){
        parent.style.transform = "translateX("+(-step)+"%)";
        leftArrow.classList.remove("disabled");
    };

    if(a==(countChilds-1)){
        rightArrow.classList.add("disabled");
    };

    if(dotsTrue){
        changeDots(dots, a);
    }

};

function slideItemsLeft(parent, childs, leftArrow, rightArrow, a, step, dotsTrue, dots){

    let countChilds = childs.length;

    if(a<countChilds && a>=0){
        parent.style.transform = "translateX("+(-step)+"%)";
        rightArrow.classList.remove("disabled");
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


// button more text

let textToShow = document.querySelector(".product-text");
let butToShow = document.querySelector(".product-text_more");
let childTextToShow = document.querySelectorAll(".product-text_p");
let sumHeight = 0;

function showBut(){

    for (let i=0; i<childTextToShow.length; i++){
        sumHeight = sumHeight + childTextToShow[i].clientHeight;
    };
    sumHeight = sumHeight + 32;
    if (sumHeight>textToShow.clientHeight){
        butToShow.style.display = "block";
    };

};

showBut();

 function showText(){

    textToShow.style.height = "auto";
    textToShow.style.maxHeight = sumHeight + "px";
    butToShow.style.display = "none";

 };

 butToShow.addEventListener("click", showText);




// click to show reviews

let reviewBut1 = document.querySelector(".product-review_link");
let reviewBut2 = document.querySelector(".block-rates button.rating_p");
let reviewArea = document.querySelector(".review-text");

function openCloseReview(){

    if(reviewArea.classList.contains("none")){
        reviewArea.classList.remove("none");
    } else{
        reviewArea.classList.add("none");
    };

};

reviewBut1.addEventListener("click", openCloseReview);
reviewBut2.addEventListener("click", openCloseReview);


// change DOM location of reviews depending on window size

let mobileReview = document.querySelector(".mobile-review");
let desktopReview = document.querySelector(".desktop-review");

function domReview(){

    if(window.innerWidth<=800){
        if(mobileReview.classList.contains("here")) return;

        if(!mobileReview.classList.contains("here")){
            mobileReview.classList.add("here");
            desktopReview.classList.remove("here");
            mobileReview.appendChild(reviewArea);
        };

    };

    if(window.innerWidth>800){
        if(desktopReview.classList.contains("here")) return;

        if(!desktopReview.classList.contains("here")){
            desktopReview.classList.add("here");
            mobileReview.classList.remove("here");
            desktopReview.appendChild(reviewArea);
        };

    };

};

domReview();
window.addEventListener("resize", domReview);


// function for opening more options

let optBut = document.querySelector(".options_but");
let optButInside = document.querySelectorAll(".options_but span")[0];
let optButEnd = document.querySelectorAll(".options_but span")[1];
let options = document.querySelectorAll(".options-item");

if(options.length<=4){
    optBut.style.display = "none";
} else if(options.length>4){
    optBut.addEventListener("click", showOpt);
    let count = options.length-4;
    let end;
    if (count==1){
       end = "";
    } else if(count==2 || count ==3 || count==4){
        end = "а";
    } else{
        end = "ов";
    };
    optButInside.innerHTML = count;
    optButEnd.innerHTML = end;
};

function showOpt(){
    for (let i=4; i<options.length; i++){
        if(window.innerWidth<799){
            options[i].style.display = "block";
        } else {
            options[i].style.display = "flex";
        };
    }; 
    optBut.style.display = "none";
};