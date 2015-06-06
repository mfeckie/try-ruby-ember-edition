import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('lesson', 'Lesson');

test('it exists', function(assert) {
  var model = this.subject();
  assert.ok(!!model);
});
