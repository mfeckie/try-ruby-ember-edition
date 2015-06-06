import DS from 'ember-data';

export default DS.Model.extend({
    lessonNumber: DS.attr('number'),
    lessonTitle: DS.attr('string'),
    lessonBody: DS.attr('string'),
    lessonCode: DS.attr('string')
});
