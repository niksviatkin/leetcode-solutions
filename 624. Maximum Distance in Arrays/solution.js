/**
 * @param {number[][]} arrays
 * @return {number}
 * Time Complexity: O((n*x)^2), n is the number of arrays, x is the average length of arrays
 * Space Complexity: O(1)
 */
var maxDistanceBruteForce = function(arrays) {
    let result = 0;
    let arraysLength = arrays.length;
    for (let i = 0; i < arraysLength - 1; i++) {
        for (let j = 0; j < arrays[i].length; j++) {
            for (let k = i + 1; k < arraysLength; k++) {
                for (let l = 0; l < arrays[k].length; l++) {
                    result = Math.max(result, Math.abs(arrays[i][j] - arrays[k][l]));
                }
            }
        }
    }
    return result;
};

console.log(maxDistanceBruteForce.name + ":");
console.log(maxDistanceBruteForce([[1,2,3],[4,5],[1,2,3]])); // 4
console.log(maxDistanceBruteForce([[1], [1]])); // 0


/**
 * @param {number[][]} arrays
 * @return {number}
 * Time Complexity: O((n)^2), n is the number of arrays
 * Space Complexity: O(1)
 */
var maxDistanceBetterBruteForce = function(arrays) {
  let result = 0;
  let arraysLength = arrays.length;
  let arr1, arr2 = [];
  for (let i = 0; i < arraysLength - 1; i++) {
    for (let j = i + 1; j < arraysLength; j++) {
      arr1 = arrays[i];
      arr2 = arrays[j];
      result = Math.max(result, Math.abs(arr1[0] - arr2[arr2.length - 1]));
      result = Math.max(result, Math.abs(arr2[0] - arr1[arr1.length - 1]));
    }
  }
     return result;
};

console.log(maxDistanceBetterBruteForce.name + ":"); 
console.log(maxDistanceBetterBruteForce([[1,2,3],[4,5],[1,2,3]])); // 4
console.log(maxDistanceBetterBruteForce([[1], [1]])); // 0


/**
 * @param {number[][]} arrays
 * @return {number}
 * Time Complexity: O(n), n is the number of arrays
 * Space Complexity: O(1)
 */
var maxDistanceSingleScan = function(arrays) {
  let result = 0;
  let n = arrays[0].length;
  let minVal = arrays[0][0];
  let maxVal = arrays[0][n - 1];
  for (let i = 1; i < arrays.length; i++) {
    n = arrays[i].length;
    result = Math.max(result, Math.max(Math.abs(arrays[i][n - 1] - minVal), Math.abs(maxVal - arrays[i][0])));
    minVal = Math.min(minVal, arrays[i][0]);
    maxVal = Math.max(maxVal, arrays[i][n - 1]);
  }
  return result;
};

console.log(maxDistanceSingleScan.name + ":"); 
console.log(maxDistanceSingleScan([[1,2,3],[4,5],[1,2,3]])); // 4
console.log(maxDistanceSingleScan([[1], [1]])); // 0