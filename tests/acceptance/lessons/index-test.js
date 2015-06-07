import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'try-ruby-ember-edition/tests/helpers/start-app';

var application;

module('Acceptance | About', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('Shows multiple index items in grid', function (assert) {
    server.createList('lesson',2);
    visit('/lessons');
    andThen(function () {
        var lessons = find(".lessons").length;
        assert.equal(lessons, 2, "Expected to find 2 lessons, got: " + lessons);
        click('.lessons:first');
        andThen(function () {
            currentRouteName('lessons.show');
        });
    });
});
