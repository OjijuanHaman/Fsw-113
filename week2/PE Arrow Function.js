//CLO1
var temp = () => 104

console.log(typeof temp)

console.log(temp())

//a: function
//b: 104

//CLO2

var temp = mulitiplier => 104 * mulitiplier

console.log(temp(2))

//a: 208

//CLO3

var temp = ( mulitiplier, devider) => 104 * mulitiplier / devider

console.log(temp(3,6))

//1: 52

//CLO4

var temp = (mulitiplier, devider)=> {
    let result =  104 *mulitiplier
    if (result){
        result = 104 / devider
    }
    return result
}

console.log(temp(3,6))

//1: 17.333333333333332

//CLO5
/*
var clickButton = function ('click',function(){
    console.log(this)
    
}

console.log(clickButton())

//1: Error
*/
//CLO6

var clickButton = function(){
    console.log(this)
}
clickButton()

/*1: <ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Function (anonymous)]
  },
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Function (anonymous)]
  },
  '$jsDebugIsRegistered': true
}

*/

//CLO7 
var clickButton = () => {
    console.log(this)
}

clickButton()

//1: {}

//CLO8

var person = {
    name: 'David Smith',
    age: 56,
    details:function(){
        console.log(this)
    }
}

person.details()

//1: { name: 'David Smith', age: 56, details: [Function: details] }

//CLO9

var person = {
    name : 'David Smith',
    age: 56,
    details: () => {
        console.log(this)
    }
}

person.details()

//1: {}

//ClO10

var temp = ()
 => 100

 console.log(temp)