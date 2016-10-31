var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/api/v1', function(req, res) {
  res.json({api_version: '1',
                    url: 'www.google.com'
          });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


