import { addToCart } from "./addToCart.js";

export function renderProducts(list, container) {

  
  container.addEventListener("click" , (e)=>{
    if(e.target.classList.contains("addToCart")){
      addToCart(e.target.parentElement.id , list)
    }
  })

  container.innerHTML = "";

  list.forEach((product) => {
    const card = document.createElement("div");

    card.classList.add("card", "w-[266px]", "h-[500px]" , "flex" , "flex-col" , "gap-4");
    card.setAttribute("id" , product.id)

    card.innerHTML = `<div
                     class="image-box  w-[265px] bg-cover h-[314px]"
                    style="background-image: url('${product.image}');"
                    ></div>
              <div class="row flex gap-2">
                <h5 class="text-[15px] text-black/60 font-medium pt-2 discription">
                 ${product.title}
                </h5>
                
              </div>

              <div class="row  flex justify-between items-center">
                <h4 class="text-[17px] font-medium discription">${product.description}</h4>
                <span class="text-[17px] font-medium">${product.price}</span> 
              </div>
              <button class="addToCart w-50 h-10 border-1 self-center rounded-[3px] cursor-pointer">Add To Cart</button>`;

    container.appendChild(card);
  });
}

export default renderProducts;
