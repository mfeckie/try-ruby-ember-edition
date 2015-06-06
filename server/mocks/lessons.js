var lessons = [
    {
        id: 1,
        lessonNumber: 1,
        lessonTitle: 'Working with Strings',
        lessonBody: '*Strings in Ruby are*',
        lessonCode: 'puts "Hello Friend!"'

    },
    {
        id: 2,
        lessonNumber: 2,
        lessonTitle: 'Working with numbers',
        lessonBody: '*Numbers in Ruby are*',
        lessonCode: 'puts 1 + 1'
    }
]

var counter = 2;

function genericLesson () {
  counter += 1;
  return {
    id: counter,
    lessonNumber: counter,
    lessonTitle: `Generic Lesson ${counter}`,
    lessonBody: `Generic Body Content ${counter}`,
    lessonCode: `class Number${counter}\nend`
  };
}

module.exports = function (app) {
    var express = require('express');
    var lessonsRouter = express.Router();
    lessonsRouter.get('/', function (req, res) {
        res.send({"lessons": lessons});
    });
    lessonsRouter.get('/:id', function (req, res) {
      var lesson = lessons[req.params.id - 1] || genericLesson();
      res.send({lessons: lesson})
    });
    lessonsRouter.post('/', function (req, res) {
        var lesson = req.body.lesson;
        res.send({"lessons": {
            id: counter += 1,
            lessonNumber: lesson.lessonNumber,
            lessonTitle: lesson.lessonTitle,
            lessonBody: lesson.lessonBody,
            lessonCode: lesson.lessonCode
        }})
    });
    lessonsRouter.put('/:id', function (req, res) {
        var lesson = req.body.lesson;
        res.send({lesson: {
          id: req.params.id,
          lessonNumber: lesson.lessonNumber,
          lessonTitle: lesson.lessonTitle,
          lessonBody: lesson.lessonBody,
          lessonCode: lesson.lessonCode
        }});
    });
    app.use('/api/lessons', lessonsRouter);
};
