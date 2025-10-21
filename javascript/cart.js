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

//  delete cart items

let cartItem = document.querySelectorAll(".cart-item");
let cartItemBottom = document.querySelectorAll(".confirm-content-detail");
let deleteItemBut = document.querySelectorAll(".cart-item_delete");

function deleteItem(container){
    container.remove();
};

for(let i=0; i<cartItem.length; i++){
    deleteItemBut[i].addEventListener("click", function(){
        deleteItem(cartItem[i]);
        deleteItem(cartItemBottom[i]);
        calculateSum();
        countItems();
    });
};

// calculate the result

let wholeSum = document.querySelector(".whole-sum .sum_p span");
let discountSum = document.querySelector(".discount-sum .sum_p span");
let finalSum = document.querySelector(".final-sum .sum_p span");


function calculateSum(){

    let secondPrice = document.querySelectorAll(".first-cart .product_old-price span");
    let productEconomy = document.querySelectorAll(".first-cart .model_economy span");
    let productCount = document.querySelectorAll(".first-cart .cart-item_number");

    let whole = 0;
    let discount = 0;
    let final = 0;
    for(let i=0; i<productEconomy.length; i++){
        let countNumber = productCount[i].value;
        whole += +(secondPrice[i].innerHTML*countNumber);
        discount += +(productEconomy[i].innerHTML*countNumber);
    };
    
    final = whole - discount;
    wholeSum.innerHTML = whole;
    discountSum.innerHTML = discount;
    finalSum.innerHTML = final;
    document.querySelector(".confirm-detail_contain span").innerHTML = final;
};

calculateSum();

function countItems(){

    let count = 0;
    let items = document.querySelectorAll(".cart-item-main");
    count = items.length;
    document.querySelector(".confirm-detail_contain.count-items").innerHTML = count;

};
countItems();

// button clear the cart

let clearBut = document.querySelector(".clear-cart");

function clearButFunc(){

    for(let i=0; i<cartItem.length; i++){
            deleteItem(cartItem[i]);
            deleteItem(cartItemBottom[i]);
            calculateSum();
            countItems();
    };

};

clearBut.addEventListener("click", clearButFunc);


// number input

let plusBut = document.querySelectorAll(".add-item");
let minusBut = document.querySelectorAll(".delete-item"); 
let inputCount = document.querySelectorAll(".cart-item_number");

function plusInput(input){
    let a = input.value;
    a++;
    input.value = a;
}

 for(let i=0; i<plusBut.length; i++){
     plusBut[i].addEventListener("click", function(){
         plusInput(inputCount[i]);
         calculateSum();
         writeCountItems();
     });
 };

function minusInput(input){
    let a = input.value;
    if(a>0){
        a--;
    };
    input.value = a;
}

 for(let i=0; i<minusBut.length; i++){
     minusBut[i].addEventListener("click", function(){
         minusInput(inputCount[i]);
         calculateSum();
         writeCountItems();
     });
 };

function writeCountItems(){
    let confirmCount = document.querySelectorAll(".confirm-content_count");
    for (let i=0; i<confirmCount.length; i++){
        confirmCount[i].innerHTML = inputCount[i].value;
    };
};
writeCountItems();

//  click on continue button

let disabledBlock = document.querySelectorAll(".disabled-block");
let form = document.querySelector("#delivery");

function openBlock(first, second){

    if (first===true){
        if(finalSum.innerHTML>0){
            disabledBlock[0].classList.remove("disabled-block");
            removeDisabled(true, false);
        };
    };

    if(second===true){
        disabledBlock[1].classList.remove("disabled-block");
        disabledBlock[2].classList.remove("disabled-block");
        removeDisabled(false, true);
    }

};

function removeDisabled(first, second){

    let blocks;
    if(first==true){
        blocks = document.querySelectorAll(".delivery-way .disabled");
    } else if(second==true){
        blocks = document.querySelectorAll(".payment .disabled");
    };

    for(let i=0; i<blocks.length; i++){
        blocks[i].removeAttribute("disabled");
    };

    if(second==true){
        document.querySelector(".confirm .yellow-but").removeAttribute("disabled");
    };

};

let but1 = document.querySelector(".cart-sum .yellow-but");

but1.addEventListener("click", function(){
    openBlock(true, false);
});

let but2  = document.querySelector("#delivery .yellow-but");

but2.addEventListener("click", function(event){
    event.preventDefault();
    openBlock(false, true);
});


// final delivery and payment

let delBlock = document.querySelector(".confirm-detail_contain.del");
let payBlock = document.querySelector(".confirm-detail_contain.pay");

let radioCom = document.querySelectorAll(".company_radio");


function writeCompanyValue(){
    for (let i=0; i<radioCom.length; i++){
        if(radioCom[i].checked){
            delBlock.innerHTML = radioCom[i].value;
        };
    };
};
writeCompanyValue();

for(let i=0; i<radioCom.length; i++){
    radioCom[i].addEventListener("change", writeCompanyValue);
};

let radioPay = document.querySelectorAll(".payment_radio");

function writePaymentValue(){
    for (let i=0; i<radioPay.length; i++){
        if(radioPay[i].checked){
            payBlock.innerHTML = radioPay[i].value;
        };
    };
};
writePaymentValue();

for(let i=0; i<radioPay.length; i++){
    radioPay[i].addEventListener("change", writePaymentValue);
};
