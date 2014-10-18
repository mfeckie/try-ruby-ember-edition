import Ember from 'ember';
import startApp from '../../helpers/start-app';

var App;

module('Acceptance: LessonsNew', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('New lesson view', function () {
    visit('/lessons/new');
    andThen(function () {
        ensureElementPresent('input#lesson_number');
        ensureElementPresent('input#lesson_title');
    });
});