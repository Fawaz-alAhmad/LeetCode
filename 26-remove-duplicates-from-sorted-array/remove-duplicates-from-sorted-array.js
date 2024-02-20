/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  const uniqueNums = new Set(nums);

//   nums.splice(0, uniqueNums.size, ...Array.from(uniqueNums));
  nums.unshift(...Array.from(uniqueNums))
  return uniqueNums.size;
};