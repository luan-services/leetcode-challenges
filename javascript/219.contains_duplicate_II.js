/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let numsMap = {};
    let arrLen = nums.length

    for (let i = 0; i < arrLen; i ++) {
        let current = nums[i];
        if (!(current in numsMap)) {
            numsMap[current] = i
        } else {
            let diff = Math.abs(numsMap[current] - i);
            if (diff <= k) {
                return true;            
            }
            numsMap[current] = i;
        }
    }
    return false;
    
};