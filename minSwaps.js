let minimumFunctionSwaps = function(arrayInputParam) {
    let totalNumberOfSwaps = 0;
    let sortedArray = Array.from(arrayInputParam);
     sortedArray.sort();
    let rankArray = [];
    for(let index = 0; index < arrayInputParam.length; index++){
        rankArray.push(sortedArray.indexOf(arrayInputParam[index]) + 1);
    }
    console.log(rankArray);
    for(let innerIndex =0 ; innerIndex < rankArray.length; innerIndex++){
        if(rankArray[innerIndex] === innerIndex + 1) {
            
            continue;
        }
        //console.log("replacing ->" + innerIndex + " with->" + rankArray[innerIndex]-1);
        swapElements(rankArray, innerIndex+1, rankArray[innerIndex] );
        totalNumberOfSwaps++;
    }
    /*
    let totalNumberOfSwaps = 0;
    for(let index = 0; index < arrayInputParam.length; index++){
        if(arrayInputParam[index] === sortedArray[index]){
    
            continue;
        }
        
        let myCorrectIndex = arrayInputParam.indexOf(sortedArray[index]);
        swapElements(arrayInputParam, index, myCorrectIndex);
        totalNumberOfSwaps++;
    }*/
    return totalNumberOfSwaps;
}

    let swapElementsIndex = function(arrayInput, index1, index2){
        let tempElement = arrayInput[index1];
        arrayInput[index1] = arrayInput[index2];
        arrayInput[index2] = tempElement;
    }

    let swapElements = function(arrayInput, element1, element2){
        let index1 = arrayInput.indexOf(element1);
        let index2 = arrayInput.indexOf(element2);

        arrayInput[index1] = element2;
        arrayInput[index2] = element1;
    }

console.log(minimumFunctionSwaps([4,3,1,2]));