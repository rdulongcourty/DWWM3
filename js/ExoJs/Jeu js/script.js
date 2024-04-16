// Class des personnages

class Guerrier {
    constructor() {
        this.name = "Guerrier"
        this.hp = 10;
        this.defense = 5;
        this.powers = [
            { name: "Frappe puissante", action: () => this.attack * 2 };
            { name: "Défense renforcée", action: () => this.defense * 2 };
        ];
    }
}

class Mage {
    constructor() {
        this.name = "Mage"
        this.hp = 10;
        this.defense = 5;
        this.powers = [
            { name: "Boule de feu", action: () => this.attack * 3 };
            { name: "Bouclier magique", action: () => this.defense * 3 };
        ];
    }
}

class Pretre {
    constructor() {
        this.name = "Prêtre"
        this.hp = 10;
        this.defense = 5;
        this.powers = [
            { name: "Soins", action: () => this.heal() };
            { name: "Protection divine", action: () => this.defense * 2 };
        ];
    }
}

class Archer {
    constructor() {
        this.name = "Archer"
    }
}