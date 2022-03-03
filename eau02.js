/**
* Parametre a l'envers
*/

/*
* Créez un programme qui affiche ses arguments reçus à l’envers.
*
* Exemples d’utilisation :
* $> python exo.py “Suis” “Je” “Drôle”
* Drôle
* Je
* Suis
*
* $> python exo.py ha ho
* ho
* ha
*
* $> python exo.py “Bonjour 36”
* Bonjour 36
*
* Afficher error et quitter le programme en cas de problèmes d’arguments.
*/

/********************
*     Functions     *
********************/

/**
* Return an array with inverted arguments
*/
function invertArguments(arrayArguments){
  let result = [];
  for(let i=arrayArguments.length-1; i>=0; i--){
    result.push(arrayArguments[i]);
  }
  return result;
}

/**
* Display the inverted argunent results, one element by line
*/
function displayResult(result){
  result.forEach((item, i) => {
    console.log(item);
  });

}
/********************
*   Error Handling  *
********************/
const errorMissingArguments = new Error("Arguments are missing.");

function isArgumenMissing(args){
  return(args.length<=0);
}

/********************
*      Parsing      *
********************/
const args = process.argv.slice(2);
let result = [];

/********************
*        Main       *
********************/
if(isArgumenMissing(args)){
  console.log(errorMissingArguments.message);
  process.exit();
} else {
  result = invertArguments(args);
}

/********************
*       Result      *
********************/
displayResult(result);
