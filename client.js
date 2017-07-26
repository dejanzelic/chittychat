async = require('async');

var socket1 = require('socket.io-client')('http://127.0.0.1:8080', { forceNew: true });
var socket2 = require('socket.io-client')('http://127.0.0.1:8080', { forceNew: true });

socket1.emit('load', 85748);
socket2.emit('load', 85748);

socket2.emit('login', {user: 'Taylor Swift', avatar: 'taylorswift7364@gmx.com', id: 85748});
socket1.emit('login', {user: 'Katy Perry', avatar: 'katyperry6238@gmx.com', id: 85748});


socket1.emit('msg', 
	{msg: 'Hey TayTay, can we just squash this beef?!?', 
	user: 'Katy Perry', 
	img: 'http://www.gravatar.com/avatar/8127c81e47d0c8383164b7297fd25174?s=140&r=x&d=mm'});

socket1.emit('msg', 
	{msg: 'I know you stole my dance but Im over it!', 
	user: 'Katy Perry', 
	img: 'http://www.gravatar.com/avatar/8127c81e47d0c8383164b7297fd25174?s=140&r=x&d=mm'});

socket2.emit('msg', 
	{msg: 'Uhhh no? You called me mean names', 
	user: 'Taylor Swift', 
	img: 'http://www.gravatar.com/avatar/67ae964ebbf3a62ef1f9735b20250128?s=140&r=x&d=mm'});

socket2.emit('msg', 
	{msg: 'WTF KATY! Flag:ABCDEFGHIJKLMNOPQRSTUVWXYZ', 
	user: 'Taylor Swift', 
	img: 'http://www.gravatar.com/avatar/67ae964ebbf3a62ef1f9735b20250128?s=140&r=x&d=mm'});



