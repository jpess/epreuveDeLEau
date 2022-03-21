/**
* Majuscule
*/

/*
* Créez un programme qui met en majuscule la première lettre de chaque mot
* d’une chaîne de caractères. Les autres lettres devront être en minuscules.
* Les mots ne sont délimités que par un espace, une tabulation ou un retour à la ligne.
*
* Exemples d’utilisation :
* $> python exo.py “bonjour mathilde, comment vas-tu ?!”
* Bonjour Mathilde, Comment Vas-tu ?!
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
* Return a String with every words' first letter capitalized.
*/
function capitalizedWordsFirstLetter(sentence){
    // Lower case all charactre from String sentence
    // Split sentence to words, separated by space, tab or line break
    // For each words, capitalize the first character
    const separators = ['\\s', '\\t', '\\n'];
    let words = sentence.toLowerCase().split(new RegExp(separators.join('|'), 'g'));
    for(let i=0; i<words.length; i++){
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
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
  result = capitalizedWordsFirstLetter(args[0]);
}

/********************
*       Result      *
********************/
console.log(result);
