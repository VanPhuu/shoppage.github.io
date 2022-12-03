"use strict"
import { convertPrice } from "./help.js";
if(localStorage.getItem("cart")){

const localCart = localStorage.getItem("cart");
const cart = JSON.parse(localCart);
const cercil = document.querySelector(".cercil")
cercil.textContent=`${cart.length}`
const productsList = document.querySelector(".products-list")
const billProduct = document.querySelector('.bill-product')
let result = "";
let resultBill="";
let value = []
for(let i=0;i<cart.length;i++){
    const quantityValue = cart[i].price *cart[i].quantity;
    value.push(quantityValue)
productsList.innerHTML=
result+=
`
<li class="products-list-in">
              <img
                src="${cart[i].imgUrl}"
                alt=""
                height= 350px;
              />
              <div class="info">
                <p class="title name">${cart[i].title}</p>
                <p class="title">Giá: ${convertPrice(cart[i].price)}đ</p>
                <p class="title">Số lượng: ${cart[i].quantity}</p>
              </div>
              <i class="fa-solid fa-xmark"></i>
            </li>
`
billProduct.innerHTML= resultBill +=
`<li class="bill-product-in">
<div class="bill-money">${cart[i].title} (SL:${cart[i].quantity})</div>
<div class="money">${convertPrice(value[i])}đ</div>
</li>
`
}
const money1 = document.querySelector(".money1")
const total = value.reduce((a,b) =>{
    return a+b
},0)
money1.innerHTML=`${convertPrice(total)}đ`
}
else{
const cercil = document.querySelector(".cercil")
cercil.style.visibility= "hidden";
}
const faXmark = Array.from(document.querySelectorAll(".fa-xmark"))
const modalQuestion = document.querySelector(".modal-question")
const display= document.querySelector(".display")
const yes = document.querySelector(".yes")
const no = document.querySelector(".no")
for(let i = 0;i<faXmark.length;i++){
  faXmark[i].addEventListener("click",()=>{
    modalQuestion.classList.remove("modal-hidden")
    display.style.filter= "blur(2px)";
    
    no.addEventListener("click", ()=>{
      modalQuestion.classList.add("modal-hidden")
    display.style.filter= "blur(0px)";
    })
     
    yes.addEventListener("click", ()=>{
      modalQuestion.classList.add("modal-hidden")
    display.style.filter= "blur(0px)";

          const oldListJson = localStorage.getItem("cart");
          const existingList = JSON.parse(oldListJson);
          existingList.splice(i,1)
          localStorage.setItem("cart", JSON.stringify(existingList));
          location.reload();
    })
     

  })
}