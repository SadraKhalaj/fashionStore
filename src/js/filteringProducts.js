export function filteringProductsFunc(products , title){
    const separation = products.filter(item => item.category.includes(title));
    return separation;
}