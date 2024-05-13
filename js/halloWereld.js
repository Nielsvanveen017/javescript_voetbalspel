// Ophalen foutmelding en knop
let text_foutmelding = document.querySelector("#id_foutmelding");
let checkButton = document.querySelector("button");

// Ophalen data over het antwoord & pogingen
let goedeAntwoord = "Bellingham" 
let antwoord_gebruiker = "Niet Bellingham"
let pogingen = 3;
let getalPogingen = document.querySelector("#id_pogingen");

// Ophalen data speler
let afbeeldingSpeler = document.querySelector("#playerDetails");


// Een functie die zonder op de knop te drukken aangeeft hoeveel pogingen de gebruiker nog over heeft
function default_number(){
    getalPogingen.textContent = pogingen;
}

// Met behulp van deze functie verander je het aantal pogingen in de HTMl
function veranderPogingen(){
    pogingen--;
    console.log("Pogingen: " + pogingen)
    getalPogingen.textContent = pogingen
}

// Functie voor het genereren van een nieuwe speler (nog niet af)
function generate_player(){
}

// Functie om user input te checken, nog niet helemaal volledig
function check_input(){
    if (pogingen <= 0){
        text_foutmelding.textContent = "Helaas dat is fout, je hebt geen pogingen meer om het te proberen."
    }
    else if (antwoord_gebruiker !== goedeAntwoord){
        text_foutmelding.textContent = "Helaas dat is fout, je hebt nog " + pogingen +  " pogingen om het te proberen."
    }

    else{
        text_foutmelding.textContent = "Gefeliciteerd, jouw antwoord was goed"
        generate_player()
    }
}
// Functie aanroepen zodat hij getoond wordt
default_number()

// Verander het aantal pogingen pas wanneer de gebruiker op de knop drukt
checkButton.addEventListener("click", veranderPogingen);
checkButton.addEventListener("click", check_input);

