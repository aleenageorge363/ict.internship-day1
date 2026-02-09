// to add two numbers
function add(a,b){
    let c = a+b;
    return c;
    // console.log(c);
}
// add(3,3);
 let p=add(3,3);
 console.log(p);
//  arrow function
const arrowAdd =(a,b) =>{
    console.log(a+b);
};
arrowAdd(2,2);
// concatenate firstname and lastname
const myname =(first,last) =>{
    // console.log("My full name is:" ,first+' ' +last)
    console.log(`My name is ${first} ${last}`)
};
myname("aleena","george");
