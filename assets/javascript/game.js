let user;

    function user(fish, health, attack, counterAttack) {
        this.fish = fish;
        this.health = health;
        this.attack = attack;
        this.counterAttack = counterAttack;

    }

let gameOverlord = {
    gameBegin: function(fish) {
        switch (fish) {
            case "Viperfish":
            User = new user(fish, 100, 20, 5);
            break;
            case "Anglerfish":
            User = new user(fish, 150, 10, 15);
            break;
        }

    },
    fightPrep: function() {

    }


}