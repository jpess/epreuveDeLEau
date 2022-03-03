/**
* Suite de Fibonacci
*/

/*
* Créez un programme qui affiche le N-ème élément de la célèbre suite de Fibonacci. (0, 1, 1, 2) étant le début de la suite et le premier élément étant à l’index 0.
*
* Exemples d’utilisation :
* $> python exo.py 3
* 2
* $>
*
* Afficher -1 si le paramètre est négatif ou mauvais.
*/

/********************
*     Functions     *
********************/

/**
* Recursive function that return the Fibonacci element at the index passed in argument
*/
function getFibonacciElementByIndex(index){
  if(index <= 0){
    return 0;
  } else if (index == 1) {
    return 1;
  } else {
    return getFibonacciElementByIndex(index - 1) + getFibonacciElementByIndex(index - 2);
  }
}

/********************
*   Error Handling  *
********************/
const errorNegative = new Error("Argument must be a positive Integer.");
const errorNotAnInteger = new Error("Argument is not an Integer.");
const errorWrongArguments = new Error("Wrong arguments.");
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

/********************
*      Parsing      *
********************/
const args = process.argv.slice(2);

/********************
*        Main       *
********************/
let element = -1;
if(isThereOneAndOnlyOneArgument(args)){
  const indexElement = args[0];
  if(!isArgumentNotAnInteger(indexElement)){
      if(!isArgumentNegative(indexElement)){
        element = getFibonacciElementByIndex(indexElement);
      } else {
        console.log(errorNegative.message);
      }
  } else {
    console.log(errorNotAnInteger.message);
  }
} else {
  console.log(errorWrongArguments.message);
}

/********************
*       Result      *
********************/
console.log(element);
