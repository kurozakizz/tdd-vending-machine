/* The code block below ONLY Applies to Node.js - This Demonstrates
   re-useability of JS code in both Back-end and Front-end! #isomorphic */
/* istanbul ignore if */
if (typeof module !== 'undefined' && module.exports) {
  var QUnit = require('qunitjs') // require QUnit node.js module
  // alias the QUnit.test method so we don't have to change all our tests
  var test = QUnit.test // stores a copy of QUnit.test
  require('qunit-tap')(QUnit, console.log) // use console.log for test output
  var getChange = require('./change.js') // load our getChange method
}

// case #1
test('ราคา 1 บาท จ่ายเงิน 1 บาท เงินทอนต้องได้ []', function(assert) {
  const result = getChange(1, 1)
  const expected = []
  assert.deepEqual(result, expected)
})

// case #2
test('ราคา 3 บาท จ่ายเงิน 4 บาท ต้องได้เงินทอน [1]', function(assert) {
  const result = getChange(3, 4)
  const expected = [1]
  assert.deepEqual(result, expected)
})

// case #3
test('ราคา 3 บาท จ่ายเงิน 5 บาท ต้องได้เงินทอน [2]', function(assert) {
  const result = getChange(3, 5)
  const expected = [2]
  assert.deepEqual(result, expected)
})

// case #4
test('ราคา 3 บาท จ่ายเงิน 6 บาท ต้องได้เงินทอน [2,1]', function(assert) {
  const result = getChange(3, 6)
  const expected = [2, 1]
  assert.deepEqual(result, expected)
})

// case #5
test('ราคา 2 บาท จ่ายเงิน 20 บาท ต้องได้เงินทอน [10, 5, 2 ,1]', function(assert) {
  const result = getChange(2, 20)
  const expected = [10, 5, 2 ,1]
  assert.deepEqual(result, expected)
})

/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) { QUnit.load() } // run the tests
