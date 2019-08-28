// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
    let totalNumberOfSwaps = 0;
    for (let i = 0; i < arr.length; i++){
        totalNumberOfSwaps = totalNumberOfSwaps + performSwap(i, arr);
    }
    return totalNumberOfSwaps;

}
function performSwap(index, arrParam) {
    let totalSwaps = 0;
    while (arrParam[index] !== (index + 1)) {
        let temp = arrParam[arrParam[index] - 1];
        arrParam[arrParam[index] - 1] = arrParam[index];
        arrParam[index] = temp;
        console.log(arrParam);
        totalSwaps++;
    }
    return totalSwaps;
}

console.log(minimumSwaps([4,3,1,2]));