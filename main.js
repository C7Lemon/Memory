function deckeAuf(id) {
    let button = document.getElementById(id);
    button.classList.add("offen");
}

function namenSetzen1() {
    let name = prompt("Spieler1 bitte Namen eingeben: ", "Dr. Ian Malcolm");
    if (name != null) {
        document.getElementById("name1").innerHTML =
            name;
    }
}

function namenSetzen2() {
    let name = prompt("Spieler2 bitte Namen eingeben: ", "Dr. Alan Grant");
    if (name != null) {
        document.getElementById("name2").innerHTML =
            name;
    }
}

function punkteSetzen1(punkte1) {
    if (punkte1 != null) {
        document.getElementById("punkte1").innerHTML =
            "Punkte: " + punkte1;
    }
}

function punkteSetzen2(punkte2) {
    if (punkte2 != null) {
        document.getElementById("punkte2").innerHTML =
            "Punkte: " + punkte2;
    }
}

function start() {
    namenSetzen1();
    namenSetzen2();
}