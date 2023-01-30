function deckeAuf(id) {
    let button = document.getElementById(id);
    button.classList.add("offen");
}

function deckeZu(id){
    let button = document.getElementById(id);
    button.classList.remove("offen");
}

function aufZu(id) {
    let button = document.getElementById(id)
    if (button.classList.contains("offen") ){
        deckeZu(id);
    }else {
        deckeAuf(id)
    }
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

 function randomTable() {
     let table = document.getElementById("myTable");
     let tbody = table.getElementsByTagName("tbody")[0];
     let rows = tbody.getElementsByTagName("tr");
     let td = tbody.getElementsByTagName("td");

     //rows[0].append(randomTableData[0]);
     for (let i = 0; i < 1; i++) {
         let r = Math.floor(Math.random() * 3);
         let s = Math.floor(Math.random() * 3);
         let t = Math.floor(Math.random() * 3);
         let randomTableData = rows[r].children;
         console.log(rows[r] + " + " + randomTableData[s]);
         rows[t].append(randomTableData[s]);
        /*Eine schleife die überprüft, ob alle zeilen nur 4 elemente lang sind.
        Wenn das nicht der Fall ist, soll die Schleife das obere nochmal aufrufen,
         aber wenn die Zeile länger ist soll sie ein Element aus der Zeile nehmen
         und in eine einfügen die nicht 4 Elemente hat.   */
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