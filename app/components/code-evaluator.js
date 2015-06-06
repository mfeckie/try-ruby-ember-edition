import Ember from 'ember';

export default Ember.Component.extend({
  opal: Ember.inject.service(),
  results: [],
  actions: {
    run: function () {
      var opal = this.get('opal');
      var code = this.get('code');
      var results = opal.runWithHijackedSTDOUT(code);
      this.set('results', results);
    }
  }
});
