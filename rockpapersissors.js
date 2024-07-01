function playGame(playerChoice) {
    const choices = ['piedra', 'papel', 'tijera'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result = '';
    if (playerChoice === computerChoice) {
        result = 'Es un empate';

    } else if (
        (playerChoice === 'piedra' && computerChoice === 'tijera') ||
        (playerChoice === 'papel' && computerChoice === 'piedra') ||
        (playerChoice === 'tijera' && computerChoice === 'papel')
    ) {
        result = `¡Ganaste! ${playerChoice} vence a ${computerChoice}.`;
    } else {
        result = `¡Perdiste! ${computerChoice} vence a ${playerChoice}.`;
    }

    document.getElementById('result').innerHTML = result;


}





















// juego.js

/*function playGame(playerChoice) {
    const choices = ['piedra', 'papel', 'tijera'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result = '';
    if (playerChoice === computerChoice) {
        result = '¡Es un empate!';
    } else if (
        (playerChoice === 'piedra' && computerChoice === 'tijera') ||
        (playerChoice === 'papel' && computerChoice === 'piedra') ||
        (playerChoice === 'tijera' && computerChoice === 'papel')
    ) {
        result = `¡Ganaste! ${playerChoice} vence a ${computerChoice}.`;
    } else {
        result = `¡Perdiste! ${computerChoice} vence a ${playerChoice}.`;
    }

    document.getElementById('result').textContent = result;
}*/

