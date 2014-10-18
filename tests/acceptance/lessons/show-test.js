import Ember from 'ember';
import startApp from '../../helpers/start-app';

var App;

module('Acceptance: Lessons.Show', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('Visiting an individual lesson', function () {
    visit('/lessons/1');
    andThen(function () {
        elementDoesNotHaveText('.output-panel', '>Hello Friend!');
        elementHasText('.panel', 'Lesson 1');
        elementHasText('.panel', 'Working with Strings');
        elementHasText('.panel', 'Strings in Ruby are');
        click('#run_code');
        elementHasText('.output-panel', '> Hello Friend!');
    });
});
