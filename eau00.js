/**
* Combinaisons de 3 chiffres
*/

/*
* Créez un programme qui affiche toutes les différentes combinaisons possibles
* de trois chiffres dans l’ordre croissant, dans l’ordre croissant.
* La répétition est volontaire.
*/

/********************
*     Functions     *
********************/
/* Return all combination made of 3 digits (ascending, no duplicate digits in a combination, no permutation e.g, 012 021) */
function getAllCombinations(){
  const result = [];
  for(let i = 0; i<=9; i++){
    for(let j = 0; j<=9; j++){
      for(let k = 0; k<=9; k++){
        if(i !== j && j !== k && i !== k){
            let number = `${i}${j}${k}`;
            const allThreeCombArray = getAllThreeNumberPermutations(i, j, k);
            if(!result.includes(number)){
              let combinationExists = false;
              allThreeCombArray.forEach(combinaison => {
                if(result.includes(combinaison)){
                  combinationExists = true;
                }
              });
              if(!combinationExists){
                result.push(number);
              }
            }
        }
      }
    }
  }
  return result;
}

/* Return an array of all permutations made with the three arguments*/
function getAllThreeNumberPermutations(a,b,c){
  const result = [];
  result.push(`${a}${b}${c}`,`${a}${c}${b}`,`${b}${a}${c}`, `${b}${c}${a}`, `${c}${a}${b}`, `${c}${b}${a}`);
  return result;
}

/* Parse an array and display each item separated with a coma and a space, expect the last item*/
function displayArray(result){
  let stringResult = "";
  for(let i=0; i<result.length-1; i++){
    stringResult += `${result[i]}, `;
  }
  stringResult += result[result.length-1];
  console.log(stringResult);
}

/********************
*   Error Handling  *
********************/

/********************
*      Parsing      *
********************/
//const {argv} = require('process');

/********************
*        Main       *
********************/
let result = getAllCombinations();

/********************
*       Result      *
********************/
displayArray(result);
