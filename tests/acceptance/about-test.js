import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Acceptance: About', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('Navigating to about', function () {
    visit('/');
    click('a:contains("About")');
    andThen(function () {
        elementHasText('h1', "What's this Ruby all about?");
    });
});