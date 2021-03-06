var worldCityJson = require('./worldCitiesJson_test.json');
//console.log(worldCityJson);
var cityNameLetterDict = {};
var losingOptions = [];
var usedWords = [];
var level = 0;

worldCityJson.forEach(element => {
    if(cityNameLetterDict[element.name.charAt(0).toUpperCase()]) {
        cityNameLetterDict[element.name.charAt(0).toUpperCase()].push(element.name.toUpperCase());    
    } else {
        cityNameLetterDict[element.name.charAt(0).toUpperCase()] = [element.name.toUpperCase()];
    }    
});

//console.log(cityNameLetterDict);

    function nextMove(opponentsCityParam) {
        let opponentsCity = opponentsCityParam.toUpperCase();
        let possibleOptions = cityNameLetterDict[opponentsCity.charAt(opponentsCity.length - 1)];
        //console.log(opponentsCity.charAt(opponentsCity.length - 1));
        
        if(possibleOptions) {
            for (let index = 0; index < possibleOptions.length; index++) {
                //  console.log(possibleOptions[index]);
                  usedWords.push(possibleOptions[index]);
                 let isWinningWord = depthFirstSearch(possibleOptions[index]);
                 if(isWinningWord) {
                     return possibleOptions[index];
                 }
                  usedWords.pop();
              }
              
        }
        return "All Loosing options";
        
    }

    function depthFirstSearch(vertexParam) {
        let isWinningWord = false;
        level++;
        let nextWordList = cityNameLetterDict[vertexParam.charAt(vertexParam.length - 1)];
        if (nextWordList) {
            for (let index = 0; index < nextWordList.length; index++) {
                let currentWord = nextWordList[index];
                if (!usedWords.includes(currentWord)) {
                   // console.log(currentWord);
                    //console.log("level ->" + level);
                    usedWords.push(currentWord);
                     isWinningWord = depthFirstSearch(currentWord);
                     usedWords.pop();
                    level--;
                    //console.log("Is winning word =>" + currentWord + " :  " + isWinningWord + "   level->" + level);
                    
                    if(level % 2 == 0 && isWinningWord ){
                                    return true;
                    } else if(level % 2 == 1 && !isWinningWord) {
                            return false;
                    }
                }
            }
        } 
        if(level % 2 == 0){
            return false;
        }
        return true;
        

    }






console.log("answer is =>" + nextMove('cah'));