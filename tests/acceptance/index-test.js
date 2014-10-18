import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Acceptance: Index', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('Home page text', function () {
    visit('/');
    andThen(function () {
        elementHasText('h1', "Welcome Nubies!");
        var menu = $('.side-nav li').length;
        equal(menu, 2, "Expected 2 items, got: "+ menu);
    });
});