
let findMinimumSwaps = function(arr) {
    let inputArrayParam = arr;
    var copyArray = [];
    var minimumFunctionSwaps = 0;
    for(let index = 0 ; index < inputArrayParam.length ; index++) {
        if(copyArray.indexOf(inputArrayParam[inputArrayParam[index] - 1]) > -1 ) {
            let numberOfELementsInCycle = calculateNodesInCycle(inputArrayParam[index], inputArrayParam);
            minimumFunctionSwaps = minimumFunctionSwaps + numberOfELementsInCycle - 1;
        } else {
            copyArray.push(inputArrayParam[index]);
        }
    }
    return minimumFunctionSwaps;
}

var calculateNodesInCycle = function(intNodeValue, inputArrayParmN)  {
    let totalNodes = 1;
    let testInputParam = intNodeValue;
    while(inputArrayParmN[testInputParam -1 ] !== intNodeValue ) {
        totalNodes++;
        testInputParam = inputArrayParmN[testInputParam -1 ];
    }
    return totalNodes;
}
let testArray = [7,1,3,2,4,5,6];
console.log(findMinimumSwaps(testArray));