import Ember from 'ember';
import startApp from '../../helpers/start-app';

var App;

module('Acceptance: LessonIndex', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('Shows multiple index items in grid', function () {
    visit('/lessons');
    andThen(function () {
        var lessons = find(".lessons").length;
        equal(lessons, 2, "Expected to find 2 lessons, got: " + lessons);
        click('.lessons:first');
        andThen(function () {
            currentRoute('lessons.show');
        });
    });
});
