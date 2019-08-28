function arrayManipulation(n, queries) {
    let arrayVar = [];
    let maxValue = 0;
    for(let index = 1; index <= n; index++) {
            arrayVar.push(0);
    }

    queries.forEach(element => {
        let startIndex = element[0] -1;
        let endIndex = element[1] - 1;
        let incrementValue = element[2];
        arrayVar[startIndex] = arrayVar[startIndex] + incrementValue;
        if(endIndex < (n -1)) {
            arrayVar[endIndex + 1] = arrayVar[endIndex + 1] - incrementValue;
        }
    });
    let incrementalSum = 0;
    arrayVar.forEach(arrayVarElement => {
            incrementalSum = incrementalSum + arrayVarElement;
            if(maxValue < incrementalSum) {
                maxValue = incrementalSum;
            }
    });
    return maxValue;
}

console.log(arrayManipulation(4, [ [ 2, 3, 603 ], [ 1, 1, 286 ], [ 4, 4, 882 ] ]));