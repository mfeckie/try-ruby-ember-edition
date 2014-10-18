module.exports = function (app) {
    var counter = 2;
    var express = require('express');
    var lessonsRouter = express.Router();
    lessonsRouter.get('/', function (req, res) {
        res.send({"lessons": [
            {
                id: 1,
                lesson_number: 1,
                lesson_title: 'Working with Strings',
                lesson_body: '*Strings in Ruby are*',
                lesson_code: 'puts "Hello Friend!"'

            },
            {
                id: 2,
                lesson_number: 2,
                lesson_title: 'Working with numbers',
                lesson_body: '*Numbers in Ruby are*',
                lesson_code: 'puts 1 + 1'
            }
        ]});
    });
    lessonsRouter.post('/', function (req, res) {
        var lesson = req.body.lesson;
        res.send({"lessons": {
            id: counter += 1,
            lesson_number: lesson.lesson_number,
            lesson_title: lesson.lesson_body,
            lesson_code: lesson.lesson_code
        }})
    });
    app.use('/api/lessons', lessonsRouter);
};
