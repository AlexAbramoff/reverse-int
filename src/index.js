module.exports = function reverse(n) {
  if (n < 0) {
    n = -n
  }
  let str = String(n)

  return +Array.from(str).reverse().join('')
}
