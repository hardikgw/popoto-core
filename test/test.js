var assert = require('assert');
var popoto = require('../index.js');

suite('Default', function() {
    setup(function() {
        // ...
    });

    suite('#version()', function() {
        test('should return \"1.0.1\"', function() {
            assert.equal("1.0.1", popoto.version());
        });
    });
});