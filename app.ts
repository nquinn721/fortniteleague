import * as bodyParser from "body-parser";
import * as express from "express";
import * as http from 'http';
import * as path from "path";
import * as io from 'socket.io';

/**
 * The server.
 *
 * @class Server
 */
class Server {

  public app: express.Application;
  public io: io;

  /**
   * Bootstrap the application.
   *
   * @class Server
   * @method bootstrap
   * @static
   * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
   */
  public static bootstrap(): Server {
    return new Server();
  }

  /**
   * Constructor.
   *
   * @class Server
   * @constructor
   */
  constructor() {
    //create expressjs application
    this.app = express();
    http.Server(app);
    this.io(http);
    //configure application
    this.config();
    console.log('happening');
    
  }

  config(){
  	this.io.on('connection', (socket) => {
  		console.log('connected', socket.id);
  		
  	});
  }
}
Server.bootstrap();

// const app = express(),
//       http = require('http').Server(app),
//       io = require('socket.io')(http),
//       { join } = require('path'),
//       { exec } = require('child_process'),
//       port = 3000;

// console.log('yep');

// require('./server/globals');


// http.listen(port, () => console.log('Server listening on port', port));

// app.use(express.static(join(__dirname, BASE_PATH)));
// app.use(express.static(join(__dirname, 'game')));

// app.get('*', (req, res) => res.sendFile(join(__dirname, BASE_PATH, 'index.html')));



// io.on('connection', (socket) => {
// 	console.log('connected', socket.id);
// });