function checkMagazine(magazine, note) {
    let magazineMapObject = {};
    for(let index = 0; index < magazine.length; index++){
        let magazineobj = magazine[index];
        if(magazineMapObject[magazineobj]) {
            magazineMapObject[magazineobj].push(index);
        } else {
            magazineMapObject[magazineobj] = [index];
        }
    }
    let isContains  = true;
    for(let index = 0; index < note.length; index++){
        if(magazineMapObject[note[index]] && magazineMapObject[note[index]].length > 0) {
            magazineMapObject[note[index]].pop();
        } else {
            console.log("No");
            isContains = false;
            break;
        }
    }

    if(isContains) {
        console.log("Yes");
    }
}

checkMagazine([ 'give', 'me', 'one', 'grand', 'me','today', 'night' ], [ 'give', 'one', 'grand', 'today' ]);