//Function
//Print odd numbers in an array
var arr = [1, 2, 3, 4, 5];
var result = [];
function odd(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 != 0) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  console.log(odd(arr));
  
//   //Anonyomus
  var arr = [1,2,3,4,5];
  var result = [];
  var odd = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(odd(arr));
//

//IIFE
(function odd(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 != 0) {
        result.push(arr[i]);
      }
    }
    console.log(result);
  })([1, 2, 3, 4, 5]);
  
//Arrow
const odd = (arr) => {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 != 0) {
        result.push(arr[i]);
      }
    }
    return(result);
  }
  console.log(odd([1,2,3,4,5]));

//Sum of all numbers in an array
 
var arr = [1, 2 ,3, 4, 5];
var sum = 0;
function sum(arr){
for( var i=0;i<arr.length;i++)
{
    sum = sum + +(arr[i]); 
}
}
console.log(sum(arr));

//Return all the palindromes in an array 

var arr= ["Dhari"];
var  result = [];
function checkPalindrome(arr){
    var len = arr.length;
    for(const i=0;i<len/2;i++){
        if(arr[i]!== arr[len - 1 - i]){
            return "Palindrome";
        }
        else
            return "Not a Palindrome";
    }
}
console.log(checkPalindrome(arr));


//Anonyomus;

var arr= ["Dhari"];
var  result = [];
var checkPalindrome = function(arr){
    var len = arr.length;
    for(const i=0;i<len/2;i++){
        if(arr[i]!== arr[len - 1 - i]){
            return "Palindrome";
        }
        else
            return "Not a Palindrome";
    }
}
console.log(checkPalindrome(arr));




