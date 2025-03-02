/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * Time Complexity: O(nlogn), n is the length of the strings s and t
 * Space Complexity: O(1)
 */
var isAnagramSorting = function(s, t) {
    if (s.length !== t.length) {
        return false;
    };
    const str1 = s.split('').sort().join('');
    const str2 = t.split('').sort().join('');

    return str1 === str2;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagramFreqCounter = function(s, t) {
    if (s.length !== t.length) {
        return false;
    };
    
    const freqCounter = {};
    for (let char of s) {
        freqCounter[char] = (freqCounter[char] || 0) + 1;
    }
    for (let char of t) {
        if (!freqCounter[char]) {
            return false;
        }
        freqCounter[char]--;
    }
    return true;
};