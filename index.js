/*jshint esversion: 6, asi: true */

module.exports = function (strings) {
  return strings.reduce((result, str, i) => {
    if (i === 0) {
      result.push(str) // this is normally an empty string
    } else if (arguments[i] !== null && arguments[i] !== undefined) {
      result.push(arguments[i])
      result.push(str)
    } else if (i === strings.length - 1) {
      // If the last value is missing, then the previous delimeter must be popped
      result.pop()
    }
    return result
  }, []).join('')
}
