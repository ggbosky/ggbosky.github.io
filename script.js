let playerName = ""
let stress = 0
let intelligence = 0

function updateStats() {
    document.getElementById("stats").innerHTML =
        "Hráč: " + playerName +
        " | Stres: " + stress +
        " | Inteligence: " + intelligence
}

function clearChoices() {
    document.getElementById("choices").innerHTML = ""
}

function addChoice(text, action) {
    let btn = document.createElement("button")
    btn.innerText = text
    btn.onclick = action
    document.getElementById("choices").appendChild(btn)
}

function startGame() {
    playerName = prompt("Zadej jméno studenta") + "."
    stress = 0
    intelligence = 0
    updateStats()
    intro()
}

function intro() {
    document.getElementById("story").innerHTML =
        "Budík ti nezazvonil. Je 7:55 a škola začíná v 8:00. Máš 5 minut na to se sebrat a zdrhat do školy, aby tě školní systém neporazil a zároveň získat vysokou Inteligenci a co nejméně stresu."
    clearChoices()
    addChoice("Běžet do školy", runToSchool)
    addChoice("Napsat omluvenku", excuse)
    addChoice("Vrátit se spát", sleep)
}

function runToSchool() {
    stress += 2
    intelligence += 1
    updateStats()
    document.getElementById("story").innerHTML =
        "Dorazil jsi do školy zpocený, ale živý. Čeká tě písemka z matematiky."
    clearChoices()
    addChoice("Psát poctivě", mathTest)
    addChoice("Použít tahák", cheat)
}

function excuse() {
    stress += 1
    updateStats()
    document.getElementById("story").innerHTML =
        "Omluvenka prošla. Ale učitel tě viděl online na Instagramu."
    clearChoices()
    addChoice("Zatloukat", lie)
    addChoice("Přiznat se", confess)
}

function sleep() {
    stress = 0
    document.getElementById("story").innerHTML =
        "Usnul jsi znovu. Školní systém vyhrál."
    clearChoices()
    endGame()
}

function mathTest() {
    intelligence += 2
    stress += 1
    updateStats()
    endGame()
}

function cheat() {
    stress += 3
    updateStats()
    document.getElementById("story").innerHTML =
        "Tahák spadl na zem přímo před učitele."
    clearChoices()
    addChoice("Utéct ze třídy")
    addChoice("Tvářit se nevinně", innocent)
}

function lie() {
    stress += 2
    updateStats()
    endGame()
}

function confess() {
    intelligence += 1
    updateStats()
    endGame()
}

function escape() {
    stress += 5
    updateStats()
    endGame()
}

function innocent() {
    intelligence += 1
    stress += 1
    updateStats()
    endGame()
}

function endGame() {
    clearChoices()
    let ending = ""

    switch (true) {
        case stress >= 5:
            ending = "KONEC: Psychické zhroucení. Školní systém vítězí."
            break
        case intelligence >= 4:
            ending = "KONEC: Přežil jsi den a učitel tě dokonce pochválil."
            break
        case stress === 0:
            ending = "KONEC: Legendární spánek. Nikdo tě nikdy neviděl."
            break
        default:
            ending = "KONEC: Přežil jsi. Nikdo neví jak, ale gratulace."
    }

    document.getElementById("story").innerHTML = ending
    addChoice("Hrát znovu", startGame)
}

startGame()