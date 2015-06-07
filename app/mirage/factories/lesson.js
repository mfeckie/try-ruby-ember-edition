import Mirage from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  lessonNumber: (i) => `${i+1}`,
  lessonTitle: (i) => `lessonTitle ${i+1}`,
  lessonBody: (i) => `lessonBody ${i+1} \n\n**This is bold**`,
  lessonCode: (i) => `puts "Hello World, from lesson ${i+1}"`,
});
