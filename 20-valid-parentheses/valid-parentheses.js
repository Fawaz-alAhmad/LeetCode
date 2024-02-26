/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
    const stack = []
    const bracketMap = {
        '(': ')',
        '[': ']',
        '{': '}',
    }
    for (let bracket of s) {
        if (Object.keys(bracketMap).includes(bracket)) {
            stack.push(bracket)
        }
        else if (stack.length === 0 || bracket != bracketMap[stack.pop()]) {
            return false
        }

    }
    return stack.length === 0
};