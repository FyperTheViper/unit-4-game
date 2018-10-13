$(document).ready(function() {

    let fish = [
        viper = {
            name: "Viperfish",
            health: 100,
            attack: 20,
            counterAttack: 5,
            avatar: "assets/images/viperfish.png",
            isPlayer: false,
            isEnemy: false,
        },
        angler = {
            name: "Anglerfish",
            health: 150,
            attack: 5,
            counterAttack: 15,
            avatar: "assets/images/anglerfish.png",
            isPlayer: false,
            isEnemy: false,
        },
        gulper = {
            name: "Gulper Eel",
            health: 140,
            attack: 10,
            counterAttack: 15,
            avatar: "assets/images/gulpereel.png",
            isPlayer: false,
            isEnemy: false,
        }]
    

    let player;
    let playerSelected = false;
    let enemy;
    let enemySelected = false;
    let enemiesLeft = fish.length - 1;
    let theGamesBegin = false;
    let fightTheme = new Audio ("assets/sound/fightmusic.mp3")

    playerSelect();
    enemySelect();
    goTime();

	function playerSelect(){
		$("#viper").on("click", function() {
			if (playerSelected === false){
                player = viper;
                $("#viper").appendTo("#playerCorner");
                $("#playerName").text(viper.name);
                $("#playerHealth").text("Health");
                $("#playerRemainingHealth").text(viper.health);
                $("#viperBio").hide();
                $("#instructions").text("Choose a Delicious Enemy!")
                playerSelected = true;
                viper.isPlayer = true;
            }
        });

        $("#angler").on("click", function() {
			if (playerSelected === false){
                player = angler;
                $("#angler").appendTo("#playerCorner");
                $("#playerName").text(angler.name);
                $("#playerHealth").text("Health");
                $("#playerRemainingHealth").text(angler.health);
                $("#anglerBio").hide();
                $("#instructions").text("Choose a Delicious Enemy!")
                playerSelected = true;
                angler.isPlayer = true;
            }
        });

        $("#gulper").on("click", function() {
			if (playerSelected === false){
                player = gulper;
                $("#gulper").appendTo("#playerCorner");
                $("#playerName").text(gulper.name);
                $("#playerHealth").text("Health");
                $("#playerRemainingHealth").text(gulper.health);
                $("#gulperBio").hide();
                $("#instructions").text("Choose a Delicious Enemy!")
                playerSelected = true;
                gulper.isPlayer = true;
            }
        });
    }

    function enemySelect() {

        $("#viper").on("click", function() {
            if (enemySelected === false && viper.isPlayer === false) {
                enemy = viper;
                $("#viper").appendTo("#enemyCorner");
                $("#enemyName").text(viper.name);
                $("#enemyHealth").text("Health");
                $("#enemyRemainingHealth").text(viper.health);
                $("#viperBio").hide();
                enemySelected = true;
                viper.isEnemy = true;
                theGamesBegin = true;
                fishReady();
            } 
        });

        $("#angler").on("click", function() {
            if (enemySelected === false && angler.isPlayer === false) {
                enemy = angler;
                $("#angler").appendTo("#enemyCorner");
                $("#enemyName").text(angler.name);
                $("#enemyHealth").text("Health");
                $("#enemyRemainingHealth").text(angler.health);
                $("#anglerBio").hide();
                enemySelected = true;
                angler.isEnemy = true;
                theGamesBegin = true;
                fishReady();
            } 
        });

        $("#gulper").on("click", function() {
            if (enemySelected === false && gulper.isPlayer === false) {
                enemy = gulper;
                $("#gulper").appendTo("#enemyCorner");
                $("#enemyName").text(gulper.name);
                $("#enemyHealth").text("Health");
                $("#enemyRemainingHealth").text(gulper.health);
                $("#gulperBio").hide();
                enemySelected = true;
                gulper.isEnemy = true;
                theGamesBegin = true;
                fishReady();
            } 
        });
    }

    //when both fish are set onto the arena
    function fishReady() {
        if (theGamesBegin === true)
        fightTheme.play();
        $("#viperBio").hide();
        $("#anglerBio").hide();
        $("#gulperBio").hide();
        $("#biteButton").show();
    }

    function bite() {
        enemy.health = enemy.health - player.attack;
        $("#enemyRemainingHealth").text(enemy.health);
    }

    function biteBack() {
        player.health = player.health - enemy.counterAttack;
        $("#playerRemainingHealth").text(player.health);
        if (player.health <= 0) {
            lose();
        }
    }
    
    function win() {

    }

    function lose() {
        theGamesBegin = false;
        reset();
    }

    function reset() {

    }

    function goTime() {
        $("#biteButton").on("click", function() {
            if (theGamesBegin === true) {
                bite();
                if (enemy.health <= 0) {

                } else {
                    biteBack();
                }
            } 
        
        });
    }

});