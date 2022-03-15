/**
* Prochain nombre premier
*/

/*
* Créez un programme qui affiche le premier nombre premier supérieur au nombre donné en argument.
*
* Exemples d’utilisation :
* $> python exo.py 14
* 17
* $>
*
* Afficher -1 si le paramètre est négatif ou mauvais.
*
* EDIT (Ju): afficher un message d'erreur explicite si l'erreur est connue, ou bien -1 par default.
*/

/********************
*     Functions     *
********************/

/*
* Return true if argument is prime number, false otherwise
*/
function isPrimeNumber(number){
  //0 and 1 are not prime numbers, 2 is the first prime number
  if(number === 0 || number === 1){
    return false;
  } else if(number === 2){
    return true;
  } else {
    //Iterate from 2 to the number-1 and test if number division remainder is 0
    for(let i=2; i<number; i++){
      if(number % i === 0){
        //We found our number can be divided by another one, not prime
        return false;
      }
    }
    //We did not find a number to divide ours, that's a prime number !
    return true;
  }
}

/********************
*   Error Handling  *
********************/
const errorNegative = new Error("Argument must be a positive Integer.");
const errorNotAnInteger = new Error("Argument is not an Integer.");
const errorOnlyOneArguments = new Error("Enter one and only one Interger.");
const error = new Error("-1");

function isArgumentNegative(argument){
  return(argument<0);
}

function isArgumentNotAnInteger(argument){
  return(argument % 1 !== 0);
}

function isThereOneAndOnlyOneArgument(args){
  return(args.length == 1);
}

/*
* Return 1 if no errors has been detected, else return error message
*/
function checkArgumentForError(args){
  let testResult = 1;
  //1. Retrieve argument and test if
  if(!isThereOneAndOnlyOneArgument(args)){
    //1.a if none or more than one argument has been passed
    testResult = errorOnlyOneArguments;
  } else if(isArgumentNotAnInteger(args)){
    //1.b. if argument is not Integer
    testResult = errorNotAnInteger;
  } else if(isArgumentNegative(args)){
    //1.c if argument is negative
    testResult = errorNegative;
  }
  return testResult;
}

/********************
*      Parsing      *
********************/
let args = process.argv.slice(2);
let checkResult = checkArgumentForError(args);
let result = -1;

/********************
*        Main       *
********************/
//1. Argument test
if(checkResult !== 1){
  result = checkResult.message;
} else {
  //2. Iterate from argument until it is a prime number
  args++;
  while(!isPrimeNumber(args)){
    args++;
  }
  result = args;
}

/********************
*       Result      *
********************/
console.log(result);
