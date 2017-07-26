var socket = require('socket.io-client')('http://127.0.0.1:8080');
socket.emit('load', '1234');
socket.emit('login', {user: 'dejan', avatar: 'dejanzelic@gmail.com', id: 1234});
socket.emit('msg', {msg: 'test', user: 'Dejan', img: 'test'});
socket.emit('msg', {msg: 'test1234', user: 'test', img: 'test'});