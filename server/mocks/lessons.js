module.exports = function (app) {
    var express = require('express');
    var lessonsRouter = express.Router();
    lessonsRouter.get('/', function (req, res) {
        res.send({"lessons": [
            {
                id: 1,
                lesson_number: 1,
                lesson_body: "Just some test stuff",
                lesson_code: "class Stuff\n  def blah\n    'Hello'\n  end\nend"
            }
        ]});
    });
    app.use('/api/lessons', lessonsRouter);
};
