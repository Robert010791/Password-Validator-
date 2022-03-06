const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Welcome to the password validator! Please enter your password:", function(input){
	tokens = input.split(' ');
	console.log(`${input} ${input.length}`);
	if (input.length >= 10) {
		console.log('Password is acceptable, good jorb!')
	} else {
		console.log('Password so way too short, try agian :(')
	}
	



	


	// This line closes the connection to the command line interface.
	reader.close()


})


// tokens = input.split(' ');