"use strict";
import { convertPrice } from "./help.js";
      const localProduct = localStorage.getItem("products");
      const products = JSON.parse(localProduct);
      // console.log(products)
    // fetch("https://pageshopping-dfe51-default-rtdb.asia-southeast1.firebasedatabase.app/test.json")
    //     .then((resporn) => resporn.json())
    //     .then((data) =>{
    //       const output = [];
    //       for(const id in data){
    //         output.push(data[id]);
    //       }
          
    //       const ulEl = document.querySelector(".ul");
    //       const max = output.length;
    //       let result = "";
    //       for (let i = 0; i < max; i++) {
    //         result =
    //           result +
    //           `<li class="product"> 
    //           <div></div>
                
    //             <img src="${output[i].imgUrl}" height="360px"   />  <div class="info">
    //               <div class="the-boc">
                  
    //               <p class="title">${output[i].title}</p>
                 
    //               <p class="price"> Giá: ${convertPrice(output[i].price)}đ</p>
    //               <div class="option">
    //               <a href="/Trang-TMDT/mo-ta.html#${output[i].id}">
    //               <button>Xem chi tiết</button></a>
    //               <button class="delete" data-delete-id="${output[i].id}">Xóa</button></div>
    //             </div> </div>  </li> \n`;
    //       }
    //       ulEl.innerHTML = result;




    //     })
    //     .catch((err)=>{
    //       console.log(err)
    //     })
      // })


      const ulEl = document.querySelector(".ul");
      const max = products.length;
      let result = "";
      for (let i = 0; i < max; i++) {
        result =
          result +
          `<li class="product"> 
          <div></div>
            
            <img src="${products[i].imgUrl}" height="360px"   />  <div class="info">
              <div class="the-boc">
              
              <p class="title">${products[i].title}</p>
             
              <p class="price"> Giá: ${convertPrice(products[i].price)}đ</p>
              <div class="option">
              <a href="/Trang-TMDT/mo-ta.html#${products[i].id}">
              <button>Xem chi tiết</button></a>
              <button class="delete" data-delete-id="${products[i].id}">Xóa</button></div>
            </div> </div>  </li> \n`;
      }
      ulEl.innerHTML = result;
      const removeEl=Array.from(document.querySelectorAll(".delete"))
      
      const modalEl = document.querySelector(".modal-question")
      const yesEl=document.querySelector(".yes")
      const noEl=document.querySelector(".no")

      
      const max1 = removeEl.length;
      for(let i=0;i<max1;i++){
        removeEl[i].addEventListener("click",()=>{
          const oldListJson = localStorage.getItem("products");
          const existingList = JSON.parse(oldListJson);
          existingList.splice(i,1)
          localStorage.setItem("products", JSON.stringify(existingList));
          location.reload();
         })}
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
        
          











        
      // }
      // for (let i = 0; i < products.length; i++) {
      //   const imageUrl = products[i].imageUrl;
      //   const title = products[i].title;
      //   const price = products[i].price;
      //   const id = products[i].id;}

      // //Cách 2 xóa sản phẩm
      // ulEl.addEventListener("click", (event) =>{
      //   const deleteBtn = event.target.closest(".delete")
      //   //closest: chỉ được đúng cái class mà chứa nó, tìm từ trong ra ngoài
      //   console.log("vao day")
      //   if(!deleteBtn) return; //nếu ấn ko đúng nút xóa thì thôi


      //   // const deleteButton = event.target;
      //   const prodId = deleteBtn.dataset.products;
      //   const newProductsList=products.filter(({id})=>{
      //     return id !==prodId
      //   })
      //   const newProductsListJSON=JSON.stringify(newProductsList)
      //   localStorage.setItem("products", newProductsListJSON)
      //   location.reload();
      // })