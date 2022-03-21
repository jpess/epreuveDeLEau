/**
* Majuscule sur deux
*/

/*
* Créez un programme qui met en majuscule une lettre sur deux d’une chaîne de caractères. Seule les lettres (A-Z, a-z) sont prises en compte.
*
* Exemples d’utilisation :
* $> python exo.py “Hello world !”
* HeLlO wOrLd !
*
* $> python exo.py 42
* error
*
* Afficher error et quitter le programme en cas de problèmes d’arguments.
*/

/********************
*     Functions     *
********************/

/*
* Return a String with capitalized every other letters.
*/
function captializedEveryOtherLetters(sentence){
    // First approach would be to parse the String sentence and on every even increment (e.g., 0,2,4,etc.)
    // check if it is a letter (a-z A-Z) and capitalize it.
    // We start to lower all letters
    let lowerCaseSentence = sentence.toLowerCase().split("");
    let isLastLetterBeenCapitalized = false;
    for(let i=0; i<lowerCaseSentence.length; i++){
      const regExp = new RegExp("^[a-zA-Z]");
      if(regExp.test(lowerCaseSentence[i])){
        if(!isLastLetterBeenCapitalized){
          lowerCaseSentence[i] = lowerCaseSentence[i].toUpperCase();
          isLastLetterBeenCapitalized = true;
        } else {
          isLastLetterBeenCapitalized = false;
        }
      }
    }
    return lowerCaseSentence.join("");
}

/********************
*   Error Handling  *
********************/
const errorMessage = new Error("error");

function isOnlyOneArguments(args){
  return(args.length == 1);
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
  if(!isOnlyOneArguments(args)){
    //1.a if none or more than one argument has been passed
    testResult = errorMessage;
  } else if(isOnlyNumbers(args)){
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
  //2. Check if second argument is included in the first argument
  result = captializedEveryOtherLetters(args[0]);
}

/********************
*       Result      *
********************/
console.log(result);
