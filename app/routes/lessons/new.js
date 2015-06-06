import Ember from 'ember';
import SaveLessonMixin from 'try-ruby-ember-edition/mixins/save-lesson';

export default Ember.Route.extend(SaveLessonMixin,{
  model: function () {
    return this.store.createRecord('lesson');
  }
});
