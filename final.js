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

function isSame(arr1, arr2) {
    // You have to write your code here

    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid";
    }


    if (arr1.length !== arr2.length) {
        return false;
    }


    for (let n = 0; n < arr1.length; n++) {

        if (arr1[n] !== arr2[n]) {
            return false;
        }
    }

    return true;
}

function resultReport(marks) {
    // You have to write your code here

    if (!Array.isArray(marks)) {
        return "Invalid";
    }


    if (marks.length === 0) {
        return { finalScore: 0, pass: 0, fail: 0 };
    }

    let passCount = 0;
    let failCount = 0;
    let total = 0;

    for (let mark of marks) {
        total += mark;
        if (mark >= 40) {
            passCount++;
        } else {
            failCount++;
        }
    }

    const average = Math.round(total / marks.length);

    return {
        finalScore: average, pass: passCount, fail: failCount
    };
}