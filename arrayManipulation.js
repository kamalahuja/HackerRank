function arrayManipulation(arrayLength, operationArray) {
    let arrayVar = [];
    for(var index = 0; index <= arrayLength; index++){
        arrayVar.push(0);
    }
    operationArray.forEach(element => {
        for(let innerIndex = element[0]; innerIndex <= element[1]; innerIndex++){
            arrayVar[innerIndex] = arrayVar[innerIndex] + element[2];
        }
    });

    return Math.max(...arrayVar);
}

console.log(arrayManipulation(10, [ [ 2, 6, 8 ], [ 3, 5, 7 ], [ 1, 8, 1 ], [ 5, 9, 15 ] ]));