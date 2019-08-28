var worldCityJson = require('./worldCitiesJson_test.json');
//console.log(worldCityJson);
var cityNameLetterDict = {};

worldCityJson.forEach(element => {
    if(cityNameLetterDict[element.name.charAt(0).toUpperCase()]) {
        cityNameLetterDict[element.name.charAt(0).toUpperCase()].push(element.name);    
    } else {
        cityNameLetterDict[element.name.charAt(0).toUpperCase()] = [element.name];
    }    
});

console.log(cityNameLetterDict);

 function nextMove(opponentsCityParam)  {
    let opponentsCity = opponentsCityParam.toUpperCase();
    let possibleOptions = cityNameLetterDict[opponentsCity.charAt(opponentsCity.length - 1)];
    let myWinningWord = "";
    for(let index =0 ; index < possibleOptions.length; index++) {
        let selectedWord = possibleOptions[index];
        let nextMoveChar = selectedWord.charAt(selectedWord.length - 1);
        if(nextMoveChar !== opponentsCity.charAt(opponentsCity.length - 1)) {
            if(cityNameLetterDict[nextMoveChar] == null) {
                myWinningWord = selectedWord;
                break;
            }
        } else {
            if(cityNameLetterDict[nextMoveChar]  && cityNameLetterDict[nextMoveChar].length == 1 ) {
                myWinningWord = selectedWord;
                break;
            }
        }
    }
    return myWinningWord;
}

function findNextBestLetter(inputLetterParam) {
    for(let index = 0; index < cityNameLetterDict[inputLetterParam].length; index ++) {
        console.log(cityNameLetterDict[inputLetterParam][index]);
        
    }
}



console.log("answer is =>" + nextMove('Red'));