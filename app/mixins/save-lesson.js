import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
      saveLesson: function () {
          var m = this.get('currentModel');

          var onSuccess = () => {
              this.transitionTo('lessons.show', m.id);
          };

          var onFailure = function (err) {
              console.log('error: ', err); // TODO -> implement proper failure behaviour
          };

          m.save().then(onSuccess, onFailure);
      }
  }
});
