// Ophalen foutmelding en knop
const textFoutmelding = document.getElementById("id_foutmelding");
const checkButton = document.querySelector("button");
const userInput = document.getElementById("userInput");

// Ophalen data speler
const afbeeldingSpeler = document.getElementById("playerDetails");
const getalPogingen = document.getElementById("id_pogingen");

const questions = [
    {
        "image": "../Images/Bellingham.svg",
        "correct_answer": "Jude Bellingham"
    },
    {
        "image": "../Images/simons.svg",
        "correct_answer": "Xavi Simons"
    },
    {
        "image": "../Images/mbape.svg",
        "correct_answer": "Mbape"
    },
    {
        "image": "../Images/haaland.svg",
        "correct_answer": "Haaland"
    },
    {
        "image": "../Images/salah.svg",
        "correct_answer": "Salah"
    },
    {
        "image": "../Images/debruyne.svg",
        "correct_answer": "De Bruyne"
    },
    {
        "image": "../Images/wirtz.svg",
        "correct_answer": "Wirtz"
    }
];

// standaard leeg antwoord voor de gebruiker zodat deze later gevuld kan worden met de input van de gebruiker
const antwoordGebruiker = ""
const pogingen = 3;
const randomVraag;
const actieveVraag = {};

// Een functie die zonder op de knop te drukken aangeeft hoeveel pogingen de gebruiker nog over heeft
function defaultNumber() {
    pogingen = 3;
    getalPogingen.textContent = pogingen;
}

// Met behulp van deze functie verander je het aantal pogingen in de HTMl
function veranderPogingen() {
    console.log("verander pogingen functie");
    console.log("pogingen: " + pogingen);
    if (pogingen > 0) {
        pogingen--;
        getalPogingen.textContent = pogingen;
    }
}

function changeUserInput() {
    // Zet antwoord van gebruiker uit de input in de aangemaakte lege string
    antwoordGebruiker = userInput.value;
}

// Functie voor het genereren van een nieuwe speler
function generatePlayer() {
    defaultNumber();
    randomVraag = Math.floor(Math.random()*7);
    actieveVraag = questions[randomVraag];
    afbeeldingSpeler.src = actieveVraag.image;
}

function playMusic(audioFilePath) {
    const audio = new Audio(audioFilePath);
    audio.play();
}

function feedback(text, kleur, timeoutDuration){
    textFoutmelding.textContent = text;
    textFoutmelding.style.color = kleur;
    userInput.value = "";
    
    // Zorg ervoor dat de melding verdwijnd. Dit is verschillend per type foutmelding, waardoor ik timeoutDuration heb gebruikt 
    setTimeout(() => {
        textFoutmelding.textContent = "";
    }, timeoutDuration);
}

// Functie om user input te checken
function checkInput() {
    // Check of de gebruiker nog pogingen over heeft
    if (pogingen <= 1) {
        feedback("Helaas dat is fout, je hebt geen pogingen meer om het te proberen.", "#EE2424", 3500);
        playMusic("../sound-effects/geenPogingen.mp3");
        generatePlayer();
    } 
    // Check antwoord gebruiker met correct antwoord
    else if (antwoordGebruiker !== actieveVraag.correct_answer) {
        veranderPogingen();
        feedback("Helaas dat is fout, je hebt nog " + pogingen + " pogingen om het te proberen.", "#EE2424", 3000 );
        playMusic("../sound-effects/wrong.mp3");
    } 
    // geef correct antwoord als dit geraden is
    else {
        feedback("Gefeliciteerd, jouw antwoord was goed", '#32D74B', 2000);
        playMusic("../sound-effects/correct.mp3");
        generatePlayer();
    }
}

generatePlayer();
checkButton.addEventListener("click", function () {
    checkInput();
})

