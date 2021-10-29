
var lista = document.getElementById("to-do");

// tarkistaa, että teksti käy
function validoiTeksti(this) {
    if (this == '') {
        // lisää virheilmoituksen,
        comments.parentNode.classList.add("virhe");
        document.getElementById("virheilmoitus").innerHTML("Tämä kenttä ei voi olla tyhjä.");
        valid = false;
    if (this > 4)
        comments.parentNode.classList.add("virhe2");
        document.getElementById("virheilmoitus").innerHTML("Liian lyhyt syöte.");
        valid = false;
    } else {
        // poistaa virheilmoituksen
        comments.parentNode.classList.remove("virhe");
        comments.parentNode.classList.remove("virhe2");
        valid = true;
        if (valid == true) {
            lisääItem(this)
            return this
        }
    }
}

// lisää uuden tekstin listaan
function lisääItem() {
    //lisää elementti tekstin kanssa
    //lista id ("to-do")
    var txt = document.createElement("ul"); 
    
    // lisää riville poistonapin
    // ei vielä toimi
    var i;
    for (i = 0; i<myNodelist.length; i++) {
        var span = document.createElemnent("SPAN");
        var txt = document.createTextNode("X");
        span.className = "kiinni";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }

    // Local storage
    var userData = input.value; // hae kayttäjän syöte
    var getLocalStorage = localStorage.getItem("tehtävä");  
    if(getLocalStorage == ""){
        listArr = []; // uusi array
    } else {
        listArr = JSON.parse(getLocalStorage); // JSON --> JS
    }
    listArr.push(userData); // käyttäjän syöte lisätään
    localStorage.setitem("tehtävä", JSON.stringlify(listArr)); // JS --> JSON
}


// poistaa kaikki listaelementit
function poistaKaikki() {
    document.getElementByElement("ul").clear();
    localStorage.clear();
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
// poistonappia ei ole
var close = document.getElementByClassName("close");
var i;
for (i=0; i<close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        ul.style.display = "none";
    }
}
