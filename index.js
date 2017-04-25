/*jshint esversion: 6, asi: true */

module.exports = function (strings) {
  var values = Array.prototype.slice.call(arguments)

  return strings.reduce((result, str, i) => {
    if (i === 0) {
      result.push(str)
    } else if (values[i] !== null && values[i] !== undefined) {
      result.push(values[i])
      result.push(str)
    } else if (i === strings.length - 1) {
      // If the last value is missing, then the previous delimeter must be popped
      result.pop()
    }
    return result
  }, []).join('')
}
