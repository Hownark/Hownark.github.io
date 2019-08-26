var pokeList = [
    { Number: 1, Name: "Bulbasaur" },
    { Number: 2, Name: "Ivysaur" },
    { Number: 3, Name: "Venusaur" },
    { Number: 4, Name: "Charmander" },
    { Number: 5, Name: "Charmeleon" },
    { Number: 6, Name: "Charizard" },
    { Number: 7, Name: "Squirtle" },
    { Number: 8, Name: "Wartortle" },
    { Number: 9, Name: "Blastoise" },
    { Number: 10, Name: "Caterpie" },
    { Number: 11, Name: "Metapod" },
    { Number: 12, Name: "Butterfree" },
    { Number: 13, Name: "Weedle" },
    { Number: 14, Name: "Kakuna" },
    { Number: 15, Name: "Beedrill" },
    { Number: 16, Name: "Pidgey" },
    { Number: 17, Name: "Pidgeotto" },
    { Number: 18, Name: "Pidgeot"},
    { Number: 19, Name: "Rattata" },
    { Number: 20, Name: "Raticate"},
    { Number: 21, Name: "Spearow" },
    { Number: 22, Name: "Fearow"},
    { Number: 23, Name: "Ekans" },
    { Number: 24, Name: "Arbok" },
    { Number: 25, Name: "Pikachu" },
    { Number: 26, Name: "Raichu" },
    { Number: 27, Name: "Sandshrew" },
    { Number: 28, Name: "Sandslash" },
    { Number: 29, Name: "Nidoran" },
    { Number: 30, Name: "Nidorina" },
    { Number: 31, Name: "Nidoqueen" },
    { Number: 32, Name: "Nidoran" },
    { Number: 33, Name: "Nidorino" },
    { Number: 34, Name: "Nidoking" },
    { Number: 35, Name: "Clefairy" },
    { Number: 36, Name: "Clefable" },
    { Number: 37, Name: "Vulpix" },
    { Number: 38, Name: "Ninetales" },
    { Number: 39, Name: "Jigglypuff"},
    { Number: 40, Name: "Wigglytuff" },
    { Number: 41, Name: "Zubat" },
    { Number: 42, Name: "Golbat" },
    { Number: 43, Name: "Oddish" },
    { Number: 44, Name: "Gloom" },
    { Number: 45, Name: "Vileplume" },
    { Number: 46, Name: "Paras" },
    { Number: 47, Name: "Parasect" },
    { Number: 48, Name: "Venonat" },
    { Number: 49, Name: "Venomoth" },
    { Number: 50, Name: "Diglett" },
    { Number: 51, Name: "Dugtrio" },
    { Number: 52, Name: "Meowth" },
    { Number: 53, Name: "Persian" },
    { Number: 54, Name: "Psyduck"},
    { Number: 55, Name: "Golduck" },
    { Number: 56, Name: "Mankey" },
    { Number: 57, Name: "Primeape" },
    { Number: 58, Name: "Growlithe" },
    { Number: 59, Name: "Arcanine" },
    { Number: 60, Name: "Poliwag" },
    { Number: 61, Name: "Poliwhirl" },
    { Number: 62, Name: "Poliwrath" },
    { Number: 63, Name: "Abra" },
    { Number: 64, Name: "Kadabra" },
    { Number: 65, Name: "Alakazam" },
    { Number: 66, Name: "Machop" },
    { Number: 67, Name: "Machoke" },
    { Number: 68, Name: "Machamp" },
    { Number: 69, Name: "Bellsprout" },
    { Number: 70, Name: "Weepinbell" },
    { Number: 71, Name: "Victreebel" },
    { Number: 72, Name: "Tentacool" },
    { Number: 73, Name: "Tentacruel" },
    { Number: 74, Name: "Geodude" },
    { Number: 75, Name: "Graveler" },
    { Number: 76, Name: "Golem" },
    { Number: 77, Name: "Ponyta" },
    { Number: 78, Name: "Rapidash" },
    { Number: 79, Name: "Slowpoke" },
    { Number: 80, Name: "Slowbro" },
    { Number: 81, Name: "Magnemite" },
    { Number: 82, Name: "Magneton" },
    { Number: 83, Name: "Farfetch" },
    { Number: 84, Name: "Doduo" },
    { Number: 85, Name: "Dodrio" },
    { Number: 86, Name: "Seel" },
    { Number: 87, Name: "Dewgong" },
    { Number: 88, Name: "Grimer" },
    { Number: 89, Name: "Muk" },
    { Number: 90, Name: "Shellder" },
    { Number: 91, Name: "Cloyster" },
    { Number: 92, Name: "Gastly" },
    { Number: 93, Name: "Haunter" },
    { Number: 94, Name: "Gengar" },
    { Number: 95, Name: "Onix" },
    { Number: 96, Name: "Drowzee" },
    { Number: 97, Name: "Hypno" },
    { Number: 98, Name: "Krabby" },
    { Number: 99, Name: "Kingler"},
    { Number: 100, Name: "Voltorb" },
    { Number: 101, Name: "Electrode" },
    { Number: 102, Name: "Exeggcute" },
    { Number: 103, Name: "Exeggutor" },
    { Number: 104, Name: "Cubone" },
    { Number: 105, Name: "Marowak" },
    { Number: 106, Name: "Hitmonlee" },
    { Number: 107, Name: "Hitmonchan" },
    { Number: 108, Name: "Lickitung" },
    { Number: 109, Name: "Koffing" },
    { Number: 110, Name: "Weezing" },
    { Number: 111, Name: "Rhyhorn" },
    { Number: 112, Name: "Rhydon" },
    { Number: 113, Name: "Chansey" },
    { Number: 114, Name: "Tangela" },
    { Number: 115, Name: "Kangaskhan"},
    { Number: 116, Name: "Horsea" },
    { Number: 117, Name: "Seadra" },
    { Number: 118, Name: "Goldeen" },
    { Number: 119, Name: "Seaking" },
    { Number: 120, Name: "Staryu" },
    { Number: 121, Name: "Starmie" },
    { Number: 122, Name: "Mr. Mime" },
    { Number: 123, Name: "Scyther"},
    { Number: 124, Name: "Jynx" },
    { Number: 125, Name: "Electabuzz"},
    { Number: 126, Name: "Magmar"},
    { Number: 127, Name: "Pinsir" },
    { Number: 128, Name: "Tauros" },
    { Number: 129, Name: "Magikarp" },
    { Number: 130, Name: "Gyarados" },
    { Number: 131, Name: "Lapras"},
    { Number: 132, Name: "Ditto" },
    { Number: 133, Name: "Eevee" },
    { Number: 134, Name: "Vaporeon" },
    { Number: 135, Name: "Jolteon" },
    { Number: 136, Name: "Flareon" },
    { Number: 137, Name: "Porygon" },
    { Number: 138, Name: "Omanyte" },
    { Number: 139, Name: "Omastar" },
    { Number: 140, Name: "Kabuto" },
    { Number: 141, Name: "Kabutops" },
    { Number: 142, Name: "Aerodactyl" },
    { Number: 143, Name: "Snorlax"},
    { Number: 144, Name: "Articuno" },
    { Number: 145, Name: "Zapdos"},
    { Number: 146, Name: "Moltres" },
    { Number: 147, Name: "Dratini" },
    { Number: 148, Name: "Dragonair" },
    { Number: 149, Name: "Dragonite" },
    { Number: 150, Name: "Mewtwo" },
    { Number: 151, Name: "Mew"}
    ];

