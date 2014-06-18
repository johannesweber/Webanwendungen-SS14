/**
 * Diese Funktion zeigt das element der uebergebenen id an.
 *
 */
function anzeigen() {
    for (var i = 0; i < arguments.length; i++){
        var element = document.getElementById(arguments[i]);
        element.style.display='table';
    }
}

/**
 * Diese Funktion versteckt alle Elemente mit der uebergebenen ID.
 *
 */
function verstecken() {
    for (var i = 0; i < arguments.length; i++){
        var element = document.getElementById(arguments[i]);
        element.style.display='none';
    }
}

/**
 * Diese Funktion faerbt das geklickte Element in die Farbe blue um.
 * Zuvor werden alle Element der gleichen Gruppe, wie das geklickte Element,
 * mit Hilfe einer for Schleife, wieder auf die Standardfarbe gefaerbt.
 *
 * @param id die id, des elements, auf welches geklickt wird
 */
function klick(id) {
    var nameklasse = document.getElementById(id).className;
    var klasse = document.getElementsByClassName(nameklasse);
    var geklickt = document.getElementById(id);
    for (var i = 0; i < klasse.length; i++){
        klasse[i].classList.remove("geklickt");
    }
    geklickt.classList.add('geklickt');
}

/**
 * Diese Funktion haengt ein JSON Objekt an eine beliebige Tabelle an.
 *
 * @param tabelleId die id der tabelle in welcher das JSON objekt angefuegt wird
 * @param jsonobjekt das objekt welches angehaengt wird
 */
function  jsonObjektEinfuegen(tabelleId, jsonobjekt) {
    var tabelle = document.getElementById(tabelleId);
    //eine neues rowTag erstellen und mit dem uebergebenen JSON Objekt fuellen
    // rowTag erstellen
    var rowTag = document.createElement('tr');
    for (var i in jsonobjekt){
        var cellTag = document.createElement('td');
        var textNode;
        textNode = document.createTextNode(jsonobjekt[i]);
        cellTag.appendChild(textNode);
        rowTag.appendChild(cellTag);
    }
    tabelle.appendChild(rowTag);
}

/**
 * Funktion um die Tabellen zu erstellen
 * mit Hilfe von JSON Objekten, zu erstellen.
 */

function tabellenErstellen() {

    kostenTabelleErstellen();

    cebitTabelleErstellen();

    conhitTabelleErstellen();

    webtechconTabelleErstellen();


}
/**
 * Eine Funktion welche die Kosten Tabelle erstellt und dann mit JSON Objekten fuellt.
 */
function kostenTabelleErstellen() {
    //Tabelle erstellen
    // das div mit der id mitte holen
    var mitteDiv = document.getElementById('mitte');
    // das table tag erstellen
    var tableTag = document.createElement('table');
    // dem tableTag die id tabelle zuordnen
    tableTag.setAttribute('id', 'kostentabelle');
    tableTag.setAttribute('class', 'tabelle');
    //die tabelle an das div details anfuegen
    mitteDiv.appendChild(tableTag);

    //JSON Objekt fuer den kostenHead erstellen
    var header = ['Messe', 'Selbstkosten'];

    //durch das JSON Objekt iterieren und ein headTag erstellen, fuellen und anhaengen
    for (var i in header){
        var headTag = document.createElement('th');
        var textNode;
        textNode = document.createTextNode(header[i]);
        headTag.appendChild(textNode);
        tableTag.appendChild(headTag);
    }

    // JSON Objekte der Kosten erstellen und in die tabelle einfuegen
    var kostenCebit = {
        name: "CeBit",
        kosten: "15"
    };
    jsonObjektEinfuegen(tableTag.id,kostenCebit);

    var kostenConhit = {
        name: "ConhIT",
        kosten: "50"
    };
    jsonObjektEinfuegen(tableTag.id,kostenConhit);

    var kostenWebtechcon = {
        name: "WebTechCon",
        kosten: "300"
    };
    jsonObjektEinfuegen(tableTag.id,kostenWebtechcon);
}

/**
 * Eine Funktion welche die Tabelle fuer die Teilnehmer der CeBit erstellt und dann mit JSON Objekten fuellt.
 */
