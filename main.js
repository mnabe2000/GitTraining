var confirmation = confirm('Do you want to play a game?')
var minNumber = 0;
var maxNumber = 10;
var attempt = 3;
var prize = 0;
var wins = 0;

	
while (confirmation) {
	 playGame();	 
}

function getRandomNumbers(min, max) {
	//return Math.floor(Math.random() * (max - min) + min) + 1;
	return 4;
};

function checkInUserNumberWithAuto(userNumber, autoGenerateNumber) {
	return userNumber == autoGenerateNumber ? true: false;
};

function playGame() {
	var userNumber = prompt(`enter number from ${minNumber} to ${maxNumber}. \n You have only ${attempt} attempt!`);
	var generatedNumber = getRandomNumbers(minNumber, maxNumber);

	if(checkInUserNumberWithAuto(userNumber, generatedNumber)) {
			wins++;

			switch (wins) {
				case 1:
					prize += 100;
					maxNumber = 20;
					alert(`your prize is ${prize}!`);
	 				confirmation = confirm('Do you want to continue the game?');
	 				break;
	 			default:
	 				prize *= 3;
					maxNumber += 10;
					alert(`your prize is ${prize}!`);
	 				confirmation = confirm('Do you want to continue the game?');			
			}
	 }
	 else {
	 	--attempt;
	 	alert(`You lost! your prize ${prize};\n Attempt: ${attempt}!`);

	 	if (!attempt) {
	 		vprize = 0;
	 		confirmation = confirm(`You lost! your prize ${prize};\n Do you want to try agine?`);
	 	}
	 }
};


// I writed indo-code

}
 boom boom
 }
	alert('I am indo-code');
 {
{