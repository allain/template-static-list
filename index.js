/*jshint esversion: 6, asi: true */

module.exports = function (strings) {
  var values = Array.prototype.slice.call(arguments, 1)

  return strings.reduce((result, str, i) => {
    if (i === 0 || (values[i - 1] !== null && values[i - 1] !== undefined)) {
      if (i > 0) result.push(values[i - 1])
      result.push(str)
    }
    return result
  }, []).join('')
}
