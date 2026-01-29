/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const indexArr = {};
    const arrLength = nums.length;
    for (let i = 0; i < arrLength; i++) {
        let complement = target - nums[i];
        if (complement in indexArr) {
            return [indexArr[complement], i]
        }
        indexArr[nums[i]] = i;
    }

};