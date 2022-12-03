'use strict'
import { convertPrice } from "./help.js"
const truEl=document.querySelector(".tru")
const congEl=document.querySelector(".cong")
const soluong=document.querySelector(".soluong")
const giaTri = soluong.textContent;
let so=Number(giaTri)
truEl.addEventListener("click",()=>{
    if(so===1) return;
 so--;
 soluong.textContent=so;
})
congEl.addEventListener("click",()=>{
    so++;
    soluong.textContent=so;

})
const hash=location.hash.slice(-8);
const localProduct = localStorage.getItem("products");
      const products = JSON.parse(localProduct);
const h2=document.querySelector(".h2") //tiêu đề
const price = document.querySelector(".price")  //giá
const imgUrl = document.querySelector(".imgUrl") //link ảnh
const description = document.querySelector(".description") //mô tả
const findId=products.find((item)=>{
    return item.id===hash
})

h2.textContent=`${findId.title} - ${findId.id}`
price.textContent=`Giá: ${convertPrice(findId.price)}đ`
imgUrl.innerHTML=`<img
src="${findId.imgUrl}"
alt=""
width="500px"
/>`
description.textContent=`Mô tả: ${findId.description}`

const basketEl=document.querySelector(".basket")
const deleteEl=document.querySelector(".delete")

// const newCart= {quantity:so,id,title, imgUrl, price, description}

// console.log(findId)

basketEl.addEventListener("click",()=>{
    alert("Thêm vào giỏ thành công")
    if (!localStorage.getItem("cart")) {
        findId.quantity=so;
        const cartList = [findId];
        localStorage.setItem("cart", JSON.stringify(cartList));
      }
      else {
        if(JSON.parse(localStorage.getItem('cart')).some((item)=>{return item.id===hash})){
            const cartListJson = localStorage.getItem("cart");
            const cartList = JSON.parse(cartListJson);
            const findIdDup = cartList.findIndex((item)=>{
               return item.id===hash;
            })
            cartList[findIdDup].quantity=cartList[findIdDup].quantity+so;
            localStorage.setItem("cart", JSON.stringify(cartList));
      location.reload();

            return;
        }
        findId.quantity=so;

        const oldListJson = localStorage.getItem("cart");
        const existingList = JSON.parse(oldListJson);
        existingList.push(findId);
        localStorage.setItem("cart", JSON.stringify(existingList));
      location.reload();

      }
})
if(localStorage.getItem("cart")){
    const localCart = localStorage.getItem("cart");
    const cart = JSON.parse(localCart);
    const cercil = document.querySelector(".cercil")
    cercil.textContent=`${cart.length}`
  }
  else{
    const cercil = document.querySelector(".cercil")
    cercil.style.visibility= "hidden";
    }