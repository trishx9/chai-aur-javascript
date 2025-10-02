// let arr = [1,5,5,6,2,4,6,8,10]
// function calc(ele){
//     return ele % 2 == 0;
// }


//find
//let ans = arr.find(calc); //6
//    console.log(ans);


// //some   
// let ans = arr.some(calc);
// console.log(ans);

// //every
// ans = arr.every(calc);
// console.log(ans)



// map
// ans = arr.map((ele) =>{

//     ele * 2
// })

// console.log(ans)


// //filter









// //reduce
// // function sumofArray(arr){

// // }

// console.log(arr.reduce((sum,curr) => sum + curr,0))      //47


// //max
// console.log(arr.reduce((acc,curr) => {
//     if(curr > acc){
//         acc = curr;
//     }
//     return acc;
//  } , -456123))



// const express = require('express');
// const app = express();

// let arr =[
//     {id: 1, name: "trisha", age: 20},
//     {id: 2, name: "seena", age: 20},
//     {id: 3, name: "priya", age: 21},
// ]

// app.get("/users",  (req , res ) =>{
//     res.send(arr);

// })
// app.listen(8000, () => {
//     console.log("server started")
// })


const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World! Express is working 🚀");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
