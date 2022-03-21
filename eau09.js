/**
* Entre min et max
*/

/*
* Créez un programme qui affiche toutes les valeurs comprises entre deux nombres
* dans l’ordre croissant. Min inclus, max exclus
*
* Exemples d’utilisation :
* $> python exo.py 20 25
* 20 21 22 23 24
*
* $> python exo.py 25 20
* 20 21 22 23 24
*
* $> python exo.py hello
* error
*
* Afficher error et quitter le programme en cas de problèmes d’arguments.
*/

/********************
*     Functions     *
********************/

/*
* Return an array of numbers between min and max (min included)
*/
function innerValues(min, max){
    // Loop from min to max - 1 and return an array of all numbers in between
    const result = [];
    for(let i=min; i<max; i++){
      result.push(i);
    }
    return result;
}

/*
* Return an array with min and max from both values in params
*/
function minAndMax(value1, value2){
  if(value1<value2){
    return [value1, value2];
  } else {
    return [value2, value1];
  }
}

/********************
*   Error Handling  *
********************/
const errorMessage = new Error("error");

function isOnlyTwoArguments(args){
  return(args.length == 2);
}

function isOnlyNumbers(args){
  const regExp = new RegExp("^[0-9]+$");
  return(regExp.test(args[0]));
}

/*
* Return 1 if no errors has been detected, else return error message
*/
function checkArgumentForError(args){
  let testResult = 1;
  if(!isOnlyTwoArguments(args)){
    //1.a if less or more than two argument has been passed
    testResult = errorMessage;
  } else if(!isOnlyNumbers(args[0]) || !isOnlyNumbers(args[1])){
    //1.b if not a valid String (contains only numbers)
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
  let minAndMaxArray = minAndMax(args[0], args[1]);
  result = innerValues(minAndMaxArray[0], minAndMaxArray[1]).join(" ");
}

/********************
*       Result      *
********************/
console.log(result);
