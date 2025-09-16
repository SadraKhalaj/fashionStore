export function searchProducts(product , keyword){
    const findProduct = product.filter((item) => 
        item.title.toLowerCase().includes(keyword.toLowerCase())
    );
    return findProduct;
}