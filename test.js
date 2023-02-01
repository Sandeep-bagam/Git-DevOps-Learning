var assert = require('assert')

function test() {
  assert.equal(2 + 2, 4);
}
echo "test"
echo "test1"
if (module == require.main) require('test').run(test);
