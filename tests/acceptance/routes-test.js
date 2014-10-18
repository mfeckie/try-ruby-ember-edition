import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Acceptance: Routes', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('Root route', function () {
    visit('/');
    andThen(function () {
        equal(currentPath(), 'index');
    });
});

test('About page route', function () {
    visit('/about');
    andThen(function () {
        equal(currentPath(), 'about');
    });
});

test('Lessons index route', function () {
    visit('/lessons');
    andThen(function () {
        equal(currentPath(), 'lessons.index');
    });
});

test('Lessons Show route', function () {
    visit('/lessons/1');
    andThen(function () {
        equal(currentPath(), 'lessons.show');
    });
});

test('Lessons new route', function () {
    visit('/lessons/new');
    andThen(function () {
        equal(currentPath(), 'lessons.new');
    });
});

test('Lessons index route', function () {
    visit('/lessons/1/edit');
    andThen(function () {
        equal(currentPath(), 'lessons.edit');
    });
});