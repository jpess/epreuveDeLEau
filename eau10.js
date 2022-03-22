/**
* Index Wanted
*/

/*
* Créez un programme qui affiche le premier index d’un élément recherché dans un tableau.
* Le tableau est constitué de tous les arguments sauf le dernier.
* L’élément recherché est le dernier argument. Afficher -1 si l’élément n’est pas trouvé.
*
* Exemples d’utilisation :
* $> python exo.py Ceci est le monde qui contient Charlie un homme sympa Charlie
* 6
*
* $> python exo.py test test test
* 0

* $> python exo.py test boom
* -1
*
* Afficher error et quitter le programme en cas de problèmes d’arguments.
*/

/********************
*     Functions     *
********************/

/*
* Return the index of element in the array
*/
function indexWanted(array, element){
  return array.indexOf(element);
}

/*
* Return the index of element in the array (without using indexOf())
*/
function indexWantedArtisanalVersion(array, element){
  for(let i=0; i<array.length; i++){
    if(array[i].localeCompare(element) == 0){
      return i;
    }
  }
  return -1;
}


/********************
*   Error Handling  *
********************/
const errorMessage = new Error("error");

function isMoreThanTwoArguments(args){
  return(args.length >= 2);
}

/*
* Return 1 if no errors has been detected, else return error message
*/
function checkArgumentForError(args){
  let testResult = 1;
  if(!isMoreThanTwoArguments(args)){
    //1.a if less than two argument has been passed
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
  //Isolate the last argument from the array of argument (and remove it from the array of argument)
  lastArgument = args.pop(); //thanks pop() for doing this job in one simple line :)
  //Get the index of the last passed argument in the array of elements made of the previous arguments
  result = indexWanted(args, lastArgument);
  //result = indexWantedArtisanalVersion(args, lastArgument);
}

/********************
*       Result      *
********************/
console.log(result);
