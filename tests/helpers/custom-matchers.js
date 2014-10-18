import Ember from 'ember';

Ember.Test.registerHelper('currentRoute', function (app, route_name) {
    var current_route = currentRouteName();
    equal(current_route, route_name, "Expected route to be '" + route_name + "', got: " + current_route);
});

Ember.Test.registerHelper('respondsTo', function (app, model, attribute, type) {
    var test_subject = app[model].metaForProperty(attribute);
    equal(test_subject.type, type, 'Expected ' + type + " got: " + test_subject.type);
    ok(test_subject.isAttribute);
});

Ember.Test.registerHelper('ensureElementPresent', function (app, testElement) {
    var element = findWithAssert(testElement).length;
    ok(element, 'Expected page to have ' + testElement + ' element but was not found');
});

Ember.Test.registerHelper('elementHasText', function (app, element, text) {
    var match = new RegExp(text);
    var el = find(element).text();
    ok(match.test(el), "Expected: " + text + " via: " + element);
});

Ember.Test.registerHelper('elementDoesNotHaveText', function (app, element, text) {
    var match = new RegExp(text);
    var el = find(element).text();
    ok(!match.test(el), "Expected not to find: " + text + " via: " + element);
});