import Ember from 'ember';

Ember.Test.registerHelper('ensureElementPresent', function (app, assert, testElement) {
    var element = findWithAssert(testElement).length;
    assert.ok(element, 'Expected page to have ' + testElement + ' element but was not found');
});

Ember.Test.registerHelper('elementHasText', function (app, assert, element, text) {
    var match = new RegExp(text);
    var el = find(element).text();
    assert.ok(match.test(el), "Expected: " + text + " via: " + element);
});

Ember.Test.registerHelper('elementDoesNotHaveText', function (app, assert, element, text) {
    var match = new RegExp(text);
    var el = find(element).text();
    assert.ok(!match.test(el), "Expected not to find: " + text + " via: " + element);
});
