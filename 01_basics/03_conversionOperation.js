// let score = 33 //number

// //const {score } = req.body  //In line 1 we know that score is a number but in line 3 we don't know what is the type of score. 

// console.log (typeof score);
// console.log (typeof (score));

// let age = "33abc" // string

// console.log(typeof age)


// let valueInNumber = Number(age) // number

// console.log(typeof valueInNumber)  // converted string to number


// console.log(valueInNumber) //NaN = not a number 



// let name = null 

// console.log(typeof name) // name = null  / object

// //"33" ==> 33
// // "33abc" ==>NaN
// // boolean  true =1 ,false = 0

// //let isLoggedIn =1  //true

// let isLoggedIn = "" // 1 => true ,0 =>false and empty string => false , non-emoty string => true
// +
// //let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn)



// let someNumber = 33

// console.log(someNumber) //33

// let stringNumber= String(someNumber)
// console.log(stringNumber) //33

// console.log(typeof stringNumber) // string - means converted to strings

// //************************************************ OPERATIONS *********************************************//


//  let value = 3
//  let negValue = -value
// console.log(negValue)

// console.log(x)
// var x = 10  // hoising  // undefine

// console.log (y)
// let y = 20   //hoisted but we cannot access them in there temporal zone // error

// {
//     var p = 1 
//     let q = 2
//     const r = 3
// }




// console.log("scope_chain.js")
// function a(){
//     var b = 10 
//     c()
//     function c(){
//         d()
//         function d(){
//             e()
//             function e(){
//                 console.log(b)

//             }
//         }
//     }
// }
// a();

// age = "5" + 2
// score = "5" - 2
// console.log(age)
// console.log(score)
// console.log(typeof score)

//  function name(trisha , rajput ){
//     return trisha + rajput
//  }
//  console.log(name)

function greet(name){
    console.log("hello ,"  +   name)
}

 greet("trisha")
greet("rajput")