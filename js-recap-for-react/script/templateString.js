const fName = "ulse";
const lName = "kumar";
// console.log(fName + lName);
// template string
console.log(`Full name = ${fName} ${lName}`);
const number = [1,2,3,4,5,6];
// console.log(...number);
// spread operator
console.log(...number, 7, 8,9,10);
function sum (a, b){
    // console.log(a+b); 
    console.log(arguments);
    
}
sum (1, 5)
// array function
const diff = (a, b) =>{
console.log(a-b);

}
diff(10, 5);
const add = (a, b,c) => a+ b+ c;
const result = add(2, 4,6);
console.log(result);



