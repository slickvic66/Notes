var PracticeCode = require('./practice_code');

// myUniq Test
console.log(PracticeCode.my_uniq([1,2,2,3]));

// twoSum Test
console.log(PracticeCode.twoSum([0,1,2,2,0,3]));

// myTranspose Test
var test_array = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8]
];
console.log(PracticeCode.my_transpose(test_array));

// myMultiples Test
console.log(PracticeCode.multiples([1,2,3]));

// myEach Test
var test_array = [1,2,4];
var func = function(el){ console.log(5 * el); };
console.log(PracticeCode.my_each(test_array, func));

// Inject concat Test
var test_array = ["Say","hi","to","your","mother", "for", "me"];
var concat = function(el){ return el + " "; };
console.log(PracticeCode.my_inject(test_array, concat));

// Bubble Sort Test
var unordered_array = [1,4,2,3,7,6,5];
console.log(PracticeCode.bubble_sort(unordered_array));

// Substrings Test
console.log(PracticeCode.substring("apple"));

// Sum Iterative
console.log(PracticeCode.arrSumIterate([1,2,3]));

// Sum Recursive
console.log(PracticeCode.arrSumRecurse([1,2,3,4]));

// // dups
// var my_uniq = function(sm_array){
//   var rtrn_array = [];
//   sm_array.forEach(sm_func);

//   function sm_func(element){
//     if((rtrn_array.indexOf(element)) === -1){
//       rtrn_array.push(element);
//     };
//   };

//   return rtrn_array;
// };
// console.log(my_uniq([1,2,2,3]));



// // two sum
// var twoSum = function(arr){
//   var len = arr.length;
//   for(var i=0; i <= len; i++){
//     for(var j=0; j <= len; j++){
//       if(j <= i){ continue; }
//       if((arr[i] + arr[j]) === 0){
//         return true;
//       };
//     };
//   };

//   return false;
// };
// console.log(twoSum([0,1,2,2,0,3]));


// // transpose
// var my_transpose = function(array){
//   len = array[0].length;
//   var columns = [];
//   for(var i=0; i<len; i++){
//     var sub_array = [];
//     array.forEach(function(element){sub_array.push(element[i])});
//     columns.push(sub_array);
//   };

//   return columns;
// };

// var test_array = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8]
// ];

// console.log(my_transpose(test_array));