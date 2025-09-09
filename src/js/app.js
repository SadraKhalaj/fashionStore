import { getProducts } from "./getProducts.js";
import { renderProducts } from "./renderPrudocts.js";


const productsContainer = document.querySelector(".products-container");

const data = await getProducts();
renderProducts(data , productsContainer)