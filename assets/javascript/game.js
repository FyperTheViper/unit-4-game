$(document).ready(function() {

    let healthCalc1 = Math.floor((Math.random() * 200) + 80);
    let healthCalc2 = Math.floor((Math.random() * 200) + 80);
    let healthCalc3 = Math.floor((Math.random() * 200) + 80);
    let counter1 = Math.floor((Math.random() * 20) + 3);
    let counter2 = Math.floor((Math.random() * 20) + 3);
    let counter3 = Math.floor((Math.random() * 20) + 3);
    let attackPower = Math.floor((Math.random() * 4) + 1);

    let fish = [
        viper = {
            name: "Viperfish",
            health: healthCalc1,
            baseAttack: attackPower,
            attack: attackPower,
            counterAttack: counter1,
            isPlayer: false,
            isEnemy: false,
        },
        angler = {
            name: "Anglerfish",
            health: healthCalc2,
            baseAttack: attackPower,
            attack: attackPower,
            counterAttack: counter2,
            isPlayer: false,
            isEnemy: false,
        },
        gulper = {
            name: "Gulper Eel",
            health: healthCalc3,
            baseAttack: attackPower,
            attack: attackPower,
            counterAttack: counter3,
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
    naming();

    function naming() {
    $("#healthBarV").text("Viperfish " + "Health: " + viper.health);
    $("#healthbarA").text("Anglerfish " + "Health: " + angler.health);
    $("#healthbarG").text("Gulper Eel " + "Health: " + gulper.health);
    }

	function playerSelect(){
		$("#viper").on("click", function() {
			if (playerSelected === false){
                player = viper;
                $("#viper").appendTo("#playerCharacter");
                $("#playerName").text(viper.name);
                $("#playerRemainingHealth").text("Health: " + viper.health);
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
                $("#angler").appendTo("#playerCharacter");
                $("#playerName").text(angler.name);
                $("#playerRemainingHealth").text("Health: " + angler.health);
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
                $("#gulper").appendTo("#playerCharacter");
                $("#playerName").text(gulper.name);
                $("#playerRemainingHealth").text("Health: " + gulper.health);
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
                $("#enemyRemainingHealth").text("Health: " + viper.health);
                $("#enemyCounterAttack").text("Enemy Attack: " + viper.counterAttack)
                $("#viperBio").hide();
                ghosthide();
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
                $("#enemyRemainingHealth").text("Health: " + angler.health);
                $("#enemyCounterAttack").text("Enemy Attack: " + angler.counterAttack)
                $("#anglerBio").hide();
                ghosthide();
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
                $("#enemyHealth").text();
                $("#enemyRemainingHealth").text("Health: " + gulper.health);
                $("#enemyCounterAttack").text("Enemy Attack: " + gulper.counterAttack)
                $("#gulperBio").hide();
                ghosthide();
                enemySelected = true;
                gulper.isEnemy = true;
                theGamesBegin = true;
                fishReady();
            } 
        });
    }

    function ghosthide() {
        $("#viperDead").hide();
        $("#anglerDead").hide();
        $("#gulperDead").hide();
    }

    //when both fish are set onto the arena
    function fishReady() {
        if (theGamesBegin === true)
        fightTheme.play();
        $("#viperBio").hide();
        $("#anglerBio").hide();
        $("#gulperBio").hide();
        $("#biteButton").show();
        $("#instructions").text("Bite that fool!");
    }

    function gameManager() {
        if (enemiesLeft === 0) {
            $("#enemyRemainingHealth").text("DEAD");
            $("#enemyCounterAttack").text("");
            $("#instructions").hide();
            ghost();
            win();
        } else {
            theGamesBegin = false;
                if (enemiesLeft === 1) {
                    $("#enemyRemainingHealth").text("DEAD");
                    $("#enemyCounterAttack").text("");
                    ghost();
                    $("#instructions").show();
                    $("#instructions").text("Choose a Delicious Enemy!");
            }
        
        enemySelected = false;
        $("#instructions").text("Choose a Delicious Enemy!");
        enemySelect();
        }
    }

    function bite() {
        enemy.health = enemy.health - player.attack;
        $("#enemyRemainingHealth").text("Health: " + enemy.health);
    }

    function biteBack() {
        player.health = player.health - enemy.counterAttack;
        $("#playerRemainingHealth").text("Health: " + player.health);
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
        $("#gameOverText").text("VICTORY");
        $("#biteButton").hide();
        shades();
        theGamesBegin = false;
        woohoo.play();
        reset();
    }

    function lose() {
        $("#gameOverText").text("DEFEAT");
        $("#playerRemainingHealth").text("DEAD");
        $("#enemyRemainingHealth").text("So Sad...");
        $("#enemyCounterAttack").text("")
        $("#biteButton").hide();
        $("#playerCharacter").hide();
        $("#tombstone").show();
        $("#instructions").text("A moment of silence for the dead...");
        theGamesBegin = false;
        tragic.play();
        reset();
    }

    function ghost() {
        if (enemy === viper) {
            $("#viper").hide();
            $("#viperDead").show();
            setTimeout(function(){$("#viperDead").hide();}, 1000 * 2);
            setTimeout(enemySelect, 1000 * 2);
        } else if (enemy === angler) {
            $("#angler").hide();
            $("#anglerDead").show();
            setTimeout(function(){$("#anglerDead").hide();}, 1000 * 2);
            setTimeout(enemySelect, 1000 * 2);
        } else if (enemy === gulper) {
            $("#gulper").hide();
            $("#gulperDead").show();
            setTimeout(function(){$("#gulperDead").hide();}, 1000 * 2);
            setTimeout(enemySelect, 1000 * 2);
        }
    } 

    function shades() {
        if (player === viper) {
            $("#viper").hide();
            $("#viperWin").show();
        } else if (player === angler) {
            $("#angler").hide();
            $("#anglerWin").show();
        } else if (player === gulper) {
            $("#gulper").hide();
            $("#gulperWin").show();
        }
    } 

    function reset() {
        $("#doOver").show();
    }

});