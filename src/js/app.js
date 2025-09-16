import { getProducts } from "./getProducts.js";
import { renderProducts } from "./renderPrudocts.js";
import { searchProducts } from "./searchProducts.js";
import { filteringProductsFunc } from "./filteringProducts.js";

const productsContainer = document.querySelector(".products-container");
const searchInput = document.querySelector(".searchInput")
const filteringProducts = document.querySelectorAll(".filtering")

const data = await getProducts();
renderProducts(data , productsContainer)

searchInput.addEventListener("input" , (e)=>{
    const search = searchProducts(data , e.target.value);
    renderProducts(search , productsContainer)
})

filteringProducts.forEach((item) => {
    item.addEventListener("click" , (e) => {
        if( e.target.innerText == "All") renderProducts(data , productsContainer);
        else{
            const newSeparation = filteringProductsFunc(data , e.target.innerText);

            renderProducts(newSeparation , productsContainer)
        }
    })
})