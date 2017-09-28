console.log("Running Tamagotchi JS File");

console.log("--------------------------");

// For more info about Tamagotchi, go to this link: http://tamagotchi.wikia.com/wiki/Tamagotchi

class Tamagotchi {
	constructor(aliveStatus){
		this.name = "None";
		this.hunger = 1; // 1-10 scale; 1 = least hungry, 10 = starved
		this.sleepiness = 1; // 1-10 scale; 1 = most awake, 10 = "final sleep"
		this.boredom = 1; // 1-10 scale; 1 = excited, 10 = bored to death
		this.age = 0;
		this.alive = aliveStatus;
		this.lightsOn = true;
		this.currentForm = "Stage 1";
		this.potentialForms = ["Stage 1", "Stage 2", "Stage 3", "Stage 4", "Stage 5"];
	}

	feed(){
		// code
	}

	playGame(){
		// code
	}

	clean(){
		// code
	}

	toggleLights(){
		// code
	}

	showHunger(){
		// code
	}

	showSleepiness(){
		// code
	}

	showBoredom(){
		// code
	}

	showAge(){
		// code
	}

	namePet(name){
		this.name = name;
		console.log("Congrats! Your pet's name is now " + this.name + "!");
	}

	increaseAge(){
		// code
	}

	increaseConditionStats(){
		// code
	}

	dying(){
		// code
	}

	morphPet(){
		// code
	}

	animatePet(){
		// code
	}
}

const giveName = (pet) => {
	console.log("What name would you like to give to your pet?");
	let newName = prompt("What name would you like to give your pet?");
	pet.namePet(newName);
};

// Driver Code:
const newTama = new Tamagotchi(true);

console.log("--------------------------");

console.log("Finished Running Tamagotchi JS File");
