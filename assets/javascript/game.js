$(document).ready(function() {

    let fish = [
        viper = {
            name: "Viperfish",
            health: 80,
            baseAttack: 4,
            attack: 4,
            counterAttack: 6,
            isPlayer: false,
            isEnemy: false,
        },
        angler = {
            name: "Anglerfish",
            health: 120,
            baseAttack: 3,
            attack: 3,
            counterAttack: 8,
            isPlayer: false,
            isEnemy: false,
        },
        gulper = {
            name: "Gulper Eel",
            health: 100,
            baseAttack: 2,
            attack: 2,
            counterAttack: 10,
            isPlayer: false,
            isEnemy: false,
        }];
    

    let player;
    let playerSelected = false;
    let enemy;
    let enemySelected = false;
    let enemiesLeft = fish.length - 1;
    let theGamesBegin = false;
    let chomp = new Audio ("assets/sound/bite.mp3");
    let tragic = new Audio ("assets/sound/sadtheme.mp3");
    let woohoo = new Audio ("assets/sound/victory.mp3");
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
                $("#playerHealth").text("Health:");
                $("#playerRemainingHealth").text(viper.health);
                $("#viperBio").hide();
                $("#viper").addClass('lookRight');
                $("#instructions").text("Choose a Delicious Enemy!");
                playerSelected = true;
                viper.isPlayer = true;
            }
        });

        $("#angler").on("click", function() {
			if (playerSelected === false){
                player = angler;
                $("#angler").appendTo("#playerCorner");
                $("#playerName").text(angler.name);
                $("#playerHealth").text("Health:");
                $("#playerRemainingHealth").text(angler.health);
                $("#anglerBio").hide();
                $("#angler").addClass('lookRight');
                $("#instructions").text("Choose a Delicious Enemy!");
                playerSelected = true;
                angler.isPlayer = true;
            }
        });

        $("#gulper").on("click", function() {
			if (playerSelected === false){
                player = gulper;
                $("#gulper").appendTo("#playerCorner");
                $("#playerName").text(gulper.name);
                $("#playerHealth").text("Health:");
                $("#playerRemainingHealth").text(gulper.health);
                $("#gulperBio").hide();
                $("#gulper").addClass('lookRight');
                $("#instructions").text("Choose a Delicious Enemy!");
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
                $("#enemyHealth").text("Health:");
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
                $("#enemyHealth").text("Health:");
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
                $("#enemyHealth").text("Health:");
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
        $("#instructions").hide();
    }

    function gameManager() {
        if (enemiesLeft === 0) {
            win();
        } else {
            theGamesBegin = false;
                if (enemiesLeft === 1) {
                    //ghost();
                    //create if statements for each fish
                   //setTimeout(function(){$("#viper").attr("src","assets/images/deadviperfish.png")}, 1000 * 2.5);
                   //setTimeout(function(){$("#angler").attr("src","assets/images/deadanglerfish.png")}, 1000 * 2.5);
                   //setTimeout(function(){$("#gulper").attr("src","assets/images/deadgulpereel.png")}, 1000 * 2.5);

            }
        $("#enemyCorner").empty();
        enemySelected = false;
        $("#instructions").text("Choose a Delicious Enemy!");
        enemySelect();
        }
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

    function biteAdder() {
        player.attack = player.attack + player.baseAttack;
    }

    function goTime() {
        $("#biteButton").on("click", function() {
            chomp.play();
            if (theGamesBegin === true) {
                bite();
                biteAdder();
                if (enemy.health <= 0) {
                    enemiesLeft--;
                    gameManager();
                } else {
                    biteBack();
                }
            } 
        
        });
    }
      
    function win() {
        theGamesBegin = false;
        woohoo.play();
        reset();
    }

    function lose() {
        theGamesBegin = false;
        $("#viper").hide();
        $("#angler").hide();
        $("#gulper").hide();
        tragic.play();
        reset();
    }

    /*function ghost() {
        if (enemy === viper) {
            $("#viper").hide();
            $("#viperDead").show();
        } else if (enemy === angler) {
            $("#angler").hide();
            $("anglerDead").show();
            console.log(enemy)
        } else if (enemy === gulper) {
            $("#gulper").hide();
            $("gulperDead").show();
        }

    } */

    function reset() {
        let fish = [
            viper = {
                name: "Viperfish",
                health: 80,
                baseAttack: 4,
                attack: 4,
                counterAttack: 6,
                isPlayer: false,
                isEnemy: false,
            },
            angler = {
                name: "Anglerfish",
                health: 120,
                baseAttack: 3,
                attack: 3,
                counterAttack: 8,
                isPlayer: false,
                isEnemy: false,
            },
            gulper = {
                name: "Gulper Eel",
                health: 100,
                baseAttack: 2,
                attack: 2,
                counterAttack: 10,
                isPlayer: false,
                isEnemy: false,
            }];
        
        playerSelected = false;
        enemySelected = false;
        enemiesLeft = fish.length - 1;
        theGamesBegin = false;
        $("<img id='viper' src='assets/images/viperfish.png' alt='Viperfish'></img>").appendTo("#container")
        $("#viperBio").show();
        $("<img id='angler' src='assets/images/anglerfish.png' alt='Anglerfish'></img>").appendTo("#container")
        $("#anglerBio").show();
        $("<img id='gulper' src='assets/images/gulpereel.png' alt='Gulper Eel'></img>").appendTo("#container")
        $("#gulperBio").show();
        $("#instructions").text("Select your Champion and rule the Abyss!");
        $("#playerHealth").text("");
        $("#playerRemainingHealth").text("");
        $("#playerName").text("")
        $("#enemyName").text("");
        $("#enemyHealth").text("");
        $("#enemyRemainingHealth").text("");
        $("#playerCorner").html("");
        $("#enemyCorner").html("");
        $("#biteButton").hide();
        playerSelect();
        enemySelect();
        goTime();
    }

});