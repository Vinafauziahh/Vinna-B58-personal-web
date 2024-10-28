class animal {
    brain = true
    legs = 0

    constructor(brain, legs) {
        this.brain = brain
        this.legs = legs

        this.initAnimal()
    }

    initAnimal() {
        console.log("Initializing animal...")
        // proses apa
        console.log("Inialiting succesful!")
    }
}

class Human extends animal {
    hands = 0

    constructor(brain, legs, hands) {
        super(brain, legs)
        this.hands = hands
    }

    description() {
        console.log(this.brain, this.legs, this.hands)
    }
}

class Pet extends animal {
    legs = 4
    fleas = 0
}

class Dog extends Pet {
    fleas = 8
}

class Cat extends Pet {
    fleas = 4
}

const anto = new Human(true, 4, 2)
anto.description()
