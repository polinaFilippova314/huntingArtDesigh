"use strict"

// counting prices

let productPrices = document.querySelectorAll(".product-price");
let firstPrice = document.querySelectorAll(".product_main-price span");
let secondPrice = document.querySelectorAll(".product_old-price span");
let productEconomy = document.querySelectorAll(".model_economy span");

function countDiscount(){

    for( let i=0; i<productPrices.length; i++){
        let economy = (+secondPrice[i].innerHTML) -(+firstPrice[i].innerHTML);
        productEconomy[i].innerHTML = ""+economy+"";
    };

}

 countDiscount();

//  switch types

let blockBut = document.querySelector(".row-icon");
let listBut = document.querySelector(".list-icon");
let article = document.querySelector(".change-article");
let arrBut = [blockBut, listBut];

function switchTypes(option){

    for(let i=0; i<arrBut.length; i++){
        arrBut[i].classList.remove("choosed");
    }
    arrBut[option].classList.add("choosed");
    
    if(article.classList.contains("list-type")){
        article.classList.remove("list-type");
        article.classList.add("block-type");
    } else{
        article.classList.remove("block-type");
        article.classList.add("list-type");
    }

};

for (let i=0; i<arrBut.length; i++){
    arrBut[i].addEventListener("click", function(){
        switchTypes(i);
    });
};



// change order DOM for H1


let catalog = document.querySelector(".catalog");
let containerForMainH = document.querySelector(".catalog-header");
let childBefore = document.querySelector(".catalog-header .desktop--h");

function cloneMainH(){

    if(catalog.classList.contains("h--here") && window.innerWidth>940){

        let mainH = document.querySelector(".catalog_h");
        let newMainH = mainH.cloneNode(true);
        containerForMainH.insertBefore( newMainH, childBefore );
        catalog.removeChild(mainH);
        catalog.classList.remove("h--here");
        containerForMainH.classList.add("h--here")

    } else if(containerForMainH.classList.contains("h--here") && window.innerWidth<=940) {

        let mainH = document.querySelector(".catalog_h");
        let newMainH = mainH.cloneNode(true);
        catalog.insertBefore( newMainH, containerForMainH );
        containerForMainH.removeChild(mainH);
        catalog.classList.add("h--here");
        containerForMainH.classList.remove("h--here")

    };

};

cloneMainH();
window.addEventListener("resize", cloneMainH);