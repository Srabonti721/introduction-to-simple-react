let age = 20;
age = 21;
// console.log(age);
// const country = "BANGLADESH";
const num = 45;
// if(num>20 || num <=30){
//     console.log("number gater then 20");
// }
// else{
//     console.log("number less then 20");   
// }

function sum (a, b){
    // const result = a + b;
    // console.log(result);
       const result = a + b;
       return result;
}
// sum(10, 5)
const result = sum (20, 5);
console.log(result);


const friends = ["hero", "arohi", "hemal", "auruna"];

// console.log(friends[1]);
friends.push("humayour");
friends.pop();
friends.unshift("anuratha");
friends.shift()
console.log(friends);

for (let index = 0; index< friends.length; index++) {
    const element = friends[index];
    console.log(element);   
}

const product = {
    name : "sunscrime", 
    price : 1200,
    brand: "oseya", 
    color: "white"
}
console.log(product['brand']);
