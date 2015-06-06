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

test('Navigating to about', function (assert) {
    visit('/');
    click('a:contains("About")');
    andThen(function () {
      var text = find('h1:contains("What\'s this Ruby all about?")').text();
      assert.equal(text, "What's this Ruby all about?");
    });
});
