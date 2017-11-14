var assert = require('assert');
var popoto = require('../index.js');

suite('Default', function() {
    setup(function() {
        // ...
    });

    suite('#version()', function() {
        test('should return \"1.0.0\"', function() {
            assert.equal("1.0.0", popoto.version());
        });
    });
});