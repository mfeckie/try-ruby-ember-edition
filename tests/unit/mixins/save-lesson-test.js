import Ember from 'ember';
import SaveLessonMixin from '../../../mixins/save-lesson';
import { module, test } from 'qunit';

module('Unit | Mixin | save lesson');

// Replace this with your real tests.
test('it works', function(assert) {
  var SaveLessonObject = Ember.Object.extend(SaveLessonMixin);
  var subject = SaveLessonObject.create();
  assert.ok(subject);
});
