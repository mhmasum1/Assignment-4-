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
const out = isSame({ data: [2, 5, 6] }, [2, 5, 6]);
console.log(out);
