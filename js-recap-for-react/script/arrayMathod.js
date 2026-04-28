const products = [
    {name:"lux", brand:"lux", price: 55, color:"white"},
    {name:"sunsilk", brand:"sunsilk", price:3, color:"black"},
    {name:"coconut oil", brand:"coconut", price: 255, color:"white"},
    {name:"vivel", brand:"vivel", price: 100, color:"white"},
    {name:"dove", brand:"dove", price: 155, color:"white"},
]
// map
const newProduct = products.map(product=>product.name);
// console.log(newProduct);
// foreach
products.forEach(product =>{
    if(product.price>=100){
    console.log(product.price);
    }

})
// filter
const filterProduct = products.filter(product=>product.price<100);
console.log(filterProduct);
// find
const findProduct = products.find(product =>product.color === "white");
console.log(findProduct);
