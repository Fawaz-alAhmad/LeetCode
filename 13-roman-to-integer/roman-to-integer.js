/**
 * @param {string} s
 * @return {number}
 */
const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}
const romanToInt = function (s) {
    let total = 0
    for (let i = 0; i < s.length;) {
        if (symbols[s[i]] < symbols[s[i + 1]]) {
            total += symbols[s[i + 1]] - symbols[s[i]]
            i = i + 2
        }
        else {
            total += symbols[s[i]];
            i++
        }
    }
    return total
};