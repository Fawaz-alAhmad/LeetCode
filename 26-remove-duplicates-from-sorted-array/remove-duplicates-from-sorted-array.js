/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
    const set = new Set();
    for (let i = 0; i < nums.length;) {
        if (set.has(nums[i])) {
            nums.splice(i,1)
        }
        else {
            set.add(nums[i])
             i++
        }
    }
    return nums.length
};