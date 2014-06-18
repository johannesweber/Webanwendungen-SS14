/**
 * Diese Funktion ueberprueft die einzelnen Felder des Formulars
 * @param formularId das formular welches ueberprueft werden soll
 * @returns {boolean}
 */
function pruefen(formularId){

    var form = document.getElementById(formularId);
    var fehlertext = "Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben.";
    var korrekt = false;
    var fehlerspeicher = [];

    //fehlerspeicher leeren
    fehlerspeicher.length = 0;

    //felder auf richtige angaben pruefen
    var name = form.elements['name'];
    if (!istBuchstabe(name.value)) {
        fehlerspeicher.push(name);
    }

    var vorname = form.elements['vorname'];
    if (!istBuchstabe(vorname.value)) {
        fehlerspeicher.push(vorname);
    }

    var matrikelnr = form.elements['matrikelnr'];
    if (!istZahl(matrikelnr.value)) {
        fehlerspeicher.push(matrikelnr);
    }


    var email = form.elements['email'];
    if (!istEmail(email.value)) {
        fehlerspeicher.push(email);
    }

    var handy = form.elements['handy'];
    if (!istHandy(handy.value)) {
        fehlerspeicher.push(handy);
    }

    //alle roten umrandungen entfernen
    $.each($("input"), function () {
        $(this).removeClass('fehler');

    });

    //focus auf den ersten fehler setzen und fehlertext ausgeben
    if (fehlerspeicher.length != 0) {
        //alle fehler rot umranden
        for (i in fehlerspeicher) {
            fehlerspeicher[i].classList.add('fehler');
        }
        fehlerspeicher[0].focus();
        alert(fehlertext);
    }else{
        korrekt = true;
    }

    return korrekt;
}

/**
 * Diese Funktion gibt true zurueck wenn die uebergebene zeichenkette nur aus zahlen besteht
 * und false wenn nicht.
 * @param zahlen
 * @returns {boolean}
 */
function istZahl(zahlen) {
    var ergebnis = zahlen.match("[0-9]{1,}");
    return ergebnis == zahlen;
}
/**
 * prueft ob es sich bei der uebergebenen nummer umm eine gueltige handynummer handelt
 * @param nummer
 * @returns {boolean}
 */
function istHandy(nummer){
    var ergebnis = nummer.match("0[1-9]+[0-9]+");
    return ergebnis == nummer;
}
/**
 * Diese Funkion prueft ob die uebergebene zeichenkette NUR aus buchstaben besteht
 * @param buchstaben die uebergebene zeichenkette
 * @returns {boolean}
 */
function istBuchstabe(buchstaben){
    var ergebnis = buchstaben.match("[A-Za-z]{1,}");
    return ergebnis == buchstaben;
}
/**
 * Diese Funktion prueft ob es sich bei dem uebergebenen wert um eine gueltige email handelt
 * @param email
 */
function istEmail(email){
    var ergebnis = email.match("[a-zA-Z0-9]+[a-zA-Z0-9._-]*@[a-zA-Z0-9]+\.[A-Z,a-z]{2,5}");
    return ergebnis == email;
}


