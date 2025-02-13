function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getDifficultySettings() {
    const levels = {
        "1": { name: "Facile", min: 1, max: 10, attempts: 5 },
        "2": { name: "Intermédiaire", min: 1, max: 50, attempts: 7 },
        "3": { name: "Difficile", min: 1, max: 100, attempts: 10 }
    };

    let choice;
    do {
        choice = prompt("Choisissez un niveau de difficulté :\n1 - Facile (1-10, 5 essais)\n2 - Intermédiaire (1-50, 7 essais)\n3 - Difficile (1-100, 10 essais)");
    } while (!levels[choice]);

    return levels[choice];
}

function playGame() {
    const { name, min, max, attempts } = getDifficultySettings();
    const secretNumber = getRandomNumber(min, max);
    let remainingAttempts = attempts;
    if ({name,min,max,attempts}=null){
        alert("Jeu annulé.");
        return;
    }
    alert(`Vous avez choisi le mode ${name}. Trouvez le nombre entre ${min} et ${max}. Vous avez ${attempts} tentatives !`);

    while (remainingAttempts > 0) {
        let guess = prompt(`Entrez un nombre entre ${min} et ${max} (Tentatives restantes : ${remainingAttempts})`);

        if (guess === null) {
            alert("Jeu annulé.");
            return;
        }

        guess = parseInt(guess, 10);

        if (isNaN(guess) || guess < min || guess > max) {
            alert(`Veuillez entrer un nombre valide entre ${min} et ${max}.`);
            continue;
        }

        if (guess === secretNumber) {
            alert(`Bravo ! Vous avez trouvé le nombre ${secretNumber} en ${attempts - remainingAttempts + 1} tentative(s).`);
            break;
        } else if (guess < secretNumber) {
            alert("Trop bas !");
        } else {
            alert("Trop haut !");
        }

        remainingAttempts--;

        if (remainingAttempts === 0) {
            alert(`Dommage ! Le nombre était ${secretNumber}.`);
        }
    }

    if (confirm("Voulez-vous rejouer ?")) {
        playGame();
    } else {
        alert("Merci d'avoir joué !");
    }
}

playGame();
