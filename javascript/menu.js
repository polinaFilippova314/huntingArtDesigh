"use strict"

// 
let listItems = document.querySelectorAll(".list-item");

function fillClass(){

    for (let i=0; i<listItems.length; i++){
        if(listItems[i].children.length>1){
            listItems[i].classList.add("arrow-right");
        };
    };

};

fillClass();

let clickParent = document.querySelectorAll(".arrow-right");
let clickItems = document.querySelectorAll(".arrow-right .header_link");

function openList(index){

    if (!clickParent[index].classList.contains("opened")){
        clickParent[index].classList.add("opened");
    } else{
        clickParent[index].classList.remove("opened");
    };

};

for (let i=0; i<clickItems.length; i++){

    clickItems[i].addEventListener("click", function(){
        openList(i);
    });

};

// three dots

// let recText = document.querySelectorAll(".recommendation_p");

// function changeTextOnDots(block){

// }


// work of favorite button

let favButs = document.querySelectorAll(".favorite-but");

function clickFavBut(option){

    if (favButs[option].classList.contains("choosed")){
        favButs[option].classList.remove("choosed");
    } else{
        favButs[option].classList.add("choosed");
    };

};

for (let i=0; i<favButs.length; i++){

    favButs[i].addEventListener("click", function(){
        clickFavBut(i);
    });

};


// open/close log in

let logBut = document.querySelector("button.office_text");
let closeLoginBut = document.querySelector(".login_close");
let loginPopover = document.querySelector(".login-popover");
let upHeader = document.querySelector(".up-header");
let middleHeader = document.querySelector(".middle-header");
let mainHeader = document.querySelector(".main-header");

function openLoginArea(){
    
    loginPopover.style.display = "block";
    document.getElementById("header_burger-close").checked = true;
    if(window.innerWidth>939){
        addAllHeader();
    };

};
function closeLoginArea(){

    loginPopover.style.display = "none";
    if(window.innerWidth>939){
        deleteAllHeader();
    };

};

logBut.addEventListener("click", openLoginArea);
closeLoginBut.addEventListener("click", closeLoginArea);

function addClass(arg){
    arg.classList.add("fixed");
;}
function deleteClass(arg){
    arg.classList.remove("fixed");
};
function addAllHeader(){
    addClass(upHeader);
    addClass(middleHeader);
    addClass(mainHeader);
};
function deleteAllHeader(){
    deleteClass(upHeader);
    deleteClass(middleHeader);
    deleteClass(mainHeader);
}



// focus on input search

let inputSearch = document.querySelector(".search_input");
let searchResult = document.querySelector(".search-result"); 

function focusSearch(){
    searchResult.style.display = "block";
    if(window.innerWidth<940){
        addAllHeader();
    };
};

function blurSearch(){
    searchResult.style.display = "none";
    if(window.innerWidth<940){
        deleteAllHeader();
    };
};

inputSearch.addEventListener("focus", focusSearch);
inputSearch.addEventListener("blur", blurSearch);


// switch login and registration


let entryBut = document.querySelector(".log-in");
let registBut = document.querySelector(".registrate");
let parentContainer = document.querySelector(".login-container-main");
let forms = document.querySelectorAll(".login-form");

function openLogin(){
    if(parentContainer.classList.contains("registrate-area")){

        parentContainer.classList.remove("registrate-area");
        forms[1].style.display = "none";
        forms[0].style.display = "block";

    };
};
entryBut.addEventListener("click", openLogin);

function openRegist(){
    if(!parentContainer.classList.contains("registrate-area")){

        parentContainer.classList.add("registrate-area");
        forms[0].style.display = "none";
        forms[1].style.display = "block";

    };

};
registBut.addEventListener("click", openRegist);