var pokeObj = null;
var max = pokeList.length;
var imgSet;
var pokeRight;
var correct = 0;
var wrong = 0;
var timerId = null;
var winStreak = 0;

// capturar eventos de botao
$(document).ready(function (){
    getImg();
    pokeSetShow();
    contagem_tempo(21);
    enterButtao();


    $("#butao").click(function (){
        $("#next").show(); 
        $("#butao").hide();
        getAnswer();
        pokeRightShow();
        clearTimeout(timerId);
        lastPokemon();   
        
    });

    $("#next").click(function (){
        getImg();
        pokeSetShow();
        contagem_tempo(21);
        $("#next").hide(); 
        $("#butao").show();
        $("#shot").val("");
        $("#correct").html(""); 
        $("#tryAgain").html("");
    });

    $("#playAgain").click(function (){
        window.location.href = 'index.html';
    });
   
});


// escolher pokemon de forma random
function getImg() {
    imgSet = Math.floor(Math.random() * (max));
    pokeObj = pokeList[imgSet];
    console.log("getImg");
    console.log(max);
    console.log(imgSet);
}

//mostrar sombra pokemon
function pokeSetShow() {
    $("#pokemonImg").empty();

    var elem = document.createElement("img");
    elem.setAttribute("id", "pokemonImg");
    elem.setAttribute("src", "WhoIsThatPokemonImg/Pictures/PokemonsShadow/" + pokeObj.Number + ".png");
    document.getElementById("pokemonImg").appendChild(elem);
    $("#pokeTitle").html("Who is that Pokemon ???")
    console.log("pokeSetShow");
}

