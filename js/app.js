

const express = require('express');
const app = express();




app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})


app.use('/static', express.static(__dirname + '/public'));



app.get('/liste', function (req, res) {
  res.sendFile(__dirname + 'js/data.json')

})



app.listen(3001, function () {
  console.log('Listening on port 3001')
})