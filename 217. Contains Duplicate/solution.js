/**
 * @param {number[]} nums
 * @return {boolean}
 * Time Complexity: O(n^2), n is the length of nums
 * Space Complexity: O(1)
 */
var containsDuplicateLinearSearch = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  };
  return false;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 * Time Complexity: O(nlogn), n is the length of nums. The sort method has a time complexity of O(nlogn)
 * Space Complexity: O(1)
 */
var containsDuplicateSorting = function(nums) {
  nums.sort();
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 * Time Complexity: O(n), n is the length of nums
 * Space Complexity: O(n)
 */
var containsDuplicateHashTable = function(nums) {
  let hashTable = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (hashTable.has(nums[i])) {
      return true;
    }
    hashTable.set(nums[i], 1);
  }
  return false;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 * Time Complexity: O(n), n is the length of nums
 * Space Complexity: O(n)
 */
var containsDuplicateHashSetLength = function(nums) {
  const set = new Set(nums);
  return set.size !== nums.length;
};