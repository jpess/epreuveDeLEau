/**
* Tri à bulle
*/

/*
* Créez un programme qui trie une liste de nombres.
* Votre programme devra implémenter l’algorithme du tri à bulle.
*
* Vous utiliserez une fonction de cette forme (selon votre langage) :
* my_bubble_sort(array) {
* 	# votre algorithme
* 	return (new_array)
* }
*
* Exemples d’utilisation :
* $> python exo.py 6 5 4 3 2 1
* 1 2 3 4 5 6
*
* $> python exo.py test test test
* error
*
* Afficher error et quitter le programme en cas de problèmes d’arguments.
*
* Wikipedia vous présentera une belle description de cet algorithme de tri.
*/

/********************
*     Functions     *
********************/

/*
* Return a sorted array using bubble sort
*/
function bublleSort(array){
  let new_array = array;
  for(let i=(new_array.length)-1; i>0; i--){
    let sorted = true;
    for(let j=0; j<i; j++){
      //if((new_array[j+1] - new_array[j]) < 0){
      if(Number(new_array[j+1]) < Number(new_array[j])){
        [new_array[j+1], new_array[j]] = [new_array[j], new_array[j+1]];
        sorted = false;
      }
    }
    if(sorted){
      return new_array;
    }
  }
  return new_array;
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
  result = bublleSort(args).join(" ");
}

/********************
*       Result      *
********************/
console.log(result);

// QUESTION POUR LA CORRECTION //
// Quel est la facon la plus propre de transformer les argmuents en Nombres?
// (dans le cas d'une comparaison x < y, 11 est plus petit que 2 si String (par default))
