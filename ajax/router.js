//router.js
app.get('/loadMore', function (req, res) {

  var curIdx = req.query.index;
  var len = req.query.length;
  var data = [];

  for (var i = 0; i < len; i++) {
    data.push('message' + (parseInt(curIdx) + i));
  }

  setTimeout(function () {
    res.send(data);
  }, 5000);
});