function totalFine(fare) {
    // You have to write your code here

    if (typeof fare !== "number" || fare <= 0) {
        return "Invalid"
    }
    let surCharge = fare * 20 / 100;
    let calTotal = fare + surCharge + 30;

    return calTotal;

}

const total = totalFine("Gorib tai ticket katinai");
console.log(total);

