
//Add elements of the array
const numbersArray = [2,4,6,8,10];

// the expected result is 30



/*var reducer = function(accumulator,currentValue){
    return accumulator * currentValue
}*/

var multiplyNumbers = function(a){
    return a.reduce((accumulator,currentValue) => accumulator * currentValue);
}

var addNumber = function(a){
    let sum = 0 //accumulator
    // for (let i = 0; i < a.length; i++) {
        // sum = sum + a[i]; // accumulates
        // sum = reducer(sum, a[i])

        // numbersArray.forEach(element => {
        //     sum = reducer(sum, element); 
        // });
        // return sum //result
        return a.reduce(reducer);
    }


   

var expectedResult = 3840;
var result = addNumber(numbersArray)

if (expectedResult == result){
    console.log("The test passed");

} else {
    console.log ( "The test failed");
}
console.log( `The result is ${result}`)





/*var sum = numbersArray.reduce(function(a,b){
    return a + b;
})
console.log(sum)
*/

var mapper = function (currentValue){
    return 10 * currentValue;
}

var mappedArray = function(array){
    return array.map(mapper);
}

function arrayEquals(a,b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}