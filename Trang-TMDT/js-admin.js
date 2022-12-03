"use strict";
      const formEl = document.querySelector(".form");
      const inputEl = Array.from(document.getElementsByTagName("input"));
      const erroEl = document.querySelectorAll(".erro");
      const textareaEl = Array.from(document.getElementsByTagName("textarea"));
      inputEl.push(textareaEl[0]);
      formEl.addEventListener("submit", (event) => {
        event.preventDefault();
      //   // Gửi data
      //   fetch("https://pageshopping-dfe51-default-rtdb.asia-southeast1.firebasedatabase.app/test.json",
      //   {
      //     method:"POST",
      //     body:JSON.stringify({test:arr}),
      //     headers:{
      //       "Conten-Type" : "application/json",
      //     },
      //   }
        
        
      //   )
      //   //Lấy data về
      //   fetch("https://pageshopping-dfe51-default-rtdb.asia-southeast1.firebasedatabase.app/test.json")
      //   .then((resporn) => resporn.json())
      //   .then((data) =>{
      //     const output = [];
      //     for(const id in data){
      //       output.push(data[id]);
      //     }
      //     console.log(output);
      //   })
      //   .catch((err)=>{
      //     console.log(err)
      //   })
      // // })
      function postNewProduct(product){
        fetch("https://pageshopping-dfe51-default-rtdb.asia-southeast1.firebasedatabase.app/test.json",
        {
          method:"POST",
          body:JSON.stringify(product),
          headers:{
            "Conten-Type" : "application/json",
          },
        }
        
        
        )
      }



        
        for (let i = 0; i < inputEl.length; i++) {
          if (inputEl[i].value.trim().length === 0) {
            erroEl[i].classList.remove("hidden");
          }
        }
        const formIsValid = !inputEl.some((item) => {
          return item.value.trim().length === 0;
        });

        if (formIsValid) {
          alert(`Đăng thành công`);
          location.reload();
          for (let i = 0; i < inputEl.length; i++) {
            erroEl[i].classList.add("hidden");
          }

          const formData = [...new FormData(formEl)]; // trả về kiểu Entrities

          const newId = "id-" + Date.now().toString().slice(-5);
          const { title, imgUrl, price, description } =
            Object.fromEntries(formData); //biến Entries thành Object
          const newProduct = { id: newId, title, imgUrl, price, description }; //tạo Object với các giá trị nhập vào
          //đây là kiểu tối ưu của Js

          if (!localStorage.getItem("products")) {
            const productsList = [newProduct];
            localStorage.setItem("products", JSON.stringify(productsList));
          } else {
            const oldListJson = localStorage.getItem("products");
            const existingList = JSON.parse(oldListJson);
            existingList.push(newProduct);
            localStorage.setItem("products", JSON.stringify(existingList));
          }
          // postNewProduct(newProduct);
        }
      });
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