// Ophalen foutmelding en knop
let text_foutmelding = document.getElementById("id_foutmelding");
let checkButton = document.querySelector("button");
let userInput = document.getElementById("userInput");

// Ophalen data speler
let afbeeldingSpeler = document.getElementById("playerDetails");

let getalPogingen = document.getElementById("id_pogingen");

// Ophalen data over het antwoord & pogingen
let questions = [];

// standaard leeg antwoord voor de gebruiker 
let antwoord_gebruiker = ""
let pogingen = 3;

let actieveVraag = {}

// Haal de data van de vragen op uit het json bestand
fetch('../questions.json')
    .then(response => response.json())
    .then(jsonData => {
        questions = jsonData;
        // console.log('Questions', questions);
        generate_player()
    })
    .catch(error => console.error('Error fetching JSON data:', error));

// Een functie die zonder op de knop te drukken aangeeft hoeveel pogingen de gebruiker nog over heeft
function default_number() {
    pogingen = 3;
    getalPogingen.textContent = pogingen;
}

// Met behulp van deze functie verander je het aantal pogingen in de HTMl
function veranderPogingen() {
    if (pogingen > 0) {
        pogingen--;
        getalPogingen.textContent = pogingen
    }
}

// pick a random record from the array in javascript
function random_vraag(array) {
    const randomIndex = Math.floor(
        Math.random() * array.length
    );
    return array[randomIndex];
}

// Functie voor het genereren van een nieuwe speler (nog niet af)
function generate_player() {
    if (questions.length > 0) {
        actieveVraag = random_vraag(questions);

        afbeeldingSpeler.src = actieveVraag.image

        console.log(afbeeldingSpeler, actieveVraag)
    }
}

// krijg de value van de input wat de gebruiker invoert en zet deze als antwoord voor de gebruiker
function changeUserInput() {
    // Zet antwoord van gebruiker uit de input in de aangemaakte lege string
    antwoord_gebruiker = userInput.value;
}


// Functie om user input te checken, nog niet helemaal volledig
function check_input() {
    // Check of de actieve vraag is gezet en niet leeg is -> check data succesvol opgehaald
    if (actieveVraag) {
        // Check of de gebruiker nog pogingen over heeft
        if (pogingen <= 0) {
            text_foutmelding.textContent = "Helaas dat is fout, je hebt geen pogingen meer om het te proberen."
        } 
        // Check antwoord gebruiker met correct antwoord
        else if (antwoord_gebruiker !== actieveVraag.correct_answer) {
            veranderPogingen()
            text_foutmelding.textContent = "Helaas dat is fout, je hebt nog " + pogingen + " pogingen om het te proberen."
        } 
        // geef correct antwoord als dit geraden is
        else {
            text_foutmelding.textContent = "Gefeliciteerd, jouw antwoord was goed";
            default_number()
            generate_player()
            userInput.value = ""
        }
    }
}
// Functie aanroepen zodat hij getoond wordt
default_number()

// Verander het aantal pogingen pas wanneer de gebruiker op de knop drukt
// checkButton.addEventListener("click", veranderPogingen);
// checkButton.addEventListener("click", check_input);

checkButton.addEventListener("click", function () {
    // veranderPogingen() 
    check_input()
})


