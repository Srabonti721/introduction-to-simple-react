const person={
    name:"gill", 
    age:28, 
    friends : ["rohit", "sonam", "sara"], 
    family : {
        fatherName : "gujan udden", 
        motherName : "gulape begum"
    }
}
const jsonData = JSON.stringify(person);
// console.log(jsonData);
const parseData = JSON.parse(jsonData);
// console.log(parseData);

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then (res => res.json())
// .then(data=> console.log(data))

const person2 ={
    name : "rakiba",
     age:32,
     isMarried : true, 
     friends :["slama", "sumona", "sujon",], 
     weight: "60kg"
}
// console.log(Object.keys(person2));
// console.log(Object.values(person2));
// console.log(Object.entries(person2));



const products = [
    {name:"lux Shop", brand:"lux", price: 55, color:"white"},
    {name:"sunsilk Sampu", brand:"sunsilk", price:3, color:"black"},
    {name:"coconut oil", brand:"coconut", price: 255, color:"white"},
    {name:"vivel Shop", brand:"vivel", price: 100, color:"white"},
    {name:"dove Sampu", brand:"dove", price: 155, color:"white"},
    {name:"vivel2 Shop", brand:"vivel", price: 100, color:"white"},
]
const newData = {
    name:"suns Creme" , 
    price: 1200, 
    brand: "mamaAthe", 
    color : "white"
}
const newProductArray = [...products, newData];
console.log(newProductArray);

const filterProduct = products.filter(product => product.brand!=="vivel")
console.log(filterProduct);
const newProductArray2 = [ ...filterProduct, newData]
console.log(newProductArray2);

