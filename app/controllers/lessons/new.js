import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        saveLesson: function () {
            var self = this;
            var newLesson = {
                lesson_number: this.get('lesson_number'),
                lesson_title: this.get('lesson_title'),
                lesson_body: this.get('markdown_code'),
                lesson_code: this.get('ruby_code')
            };
            var new_record = this.store.createRecord('lesson', newLesson);
            new_record.save().then(function () {
                    self.transitionToRoute('lessons.show', new_record);
                },
                function () {
                    console.log('error');
                    //TODO Proper error handling
                }
            );

        }
    }
});
