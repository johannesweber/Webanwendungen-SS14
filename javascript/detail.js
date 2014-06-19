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

    sendRequest(tableTag.id);
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
}

function sendRequest(tabelleId) {
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function() {
        //Wenn der Request ankam und ok (200) war dann tue folgendes:
        if (xmlhttp.readyState==4 &amp;&amp; xmlhttp.status==200) {
            //der gesendete ResponseText vom Server wird in ein JSON File geparst
            var jsonObject = JSON.parse(xmlhttp.responseText);
            //Hier kann nun normal wie bisher bekannt mit dem JSON-Objekt umgegangen werden.
            jsonObjektEinfuegen(tabelleId, jsonObject);
        }
    };
    //Hier wird angegeben welche HTTP-Methode und an welche PHP-Datei der Request gesendet wird
    xmlhttp.open("GET","../txt/kosten.txt");
    xmlhttp.send();
}