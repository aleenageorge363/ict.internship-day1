let fruits =["apple","grapes",1];
console.log(fruits);
console.log(fruits[0]);
// to add an element in the last of this array
fruits.push("banana");
console.log(fruits);
// to add an element in the first of the array
fruits.unshift("watermelon");
console.log(fruits);
// to delete the last element
fruits.pop();
console.log(fruits);
// to delete the first element
fruits.shift();
console.log(fruits);
// to find the length of an array
console.log(fruits.length);
// array of object
let MCAbatchA = [
    {name: "anu",rollno:1},
    {name: "any",rollno:2},
    {name: "aru",rollno:3}
];
console.log(MCAbatchA[1].name)
console.log(`${MCAbatchA[1].name} Roll no: ${MCAbatchA[1].rollno} from MCA batch`);