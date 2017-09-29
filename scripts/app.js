console.log("Running Project JS File");

console.log("--------------------------");

// For more info about Tamagotchi, go to this link: http://tamagotchi.wikia.com/wiki/Tamagotchi

let time = 0;

$('button#feeding-button').on('click', () => {
	newTama.feed();
});

$('button#play-button').on('click', () => {
	newTama.playGame();
	newTama.animatePetPlay();
});

$('button#lights-button').on('click', () => {
	newTama.toggleLights();
});

$('button#exercise-button').on('click', () => {
	newTama.exercise();
	newTama.animatePetExercise();
});

class Tamagotchi {
	constructor(aliveStatus){
		this.name = "None";
		this.hunger = 1; // 1-10 scale; 1 = least hungry, 10 = starved
		this.sleepiness = 1; // 1-10 scale; 1 = most awake, 10 = "final sleep"
		this.boredom = 1; // 1-10 scale; 1 = excited, 10 = bored to death
		this.age = 1;
		this.alive = aliveStatus;
		this.lightsOn = true;
		this.currentForm = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png";
		this.potentialForms = ["https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/90.png", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/91.png"];
	}

	feed(){
		console.log(this.name + " ate some malasadas and is no longer hungry!");
		this.hunger = 1;
	}

	playGame(){
		console.log(this.name + " looks very happy!");
		this.boredom = 1;
	}

	exercise(){
		console.log("EVERY DAY IS LEG DAY FOR " + this.name + "!");
		this.hunger += 1;
		this.sleepiness += 1;
		this.boredom -= 5;
	}

	toggleLights(){
		console.log(this.name + " slept really well!");
		this.sleepiness = 1;
	}

	namePet(name){
		this.name = name;
		console.log("Congrats! Your pet's name is now " + this.name + "!");
		$('h1').text(`${this.name}`);
	}

	dying(){
		const deadPet = alert("Oh no! " + newTama.name + " died!");
		this.alive = false;
	}

	morphPet(){
		if (this.currentForm === this.potentialForms[0]){
			this.currentForm = this.potentialForms[1];
		} else if (this.currentForm === this.potentialForms[1]){
			this.currentForm = this.potentialForms[2];
		} else if (this.currentForm === this.potentialForms[2]){
			this.currentForm = this.potentialForms[3];
		} else if (this.currentForm === this.potentialForms[3]){
			console.log("Highest form already achieved");
		}
		$('#shellder-box img').remove();
		$('#shellder-box').append('<img src=' + this.currentForm + '>');
	}

	animatePetPlay(){
		const loopDown = () => {
			$('#shellder-box img').animate({
				marginTop : 50
			},
			100, function() {
				loopUp();
			});
		};
		const loopUp = () => {
			$('#shellder-box img').animate({
				marginTop : 0
			},
			100);
		};
		loopDown();
	}

	animatePetExercise(){
		const loopDown = () => {
			$('#shellder-box img').animate({
				marginTop : 50
			},
			100, () => {
				loopUp();
			});
		};
		const loopUp = () => {
			$('#shellder-box img').animate({
				marginTop : -50
			},
			100, () => {
				loopDownTwo();
			});
		};
		const loopDownTwo = () => {
			$('#shellder-box img').animate({
				marginTop : 50
			},
			100, () => {
				loopUpTwo();
			});
		};
		const loopUpTwo = () => {
			$('#shellder-box img').animate({
				marginTop : -100
			},
			100, () => {
				loopDownThree();
			});
		};
		const loopDownThree = () => {
			$('#shellder-box img').animate({
				marginTop : 50
			},
			100, () => {
				loopUpThree();
			});
		};
		const loopUpThree = () => {
			$('#shellder-box img').animate({
				marginTop : -150
			},
			100, () => {
				loopDownFour();
			});
		};
		const loopDownFour = () => {
			$('#shellder-box img').animate({
				marginTop : 0
			},
			100);
		};
		loopDown();
	}
}

const giveName = (pet) => {
	console.log("What name would you like to give to your pet?");
	let newName = prompt("What name would you like to give your pet?");
	pet.namePet(newName);
	$('#shellder-box').append('<img src=' + pet.currentForm + '>');
};

const setTimer = () => {
	timer = setInterval(() => {

		time++;

		if (time % 10 === 0){
			newTama.age++;
			console.log("Happy birthday, " + newTama.name + "! You are now " + newTama.age + "!");
		}

		if (time % 15 === 0){
			newTama.hunger++;
			console.log("Adding hunger. Current hunger: " + newTama.hunger);
		}

		if (time % 20 === 0){
			newTama.boredom++;
			console.log("Adding boredom.  Current boredom: " + newTama.boredom);
		}

		if (time % 25 === 0){
			newTama.sleepiness++;
			console.log("Adding sleepiness.  Current sleepiness: " + newTama.sleepiness);
		}

		if (time === 30 || time === 60 || time === 90){
			newTama.morphPet();
		}

		if (newTama.hunger === 10 || newTama.sleepiness === 10 || newTama.boredom === 10){
			clearInterval(timer); // ends the countdown
			newTama.dying();
		}

		$('#hunger-display p').text(`${newTama.hunger}`);
		$('#boredom-display p').text(`${newTama.boredom}`);
		$('#sleepiness-display p').text(`${newTama.sleepiness}`);
		$('#age-display p').text(`${newTama.age}`);

	}, 1000) // each interval happens after every second
};

// Driver Code:
const newTama = new Tamagotchi(true);

console.log("--------------------------");

console.log("Done Running JS File");
console.log("To start, run giveName(newTama) and give your pet a name.");
console.log("After that, run setTimer() to activate your pet.");


