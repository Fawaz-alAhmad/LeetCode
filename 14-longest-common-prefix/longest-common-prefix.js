/**
 * @param {string[]} strs
 * @return {string}
 */

const hasPref = (arr, idx) => arr.every(str => str[idx] === arr[0][idx])
const sortByLength = (arr) => arr.sort((s1, s2) => s1.length < s2.length)

const longestCommonPrefix = function (strs) {
    let prefix = '';
    let i = 0
    let sortedArr = sortByLength(strs)
    while (i<sortedArr[0].length && hasPref(strs, i)) {
        prefix += strs[0][i];
        i++
    }
    return prefix
};