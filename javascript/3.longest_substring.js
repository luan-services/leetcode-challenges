/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let charMap = {};
    let strLength = s.length;
    let start = 0;
    let end = 0;
    let longestString = 0;

    for (let i = 0; i < strLength; i++) {
        let char = s[i];
        if (char in charMap && charMap[char] >= start) {
            start = charMap[char] + 1;
        }

        charMap[char] = i;
        end = i;
        if (end - start + 1 > longestString) {
            longestString = end - start + 1;
        }
    }

    return longestString;
};