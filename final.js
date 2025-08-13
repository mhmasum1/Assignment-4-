function totalFine(fare) {
    // You have to write your code here

    if (typeof fare !== "number" || fare <= 0) {
        return "Invalid"
    }
    let surCharge = fare * 20 / 100;
    let calTotal = fare + surCharge + 30;

    return calTotal;

}

function onlyCharacter(str) {
    // You have to write your code here
    if (typeof str !== "string") {
        return "Invalid"
    }
    let makeWithOutSpaces = str.split(" ").join("");
    let UpperCaseString = makeWithOutSpaces.toUpperCase();
    return UpperCaseString;


}

function bestTeam(player1, player2) {
    // You have to write your code here
    if (typeof player1 !== "object" || typeof player2 !== "object" || player1 === null || player2 === null) {
        return "Invalid"
    }

    const totalPlayer1 = player1.foul + player1.cardY + player1.cardR;
    const totalPlayer2 = player2.foul + player2.cardY + player2.cardR;
    if (totalPlayer1 < totalPlayer2) {
        return player1.name;
    }
    else if (totalPlayer2 < totalPlayer1) {
        return player2.name;
    }
    else {
        return "Tie";
    }

}