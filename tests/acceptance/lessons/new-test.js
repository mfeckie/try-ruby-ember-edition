import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'try-ruby-ember-edition/tests/helpers/start-app';

var application;

module('Acceptance | Lessons', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('New lesson view', function (assert) {
    visit('/lessons/new');
    andThen(function () {
        ensureElementPresent(assert, 'input#lesson_number');
        ensureElementPresent(assert, 'input#lesson_title');
    });
});
