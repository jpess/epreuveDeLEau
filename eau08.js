/**
* Chiffres only
*/

/*
* Créez un programme qui détermine si une chaîne de caractères ne contient que des chiffres.
*
* Exemples d’utilisation :
* $> python exo.py “4445353”
* true
*
* $> python exo.py 42
* true
*
* $> python exo.py “Bonjour 36”
* false
*
* Afficher error et quitter le programme en cas de problèmes d’arguments.
*/

/********************
*     Functions     *
********************/

/*
* Return true is a String contains only numbers
*/
function isOnlyNumbers(sentence){
  const regExp = new RegExp("^[0-9]+$");
  return regExp.test(sentence);
}

/********************
*   Error Handling  *
********************/
const errorMessage = new Error("error");

function isOnlyOneArguments(args){
  return(args.length == 1);
}

/*
* Return 1 if no errors has been detected, else return error message
*/
function checkArgumentForError(args){
  let testResult = 1;
  if(!isOnlyOneArguments(args)){
    //1.a if none or more than one argument has been passed
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
  //2. Check if second argument is included in the first argument
  result = isOnlyNumbers(args[0]);
}

/********************
*       Result      *
********************/
console.log(result);
