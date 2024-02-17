/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];
        const remaining = target - value;
        if(map.has(remaining)){
            return [map.get(remaining), i];
        }
        map.set(value, i)
    }
    return [];
};
