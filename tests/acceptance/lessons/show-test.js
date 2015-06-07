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
    server.create('lesson', {
      lessonNumber: 1,
      lessonTitle: 'Strings in Ruby',
      lessonBody: 'This is the lesson body',
      lessonCode: 'puts "Hello World from a test!"'
    });
    visit('/lessons/1');
    andThen(function () {
        elementDoesNotHaveText(assert, '.output-panel', '> Hello Friend!');
        elementHasText(assert, '.panel', 'Strings in Ruby');
        elementHasText(assert, '.panel', 'This is the lesson body');
        click('#run_code');
        andThen(function () {
          elementHasText(assert, '.output-panel', 'Hello World from a test!');
        });
    });
});
