/**
* String dans string
*/

/*
* Créez un programme qui détermine si une chaîne de caractère se trouve dans une autre.
*
* Exemples d’utilisation :
* $> python exo.py bonjour jour
* true
*
* $> python exo.py bonjour joure
* false
*
* $> python exo.py 42
* error
*
* Afficher error et quitter le programme en cas de problèmes d’arguments.
* EDIT (Ju): afficher un message d'erreur explicite si l'erreur est connue, ou bien error par default.
*/

/********************
*     Functions     *
********************/

/*
* Return true if a string is contained into another string, false otherwise
*/
function isStringInString(haystack, needle){
    // First approach would be to parse haystack and find the index of first needle character
    // From there, increment on needle and haystack until needle size is reached and comparing the two characters at each iteration.
    // At the end, if no differences found, return yes. Otherwise pursuie the parsing of haystack for another index of the first needle character
    // If haystack size reached, return false

    // Second aproach would be to use an existing method
    // ex: haystack.includes(needle);
    return haystack.includes(needle);
}

/********************
*   Error Handling  *
********************/
const errorOnlyTwoArguments = new Error("Enter two String arguments.");

function isOnlyTwoArguments(args){
  return(args.length == 2);
}

/*
* Return 1 if no errors has been detected, else return error message
*/
function checkArgumentForError(args){
  let testResult = 1;
  if(!isOnlyTwoArguments(args)){
    //1.a if none or more than two argument has been passed
    testResult = errorOnlyTwoArguments;
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
  result = isStringInString(args[0], args[1]);
}

/********************
*       Result      *
********************/
console.log(result);
