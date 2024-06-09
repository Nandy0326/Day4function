let num=[1,2,3,4,5];
const odd=function oddnumber(x){
    for (let i=0;i<num.length;i++){
        if(num[i]%2!==0){
            console.log(num[i]);
        }
    }
}
console.log(odd(num));
/*

let strings=['converting','string','to','titlecase']
function titleCase(str) {
    return strings.toLowerCase().replace(/(?:^|\s)\w/g, function(match) {
        return match.toUpperCase();
    });
}


console.log(titleCase(strings));*/

let num1=new Array(1,2,3,4,5);
function array(x){
    let sum=0;
    for(let i=0;i<num1.length;i++)
    {
        sum=sum+num1[i];
        console.log(sum);

    }
}
array();

let num2=[2,3,4,5,6,7];
const prime=function isPrime(num) {
    if (num2 <= 1) return false; 
    for (let i = 2; i < num2.legnth; i++) {
        if (num2 % i === 0) {
            return false; 
        }
    }
    return true; 
}
console.log(prime(num2));

let arr = ["apple", "mango",
    "apple", "orange", "mango", "mango"];

const remve=function removeDuplicates(arr) {
let unique = [];
for (i = 0; i < arr.length; i++) {
  if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i]);
  }
}
return unique;
}
console.log(remve(arr));

let num3=[1,2,3,4,5];
const oddnumber=(x)=>{
    for (let i=0;i<num3.length;i++){
        if(num3[i]%2!==0){
            console.log(num3[i]);
        }
    }
}
console.log(odd(num3));


let num4=new Array(1,2,3,4,5);
const sum=(x)=>{
    let sum=0;
    for(let i=0;i<num4.length;i++)
    {
        sum=sum+num4[i];
        console.log(sum);

    }
}
array();


let num5=[2,3,4,5,6,7];
const prime1=(num)=> {
    if (num5 <= 1) return false; 
    for (let i = 2; i < num5.legnth; i++) {
        if (num5 % i === 0) {
            return false; 
        }
    }
    return true; 
}
console.log(prime(num5));
