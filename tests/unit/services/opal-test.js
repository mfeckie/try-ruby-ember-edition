import { moduleFor, test } from 'ember-qunit';

moduleFor('service:opal', 'Unit | Service | opal');

test('it exists', function(assert) {
  var service = this.subject();
  var expected = ["You're a wizard, Harry!"];
  var rubyCode = 'puts "You\'re a wizard, Harry!"';
  var output = service.runWithHijackedSTDOUT(rubyCode);
  assert.deepEqual(output, expected);
});
