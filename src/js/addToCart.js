import { cart, cartCounter } from "./app.js";

export function addToCart(id , allProducts){
    const result = allProducts.filter((item) => item.id == id)[0];

    cart.push(result);
    console.log(result)
    cartCounter();
}
 

