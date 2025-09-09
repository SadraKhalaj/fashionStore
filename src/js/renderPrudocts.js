export function renderProducts(list, container) {
  container.innerHTML = "";

  list.forEach((product) => {
    const card = document.createElement("div");

    card.classList.add("card", "w-2/7", "h-[500px]");

    card.innerHTML = `<div
                     class="image-box  w-[265px] bg-cover h-[314px]"
                    style="background-image: url('${product.image}');"
                    ></div>
              <div class="row flex gap-2">
                <h5 class="text-[15px] text-black/60 font-medium pt-2">
                 ${product.title}
                </h5>
                
              </div>
              <div class="row discription flex justify-between items-center">
                <h4 class="text-[17px] font-medium">${product.description}</h4>
                <span class="text-[17px] font-medium">${product.price}</span>
              </div>`;

    container.appendChild(card);
  });
}

export default renderProducts;
