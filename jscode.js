let arr= [2,5,6,7,8,4,14];

//1.Example of forEach loop for square of no.s in array

/*arr.forEach((val)=>{
    console.log(val*val) ;
})*/

//2.Example of map function for square of no.s in array and store it in new array

/*let newArr=arr.map((val)=>{
    return val*val;
})
console.log(newArr);*/

//3.Example of filter function to store even no.s in array

/*let newArr=arr.filter((val)=>{
    return val%2===0;
})
console.log(newArr);*/

//4. Example of reduce function to get sum of numbers of array

let newArr=arr.reduce((res,curr)=>{
    return res+curr;
})
console.log(newArr);