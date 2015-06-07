import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'try-ruby-ember-edition/tests/helpers/start-app';

var application;

module('Acceptance | About', {
  beforeEach: function() {
    application = startApp();
    server.create('lesson');
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('Root route', function (assert) {
    visit('/');
    andThen(function () {
        assert.equal(currentPath(), 'index');
    });
});

test('About page route', function (assert) {
    visit('/about');
    andThen(function () {
        assert.equal(currentPath(), 'about');
    });
});

test('Lessons index route', function (assert) {
    visit('/lessons');
    andThen(function () {
        assert.equal(currentPath(), 'lessons.index');
    });
});

test('Lessons Show route', function (assert) {
    visit('/lessons/1');
    andThen(function () {
        assert.equal(currentPath(), 'lessons.show');
    });
});

test('Lessons new route', function (assert) {
    visit('/lessons/new');
    andThen(function () {
        assert.equal(currentPath(), 'lessons.new');
    });
});

test('Lessons index route', function (assert) {
    visit('/lessons/1/edit');
    andThen(function () {
        assert.equal(currentPath(), 'lessons.edit');
    });
});
