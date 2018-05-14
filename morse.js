window.onload = setUpLetters;

var signs = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

var morse = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..', '.----', '..---', '...--', '....-', '.....', '-....', '--...', '---..', '----.', '-----'];


function setUpLetters() {

    var alphabetDiv = "";

    for (var i = 0; i < signs.length; i++) {

        alphabetDiv = alphabetDiv + '<div class="letter" onclick="trans(' + i + ')">' + signs[i] + '</div>';
    }
    document.getElementById('alphabet').innerHTML = alphabetDiv;
}


function trans(nr) {
    var ulSigns = document.getElementById("translation-text");
    var ulMorse = document.getElementById("translation-list");
    var liSigns = document.createElement("li");
    var liMorse = document.createElement("li");
    liMorse.appendChild(document.createTextNode('\u00A0' + morse[nr] + '\u00A0'));
    ulMorse.appendChild(liMorse);
    liSigns.appendChild(document.createTextNode(signs[nr]));
    ulSigns.appendChild(liSigns);
}


document.querySelector('.clear-btn').addEventListener('click', function () {
    document.getElementById('translation-list').innerHTML = '';
    document.getElementById('translation-text').innerHTML = '';
});


document.querySelector('.space-btn').addEventListener('click', function () {
    var ulSigns = document.getElementById("translation-text");
    var liSpace = document.createElement("li");
    var ulMorse = document.getElementById("translation-list");
    var liSeparator = document.createElement("li");
    liSpace.appendChild(document.createTextNode('\u00A0' + '\u00A0'));
    liSeparator.appendChild(document.createTextNode('\\'));
    ulMorse.appendChild(liSeparator);                      
    ulSigns.appendChild(liSpace);
});

document.querySelector('.bs-btn').addEventListener('click', function () {
    var removeSign = document.getElementById('translation-text');
    var removeMorse = document.getElementById('translation-list');
    removeSign.removeChild(removeSign.lastChild);
    removeMorse.removeChild(removeMorse.lastChild);
});
