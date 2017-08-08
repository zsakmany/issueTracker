const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
let issues = [];

app.use(express.static('dist'));

io.on('connection', function (socket) {
  console.log(`Browser connected ${socket.id}`);
  socket.emit('SERVER_LOAD_ISSUES', issues);
  socket.on('CLIENT_ISSUE_CHANGE', data => {
    console.log('CLIENT_ISSUE_CHANGE');
    console.log(issues);
    issues = data;
    socket.broadcast.emit('SERVER_UPDATE_ISSUES', data);
  });
});

http.listen(3000, function () {
  console.log('listening on *:3000');
});
