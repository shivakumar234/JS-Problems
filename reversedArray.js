function getReversedArray(arr) {
    if (!Array.isArray(arr)) {
        console.log("Input is not a valid array.");
        return [];
    }

    const reversedArray = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }

    return reversedArray;
}


const original = [10, 20, 30, 40, 50];
const reversed = getReversedArray(original);

console.log("Original Array:", original);
console.log("Reversed Array:", reversed);
