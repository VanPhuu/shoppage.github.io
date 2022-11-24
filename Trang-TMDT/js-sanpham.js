"use strict";

      const localProduct = localStorage.getItem("products");
      const products = JSON.parse(localProduct);
      const ulEl = document.querySelector(".ul");
      const max = products.length;
      let result = "";
      for (let i = 0; i < max; i++) {
        result =
          result +
          `<li class="product"> 
          <div><i class="fa-regular fa-circle-xmark"></i></div>
              <img src="${products[i].imgUrl}" />  <div class="info">
              <div class="the-boc">
              <p class="title">${products[i].title}</p>
              <p class="price"> Giá: ${products[i].price}</p>
              <button>Thêm vào giỏ</button>
            </div> </div>  </li> \n`;
      }
      ulEl.innerHTML = result;
      const removeEl=Array.from(document.querySelectorAll(".fa-regular"))
      
      const modalEl = document.querySelector(".modal-question")
      const yesEl=document.querySelector(".yes")
      const noEl=document.querySelector(".no")

      
      const max1 = removeEl.length;
      for(let i=0;i<max1;i++){
        removeEl[i].addEventListener("click",()=>{ 
        
          modalEl.classList.remove("modal-hidden")
          ulEl.style.filter = "blur(5px)"
          noEl.addEventListener("click",()=>{
          modalEl.classList.add("modal-hidden")
          ulEl.style.filter = "blur(0px)"
          })
          yesEl.addEventListener("click",()=>{
          ulEl.style.filter = "blur(0px)"

            products.splice(i,1)
            localStorage.removeItem(products)
            localStorage.setItem("products", JSON.stringify(products));
            location.reload();
          })
        })
      }
      
