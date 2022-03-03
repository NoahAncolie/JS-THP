//============ Factorielle ===============

function factorielle(num) {
    if (num < 0) 
        return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorielle(num - 1));
    }
}

console.log(factorielle(Number(prompt("Choisis un nombre a factoriser : "))))