/**
* Différence minimum absolue
*/

/*
* Créez un programme qui affiche la différence minimum absolue entre deux éléments d’un tableau constitué uniquement de nombres. Nombres négatifs acceptés.
*
* Exemples d’utilisation :
* $> python exo.py 5 1 19 21
* 2
*
* $> python exo.py 20 5 1 19 21
* 1
*
* $> python exo.py -8 -6 4
* 2
*
* Afficher error et quitter le programme en cas de problèmes d’arguments.
*/

/********************
*     Functions     *
********************/

/*
* Return the absolute minimum difference between two array numbers
*/
function absMinDiff(arrayOfNumbers){
  let absMinDiffResult;
  //Sort the array, so we loop on array only one time
  arrayOfNumbers.sort();
  //Browse the array and compare i and i+1
  for(let i=0; i<arrayOfNumbers.length-1; i++){
    let absDiff = Math.abs(arrayOfNumbers[i] - arrayOfNumbers[i+1]);
    //If first iteration, store the difference in result
    if(typeof absMinDiffResult === 'undefined'){
      absMinDiffResult = absDiff;
    } else {
      //If the difference is lower than the previous one, store it as result
      if(absDiff < absMinDiffResult){
        absMinDiffResult = absDiff;
      }
    }
  }
  //Return result at the end of array loop
  return absMinDiffResult;
}

/********************
*   Error Handling  *
********************/
const errorMessage = new Error("error");

function isMoreThanTwoArguments(args){
  return(args.length >= 2);
}

function isOnlyNumbers(args){
  const regExp = new RegExp("^[-]?[0-9]+$");
  return(regExp.test(args[0]));
}

/*
* Return 1 if no errors has been detected, else return error message
*/
function checkArgumentForError(args){
  let testResult = 1;
  if(!isMoreThanTwoArguments(args)){
    //1.a if less than two argument has been passed
    testResult = errorMessage;
  } else if(!isOnlyNumbers(args)){
    //1.b if array not contains numbers only
    testResult = errorMessage;
  }
  return testResult;
}

/********************
*      Parsing      *
********************/
let args = process.argv.slice(2);
let checkResult = checkArgumentForError(args);
let result = "error";

/********************
*        Main       *
********************/
//1. Arguments test
if(checkResult !== 1){
  result = checkResult.message;
} else {
  result = absMinDiff(args);
}

/********************
*       Result      *
********************/
console.log(result);