function cebitTabelleErstellen(){

    //Tabelle erstellen
    // das div tag mit der id mitte holen
    var mitteDiv = document.getElementById('mitte');
    // das table tag erstellen
    var tableTag = document.createElement('table');
    // dem tableTag die id tabelle geben
    tableTag.setAttribute('id', 'cebittabelle');
    tableTag.setAttribute('class', 'tabelle');
    //die tabelle an das div details anfuegen
    mitteDiv.appendChild(tableTag);

    //JSON Objekt fuer den tableHeader erstellen
    var header = ["Name","Vorname","Studiengang","E-Mail"];
    //durch das JSON Objekt iterieren und ein headTag erstellen, fuellen und anhaengen
    for (var i in header){
        var headTag = document.createElement('th');
        var textNode;
        textNode = document.createTextNode(header[i]);
        headTag.appendChild(textNode);
        tableTag.appendChild(headTag);
    }

    /**
     * Die JSON Objekte der einzelnen Teilnehmer fuer die Cebit erstellen und in die tabelle einfuegen
     */

    var teilnehmercebit1 = {
        name: "Ent",
        vorname: "Thilo",
        studiengang: "IB",
        email: "t.ent@gmail.de"
    };
    jsonObjektEinfuegen(tableTag.id,teilnehmercebit1);

    var teilnehmercebit2 = {
        name: "Kraus",
        vorname: "Martina",
        studiengang: "IB",
        email: "m.kraus@hs-mannheim.de"
    };
    jsonObjektEinfuegen(tableTag.id,teilnehmercebit2);

    var teilnehmercebit3 = {
        name: "Smits",
        vorname: "Thomas",
        studiengang: "UIB",
        email: "t.smits@hs-mannheim.de"
    };
    jsonObjektEinfuegen(tableTag.id,teilnehmercebit3);

    var teilnehmercebit4 = {
        name: "Groeschel",
        vorname: "Michael",
        studiengang: "UIB",
        email: "m.groeschel@hs-mannheim.de"
    };
    jsonObjektEinfuegen(tableTag.id,teilnehmercebit4);
}

/**
 * Eine Funktion welche die Tabelle fuer die Teilnehmer der ConhIT erstellt und dann mit JSON Objekten fuellt.
 */
function conhitTabelleErstellen (){
    //Tabelle erstellen
    // das div tag mit der id mitte holen
    var mitteDiv = document.getElementById('mitte');
    // das table tag erstellen
    var tableTag = document.createElement('table');
    // dem tableTag die id tabelle geben
    tableTag.setAttribute('id', 'conhittabelle');
    tableTag.setAttribute('class', 'tabelle');
    //die tabelle an das div details anfuegen
    mitteDiv.appendChild(tableTag);

    //JSON Objekt fuer den tableHeader erstellen
    var header = ["Name","Vorname","Studiengang","E-Mail"];
    //durch das JSON Objekt iterieren und ein headTag erstellen, fuellen und anhaengen
    for (var i in header){
        var headTag = document.createElement('th');
        var textNode;
        textNode = document.createTextNode(header[i]);
        headTag.appendChild(textNode);
        tableTag.appendChild(headTag);
    }

    // die teilnehmer der conhit erstellen und einfuegen
    var teilnehmerconhit1 = {
        name: "Schmuecker",
        vorname: "Paul",
        studiengang: "IMB",
        email: "p.schmuecker@hs-mannheim.de"
    };
    jsonObjektEinfuegen(tableTag.id,teilnehmerconhit1);

    var teilnehmerconhit2 = {
        name: "Felsenheimer",
        vorname: "Jan",
        studiengang: "IB",
        email: "j.felsenheimer@diebestebaendderwelt.de"
    };
    jsonObjektEinfuegen(tableTag.id,teilnehmerconhit2);
}

/**
 * Eine Funktion welche die Tabelle fuer die Teilnehmer der WebTechCon erstellt und dann mit JSON Objekten fuellt.
 */
function webtechconTabelleErstellen() {
    //Tabelle erstellen
    // das div tag mit der id mitte holen
    var mitteDiv = document.getElementById('mitte');
    // das table tag erstellen
    var tableTag = document.createElement('table');
    // dem tableTag die id tabelle geben
    tableTag.setAttribute('id', 'webtechcontabelle');
    tableTag.setAttribute('class', 'tabelle');
    //die tabelle an das div details anfuegen
    mitteDiv.appendChild(tableTag);

    //JSON Objekt fuer den tableHeader erstellen
    var header = ["Name","Vorname","Studiengang","E-Mail"];
    //durch das JSON Objekt iterieren und ein headTag erstellen, fuellen und anhaengen
    for (var i in header){
        var headTag = document.createElement('th');
        var textNode;
        textNode = document.createTextNode(header[i]);
        headTag.appendChild(textNode);
        tableTag.appendChild(headTag);
    }

    // die teilnehmer der webtechcon erstellen und einfuegen
    var teilnehmerwebtechcon1 = {
        name: "Spies",
        vorname: "Marcell",
        studiengang: "IB",
        email: "m.spies@gmail.de"
    };
    jsonObjektEinfuegen(tableTag.id,teilnehmerwebtechcon1);

    var teilnehmerwebtechcon2 = {
        name: "Hoppe",
        vorname: "Johannes",
        studiengang: "UIB",
        email: "j.hoppe@gmx.de"
    };
    jsonObjektEinfuegen(tableTag.id,teilnehmerwebtechcon2);

    var teilnehmerwebtechcon3 = {
        name: "Hofmeister",
        vorname: "Johannes",
        studiengang: "UIB",
        email: "cessor@gmail.de"
    };
    jsonObjektEinfuegen(tableTag.id,teilnehmerwebtechcon3);
}