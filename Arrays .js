//q1   1- create a function that takes two arguments, one is an array and the other is a number,
// then return the index of the given value or return -1 if the element cannot be found.
// function find(arr, num) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === num) {
//         return i;
//       }
//     }
//     return -1;
//   }


  ////////////////////

  //q2
  //2- create a function that takes an array of integers between 1 and 100 except for one, and returns the missing number.
// function missing (arr){
// let mis=0;
// for(let i=0;i<=100;i++){
// if(i!==arr[i])
// mis=i;
// }
// return mis;
// }

//////////////////////////
//q3
//3- create a function that takes an array of integers and returns a new array with the same integers without the duplicates
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function Duplicates(arr)
{
    let temp = new Array(arr.length);
  
   let number
    let j = 0;
    for (let i=0; i<arr.length; i++){
        for(let j=0;j<arr.length;j++){
        if (arr[i] != arr[j])
            number=arr[i];
        }
        temp[i] = number;    
    }
  
    return temp;
}
  //q4
  //4- create a function that takes an array of integers and returns the average of all the numbers in it 

  function calculateAverage(arr) {
    if (arr.length === 0) {
      return 0;
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    const average = sum / arr.length;
    return average;
  }