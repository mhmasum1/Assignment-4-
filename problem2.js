function onlyCharacter(str) {
    // You have to write your code here
    if (typeof str !== "string") {
        return "Invalid"
    }
    let makeWithOutSpaces = str.split(" ").join("");
    let UpperCaseString = makeWithOutSpaces.toUpperCase();
    return UpperCaseString;


}


const strn = onlyCharacter(true);
console.log(strn)