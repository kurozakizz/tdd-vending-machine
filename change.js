const coins = [10, 5, 2, 1]
function getChange (totalPayable, cashPaid) {
  let change = []
  if (totalPayable === cashPaid) return []
  let totalChange = cashPaid - totalPayable
  while (totalChange > 0) {
    for (let c of coins) {
      if (totalChange >= c) {
        change.push(c)
        totalChange -= c
        break
      }
    }
  }
  return change
}

/* The code block below ONLY Applies to Node.js - This Demonstrates
   re-useability of JS code in both Back-end and Front-end! #isomorphic */
/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = getChange  // allows CommonJS/Node.js require()
}
