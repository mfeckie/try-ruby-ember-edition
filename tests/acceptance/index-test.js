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

test('Home page text', function (assert) {
    visit('/');
    andThen(function () {
        var menu = $('.side-nav li').length;
        assert.equal(menu, 2, "Expected 2 items, got: "+ menu);
    });
});
