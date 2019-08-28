function minimumBribes(q) {
    
    numberOfSwaps = 0;

   for (var index = 0; index < q.length; index++){
       var difference = q[index] - (index + 1);
       //console.log("differnece at index :" + index + " is ->" + difference);
       if (difference > 2) {
          // console.log("differnece at index :" + index + " is ->" + difference);
           console.log("Too chaotic");
           return;
       } 
   }
   var sortedArray = mergeSort(q);
   
   console.log(numberOfSwaps);
}

function mergeSort(inputArrayParam) {

   if (inputArrayParam.length <= 1) {
       return inputArrayParam;
   }
   var divisionPoint = inputArrayParam.length / 2;
   var sortedArray1 = mergeSort(inputArrayParam.slice(0, divisionPoint));
   var sortedArray2 = mergeSort(inputArrayParam.slice(divisionPoint));
   return mergeFunction(sortedArray1, sortedArray2);

}

function mergeFunction(array1Param, array2Param) {
    console.log("merging arrays->");
    console.log(array1Param);
    console.log(array2Param);
   var sortedArray = [];
   var indexParam1 = 0;
   var indexParam2 = 0;
   
   while (indexParam1 < array1Param.length && indexParam2 < array2Param.length) {
       if (array1Param[indexParam1] < array2Param[indexParam2]) {
           sortedArray.push(array1Param[indexParam1]);
           indexParam1++;
       } else {
           sortedArray.push(array2Param[indexParam2]);
           indexParam2++;
           numberOfSwaps = numberOfSwaps + (array1Param.length - indexParam1);
       }
   
   }
   
   if (indexParam1 < array1Param.length) {
       for (let innerIndex = indexParam1; innerIndex < array1Param.length; innerIndex++) {
           sortedArray.push(array1Param[innerIndex]);
           
       }
   }
   if (indexParam2 < array2Param.length ) {
       for (let innerIndex = indexParam2; innerIndex < array2Param.length; innerIndex++) {
           sortedArray.push(array2Param[innerIndex]);
           
       }
   }
   console.log("returning sorted array->");
   console.log(sortedArray);
   console.log("total swaps ->"+numberOfSwaps);
   return sortedArray;
}


minimumBribes([1,2,5,3,7,8,6,4]);