// ver se certo ou errado
function getAnswer() {
    var shot = $("#shot").val();

    if ( shot.toUpperCase() == pokeObj.Name.toUpperCase() ) {
        $("#correct").html("Acerto miseravi !!!"); 
        countRights(); 
        $("#rightAnswer").html("Right answers: " + correct); 
        pokeList.splice(imgSet, 1);
        max = pokeList.length;
        winStreak++
        
        switch (winStreak) {
            
            case 20: lifeRegen(); break;
            
            case 40: lifeRegen(); break;

            case 60: lifeRegen(); break;

            case 80: lifeRegen(); break;
        }
    } else {
        countWrong();
            if ( wrong == 5) {
                $("#tryAgain").html("Game Over, hit Play again if you have what it takes to catch them all !").css("background-color","red");
                $("#shot").hide();
                $("#next").hide();
                $("#playAgain").show();
            } else {
                $("#tryAgain").html("Erroooooooou !!!");
                winStreak = 0;
            };
    };

    $("#howMany").html("How many left to become the Pokemaster: " + max);
    $("#guessStreak").html(winStreak);

    console.log(shot);
    console.log(correct);
    console.log(wrong);
    console.log("getAnswer");
}


// revelar pokemon
function pokeRightShow() {
    $("#pokemonImg").empty();

    if ( max == 0) {
        pokeMaster();
    } else {

    var elem = document.createElement("img");
    elem.setAttribute("id", "pokemonImg");
    elem.setAttribute("src", "WhoIsThatPokemonImg/Pictures/Pokemons/" + pokeObj.Number + ".png");
    document.getElementById("pokemonImg").appendChild(elem);
    $("#pokeTitle").html("It is .... <br>" + pokeObj.Name + "!!!")
    console.log("pokeRightShow");
    }
}

// contar certos
function countRights() {
    correct++;
    console.log("countRights");
    return correct;
    
}


// contar errados
function countWrong() {
    wrong++;

    switch(wrong) {
        case  1:
            $("#life5").css("visibility", "hidden");
            break;

        case  2:
            $("#life4").css("visibility", "hidden");
            break;

        case  3:
            $("#life3").css("visibility", "hidden");
            break;

        case  4:
            $("#life2").css("visibility", "hidden");
            break;

        case  5:
            $("#life1").css("visibility", "hidden");
            game_over();
            break;
    }   

    return wrong;
}

// contar tempo
function contagem_tempo(segundos){

    segundos = segundos - 1;

    if(segundos == -1){
        $("#butao").click();
        return false;
    }

    document.getElementById('cronometro').innerHTML = segundos;

    timerId = setTimeout("contagem_tempo("+segundos+")", 1000);

}


// zerar as vidas (pokebolas)
function game_over(){
    pokeRightShow();
    
    console.log("game_over");
}

// Setar ultimo pokemon
function lastPokemon(){
    $("#lastPoke").html("Last Pokemon: " + pokeObj.Name);
}

// recuperar vida
function lifeRegen() {
    switch(wrong) {
        case  1:
            $("#life5").css("visibility", "visible");
            break;

        case  2:
            $("#life4").css("visibility", "visible");
            break;

        case  3:
            $("#life3").css("visibility", "visible");
            break;

        case  4:
            $("#life2").css("visibility", "visible");
            break;
    }  

    wrong--;
}

// Winner winner pokemon dinner
function pokeMaster() {
    var elem = document.createElement("img");
        elem.setAttribute("src", "WhoIsThatPokemonImg/pokeMaster.png");
        document.getElementById("pokemonImg").appendChild(elem);
        $("#pokeTitle").html("Congratulations you're a real <br> POKEMASTER !!!")
        $("#pokeMaster").html("“I see now that one’s birth is irrelevant. It’s what you do that determines who you are.” – Mewtwo");
        $("#shot").hide();
        $("#next").hide();
        $("#correct").hide();
        $("#playAgain").show();
}

// Play with ENTER key
function enterButtao () {
    $("#shot").keypress(function(e){
        if(e.keyCode == 13) {
            if ($("#butao").is(":visible")) {
                $("#butao").click();
                
            } else {
                $("#next").click();
            }
            e.preventDefault();
        };
    });
};


