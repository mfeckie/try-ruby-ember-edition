import DS from 'ember-data';

export default DS.Model.extend({
    lesson_number: DS.attr('number'),
    lesson_title: DS.attr('string'),
    lesson_body: DS.attr('string'),
    lesson_code: DS.attr('string')
});
