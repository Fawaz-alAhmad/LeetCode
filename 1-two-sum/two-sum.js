/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    for(let i=0; i<nums.length;i++){
        const diff = target - nums[i];
        const b = nums.slice(i+1).find(num=>diff === num);
        if(typeof b === 'number'){
        return [i,nums.slice(i+1).indexOf(b)+i+1];
        } continue
    }
};