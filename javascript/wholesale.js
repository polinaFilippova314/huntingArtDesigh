"use strict"

// click on button registration

let registWholeSaleBut = document.getElementById("registration_but");
let registWholeSaleField = document.querySelector(".registration");
let registWholeSaleBack = document.querySelector(".wholesale_slider");

function registWholeSaleOpen(){

    if(window.innerWidth<799){
        if (registWholeSaleField.classList.contains("open")){
            registWholeSaleField.classList.remove("open");
        } else{
            registWholeSaleField.classList.add("open")
        };
    };

};

registWholeSaleBut.addEventListener("click", registWholeSaleOpen);
registWholeSaleBack.addEventListener("click", registWholeSaleOpen);

// validation of telephone number


var input = document.getElementById("tel_input");
String.prototype.insert = function (index, string) {
  if (index > this.length) {
    return this;
  }
  return this.substring(0, index) + string + this.substring(index, this.length);
};
let lastLength = 0;
input.onfocus = function(){
  if (!input.value){
    input.value ="+7 (";
  };
};
input.oninput = function(){
  let raw = input.value;
  let number = raw.replace(/[^0-9]/g, "");

  let hasRemoved = (lastLength - raw.length) == 1;
  lastLength = raw.length;

  number = number.insert(0, "+");
  number = number.insert(2, " (").insert(7, ") ");
  number = number.insert(12, " ").insert(15, " ");

  if (number.length >= 18) {
    number = number.substring(0, 18);
  }
  if (hasRemoved && isNaN(parseInt(number[number.length-1]), 10)) {
    if (isNaN(parseInt(number[number.length-2]))) {
      number = number.substring(0, number.length-1);
    }
    number = number.substring(0, number.length-1);
  }

  input.value = number;
  if(input.value.length == 18){
    document.querySelector(".registration-form .yellow-but").disabled = false;
  } else {
    document.querySelector(".registration-form .yellow-but").disabled = true;
  };
};


// нужен макет, как будет выглядеть окно после прохождения решистрации

// let formOrder = document.querySelector(".registration-form");
// function validationForm(evt){
//   evt.preventDefault();
//   if(input.value.length == 18 && document.getElementById("tel_input").value.length>3){
//     modalArea1.style.display = "none";
//     modalArea2.style.display = "block";
//   };
// };
// formOrder.onsubmit =  validationForm;


// open/close popover of country and region

let countryPopover = document.querySelector(".country-popover .popover-list");
let regionPopover = document.querySelector(".region-popover .popover-list");
let countryInput = document.querySelector(".country-popover .wholesale_input");
let regionInput = document.querySelector(".region-popover .wholesale_input");


function writeList(inputPopover, container, listInside){

    inputPopover.value = listInside.innerHTML;
    container.classList.remove("open");
    listInside.classList.add("choosed");

};

function addClick(inputPopover, container, list){

    for(let i=0; i<list.length; i++){
        list[i].addEventListener("click", function(){
            for (let i=0; i<list.length; i++){
                list[i].classList.remove("choosed");
            };
            writeList(inputPopover, container, list[i]);
        });
    };

};

function openPopover(inputPopover, container, list){

    if( container.classList.contains("open")){
        container.classList.remove("open");
    } else{
        container.classList.add("open");
        addClick(inputPopover, container, list);
    };

};

// countryInput.addEventListener("click", function(){
//     openPopover(countryInput, countryPopover, document.querySelectorAll(".country-popover .popover_li"));
// });

// regionInput.addEventListener("click", function(){
//     openPopover(regionInput, regionPopover, document.querySelectorAll(".region-popover .popover_li"));
// });

countryInput.addEventListener("focus", function(){
    openPopover(countryInput, countryPopover, document.querySelectorAll(".country-popover .popover_li"));
});

regionInput.addEventListener("focus", function(){
    openPopover(regionInput, regionPopover, document.querySelectorAll(".region-popover .popover_li"));
});
document.querySelector(".wholesale").onclick = function(event){
    var target = event.target;
    if(target.classList.contains("popover_li")) return;
    if(target.classList.contains("popover")) return;
    if(target.classList.contains("popover-input")) return;
    countryPopover.classList.remove("open");
    regionPopover.classList.remove("open");
}

// restore password

let fieldset = document.querySelector(".fieldset");
let restoreBut = document.querySelector(".wholesale_restore"); 
let legend= document.querySelector(".fieldset legend"); 

function clickRestoreBut(){

    if( fieldset.classList.contains("enter")){
        fieldset.classList.remove("enter");
        fieldset.classList.add("restore");
        restoreBut.style.display = "none";
        legend.innerHTML = "Восстановление пароля";
    };

};

restoreBut.addEventListener("click", clickRestoreBut);