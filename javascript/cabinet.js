"use strict"

// click on adress

let adressBut = document.querySelector(".cabinet-list_link.adress-but");
let ordersBut = document.querySelector(".cabinet-list_link.orders-but");
let deliveryArea = document.querySelector(".delivery");
let mainArea = document.querySelector(".media-header-container.rel");
let returnButDelivery = document.querySelector(".delivery .cabinet_h .arrow_left");
let returnButOrders = document.querySelector(".orders .cabinet_h .arrow_left");
let breadcrumbs = document.querySelector(".breadcrumbs");
let breadcrumbsLink =  document.querySelector("p.breadcrumbs_link");

function openCabinet(openClass, inner){

    if(mainArea.classList.contains(openClass)){
        mainArea.classList.remove(openClass);
        breadcrumbs.style.display = "none";
    } else{
        mainArea.classList.add(openClass);
        breadcrumbs.style.display = "flex";
        breadcrumbsLink.innerHTML = inner;
    };

};


let varDelivery = "adress-open";
let varOrders = "order-open";

adressBut.addEventListener("click", function(){
    openCabinet(varDelivery, adressBut.innerHTML);
});

    returnButDelivery.addEventListener("click", function(){
        openCabinet(varDelivery, adressBut.innerHTML);
    });

ordersBut.addEventListener("click", function(){
    openCabinet(varOrders, ordersBut.innerHTML);
});

    returnButOrders.addEventListener("click", function(){
        openCabinet(varOrders, ordersBut.innerHTML);
    });


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


// click on order item

let orderItem = document.querySelectorAll(".order-item");
let closeBut = document.querySelector(".order-inside .close-but");
let orderInside = document.querySelector(".order-inside");

function clickOrderItem(){

    if (orderInside.classList.contains("open")){
        orderInside.classList.remove("open");
    } else {
        orderInside.classList.add("open");
    };

};

closeBut.addEventListener("click", clickOrderItem);

for (let i=0; i<orderItem.length; i++){
    orderItem[i].onclick = function(event){
        var target = event.target;
        if (target.classList.contains("rating-field")) return;
        if (target.classList.contains("cabinet_input")) return;
        if (target.classList.contains("yellow-but")) return;
        clickOrderItem();
      };
};