const express = require('express'),
      app = express(),
      http = require('http').Server(app),
      io = require('socket.io')(http),
      { join } = require('path'),
      { exec } = require('child_process'),
      port = 3000;


require('./server/globals');


http.listen(port, () => console.log('Server listening on port', port));

app.use(express.static(join(__dirname, BASE_PATH)));

app.get('*', (req, res) => res.sendFile(join(__dirname, BASE_PATH, 'index.html')));



io.on('connection', (socket) => {
	console.log('connected', socket.id);
	require('./server/game')(io, socket);
});