function deckeAuf(id) {
    let button = document.getElementById(id);
    button.classList.add("offen");
}

function deckeZu(id){
    let button = document.getElementById(id);
    button.classList.remove("offen");
}

function deckeAlleZu() {
    let i=1;
    while (i<16){
        deckeZu(i);
        i++;
    }
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

let d = 0;

function punkteSetzen1plus() {
    d++
    punkteSetzen1(d)
}

function punkteSetzen2(punkte2) {
    if (punkte2 != null) {
        document.getElementById("punkte2").innerHTML =
            "Punkte: " + punkte2;
    }
}

let c = 0;

function punkteSetzen2plus() {
    c++
    punkteSetzen2(c)
}

function aufZu(id) {
    let button = document.getElementById(id)
    if (button.classList.contains("offen") ){
        deckeZu(id);
    }else {
        deckeAuf(id)
    }
}
 function randomTable() {
     var table = document.getElementById("myTable");
     var tbody = table.getElementsByTagName("tbody")[0];
     var rows = tbody.getElementsByTagName("tr");
     var td = tbody.getElementsByTagName("td");
     for (var i = 0; i < rows.length; i++) {
         tbody.appendChild(rows[Math.floor(Math.random() * rows.length)]);
     }
     for (var i = 0; i < td.length; i++) {
         tbody.appendChild(td[Math.floor(Math.random() * td.length)]);
     }
 }


function start() {
    deckeAlleZu();
    randomTable()
    namenSetzen1();
    namenSetzen2();
    c = 0;
    d = 0;
    punkteSetzen1(0)
    punkteSetzen2(0)
}