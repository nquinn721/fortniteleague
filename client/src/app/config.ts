import Phaser from 'phaser/dist/phaser';
import { Injectable } from '@angular/core';
import Player from '../../../game/player';


import * as io from 'socket.io-client'; 


const url = 'http://localhost:3000';  
const player = new Player;

  
const socket = io(url);
const config = {
	type: Phaser.Auto,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: {y: 200}
		}
	},
	// scene: [Scene1]
	scene: {
        preload,
        create,
        update
    }
},

game = 	new Phaser.Game(config);



function preload () {
	
    this.load.image('sky', 'assets/mario.png');

    this.load.spritesheet('mummy', 'assets/mario-ss.png', {
    	frameWidth: 16,
    	frameHeight: 29
    });
}
var keys;
function create () {
 	this.image = this.add.sprite(player.x, player.y, 'sky');
 	this.player = this.add.sprite(player.x + 50, player.y + 50, 'mummy');
 	this.player.scaleX = 3;
 	this.player.scaleY = 3;
 	console.log(this.player);
	this.anims.create({ key: 'walk', frames: [0,1,2], frameRate: 10, repeat: -1 });
 	// this.anims.create({
 	// 	key: 'down',
 	// 	frames: this.anims.generateFromNumbers('mummy', {start: 0, end: 3}),
 	// 	repeat: 1
 	// })
 	keys = this.input.keyboard.createCursorKeys();

 	// this.physics.enable(this.player, Phaser.Physics.ARCADE);
 	// this.player.setCollideWorldBounds(true);

 	// this.player.body.collideWorldBounds = true;
  //   this.player.body.setSize(20, 32, 5, 16);

    // this.player.animations.add('left', [0, 1, 2, 3], 10, true);
    // this.player.animations.add('turn', [4], 20, true);
    // this.player.animations.add('right', [5, 6, 7, 8], 10, true);


 	this.input.keyboard.on('keydown', function (event) {
 		// if(event.key === 'd')player.x += 5;
 		// if(event.key === 'w')player.y -= 5;
 		if(event.key === 's'){

 			// player.y += 5;
 		}
 		// if(event.key === 'a')player.x -= 5;
	   	// socket.emit('player move', player);
	});

 	socket.on('player move', (p) => {
 		player.x = p.x;
 		player.y = p.y;
 	})
}

function update() {
	this.image.x = player.x;
	this.image.y = player.y;	
}




export default game;