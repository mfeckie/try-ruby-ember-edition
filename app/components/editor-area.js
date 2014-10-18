import Ember from 'ember';

export default Ember.Component.extend({
    getLanguage: function () {
        var language = this.get('language');
        return 'text/x-' + language;
    },
    actions: {
    },
    onInit: function () {
        var self = this;
        var lesson_area = this.$('.editor_body')[0];
        var codeArea = new CodeMirror(lesson_area, {
            lineNumbers: true,
            mode: this.getLanguage(),
            theme: 'lesser-dark',
            tabSize: 2,
            lineWrapping: true,
            value: this.get('editor_text') || ''
        });
        codeArea.on("change", function (editor) {
            Ember.run(function () {
                self.set("code", editor.getValue());
            });
        });
        this.set('codeArea', codeArea);
    }.on('didInsertElement'),
    willDestroy: function () {
        var codeArea = this.get('codeArea');
        codeArea = undefined;
    }
});
