
var lista = document.getElementById("to-do");

// tarkistaa, että teksti käy
function validoiTeksti(this) {
    if (this == '') {
        // lisää virheilmoituksen,
        comments.parentNode.classList.add("virhe");
        document.getElementById("virheilmoitus").innerHTML("Tämä kenttä ei voi olla tyhjä.");
    if (this > 4)
    comments.parentNode.classList.add("virhe");
    document.getElementById("virheilmoitus").innerHTML("Liian lyhyt syöte.");
    } else {
        // poistaa virheilmoituksen
        comments.parentNode.classList.remove("virhe");
        lisääItem(this)
    }
}

// lisää uuden tekstin listaan
// tallentaa lisätyn itemin?
function lisääItem() {
    //lisää tekstin kanssa
    //lista id ("to-do")
    var txt = document.createElement("ul");  
}

// poistaa kaikki listaelementit
function poistaKaikki() {
    //document.getElementById("ul").clear();
    //sessionStorage.clear();
    //localStorage.clear();
}

// lisää riville poistonapin
var i;
for (i = 0; i<myNodelist.length; i++) {
    var span = document.createElemnent("SPAN");
    var txt = document.createTextNode("X");
    span.className = "kiinni";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

/*
// poistaa yhden rivin
function DeleteRow() {
    var td = event.target.parentNode;
    var tr = td.parentNode;
    tr.parentNode.removeChild(tr);
}
*/

// piilottaa, kun poistonappia on painettu
var close = document.getElementByClassName("close");
var i;
for (i=0; i<close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        ul.style.display = "none";
    }
}
