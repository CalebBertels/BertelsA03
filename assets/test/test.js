// Test for GPA Calculator

QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 == "1", "1=1 success!");
});

QUnit.test("Testing calcGPA 4 times", function (assert) {
    var result = App.calcGpa(20, 10);
    assert.equal(result, 2, "result was " + result);

    var result = App.calcGpa(-10, 10);
    assert.equal(result, -1, "result was " + result);

    var result = App.calcGpa("asdf", 10);
    assert.equal(result, undefined);

    var result = App.calcGpa(10);
    assert.equal(result, undefined);
});
