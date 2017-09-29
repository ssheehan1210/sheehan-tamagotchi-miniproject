console.log("Running Tamagotchi JS File");

console.log("--------------------------");

// For more info about Tamagotchi, go to this link: http://tamagotchi.wikia.com/wiki/Tamagotchi

let time = 0;

class Tamagotchi {
	constructor(aliveStatus){
		this.name = "None";
		this.hunger = 1; // 1-10 scale; 1 = least hungry, 10 = starved
		this.sleepiness = 1; // 1-10 scale; 1 = most awake, 10 = "final sleep"
		this.boredom = 1; // 1-10 scale; 1 = excited, 10 = bored to death
		this.age = 0;
		this.alive = aliveStatus;
		this.lightsOn = true;
		this.currentForm = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png";
		this.potentialForms = ["https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/90.png", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/91.png"];
	}

	feed(){
		this.hunger = 1;
	}

	playGame(){
		this.boredom = 1;
	}

	clean(){
		this.sleepiness += 1;
		this.boredom -= 1;
	}

	toggleLights(){
		this.sleepiness = 1;
	}

	namePet(name){
		this.name = name;
		console.log("Congrats! Your pet's name is now " + this.name + "!");
		$('h1').text(`${this.name}`);
	}

	increaseAge(){
		if (timer % 10 === 0){
			console.log("Happy birthday, " + this.name + "!");
			this.age += 1;
		}
		if (this.age % 2 === 0){
			this.morphPet();
		}
	}

	increaseConditionStats(){
		// code
	}

	dying(){
		const deadPet = alert("Oh no! " + newTama.name + " died!");
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

	animatePet(){
		// code
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
			newTama.hunger++;
			console.log("Adding hunger. Current hunger: " + newTama.hunger);
		}

		if (time % 20 === 0){
			newTama.boredom++;
			console.log("Adding boredom.  Current boredom: " + newTama.boredom);
		}

		if (time % 30 === 0){
			newTama.sleepiness++;
			console.log("Adding sleepiness.  Current sleepiness: " + newTama.sleepiness);
		}

		if (newTama.hunger === 10 || newTama.sleepiness === 10 || newTama.boredom === 10){
			clearInterval(timer); // ends the countdown
			newTama.dying();
		}

		if (time % 10 === 0){
			newTama.increaseAge();
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

console.log("Finished Running Tamagotchi JS File");
