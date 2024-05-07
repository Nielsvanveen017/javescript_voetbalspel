console.log("Test mijn bestand wereld");

// Deze data gebruik ik om mijn functie te testen, de data moet later veranderd worden aan de hand van de user input
let goedeAntwoord = "Bellingham" 
let userInput = "Geen Bellingham"

// Aantal pogingen opslaan en ophalen
var pogingen = 3;
var getalPogingen = document.querySelector("#id_pogingen");

// Een functie die zonder op de knop te drukken aangeeft hoeveel pogingen de gebruiker nog over heeft
function default_number(){
    getalPogingen.textContent = pogingen;
}

// Met behulp van deze functie verander je het aantal pogingen in de HTMl
function veranderPogingen(){
        pogingen = pogingen - 1
        console.log("Pogingen: " + pogingen)
        getalPogingen.textContent = pogingen
}

// Functie aanroepen zodat hij getoond wordt
default_number()

// Ophalen tekst foutmelding zodat deze gewijzigd kan worden
var text_foutmelding = document.querySelector("#id_foutmelding");
var antwoord_gebruiker = document.querySelector("#userInput")

// Functie om user input te checken, nog niet helemaal volledig
function check_input(){
    if (antwoord_gebruiker !== goedeAntwoord){
        text_foutmelding.textContent = "Helaas dat is fout, je hebt nog " + pogingen +  " pogingen om het te proberen."
    }
    else{
        text_foutmelding.textContent = ""
    }
}

// Verander het aantal pogingen pas wanneer de gebruiker op de knop drukt
var checkButton = document.querySelector("button");
checkButton.addEventListener("click", veranderPogingen);
checkButton.addEventListener("click", check_input);
