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

test('Visiting an individual lesson', function (assert) {
    visit('/lessons/1');
    andThen(function () {
        elementDoesNotHaveText(assert, '.output-panel', '>Hello Friend!');
        elementHasText(assert, '.panel', 'Lesson 1');
        elementHasText(assert, '.panel', 'Working with Strings');
        elementHasText(assert, '.panel', 'Strings in Ruby are');
        click('#run_code');
        elementHasText(assert, '.output-panel', '> Hello Friend!');
    });
});
