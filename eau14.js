/**
* Par ordre Ascii
*/

/*
* Créez un programme qui trie les éléments donnés en argument par ordre ASCII.
* 
* Exemples d’utilisation :
* $> python exo.py Alfred Momo Gilbert
* Alfred Gilbert Momo
* 
* $> python exo.py A Z E R T Y
* A E R T Y Z
* 
* Afficher error et quitter le programme en cas de problèmes d’arguments.
*/

/********************
*     Functions     *
********************/

/*
* Return a sorted array using ASCII sort
*/
function sortArray(array) {
    for (let i = (array.length) - 1; i > 0; i--) {
        let sorted = true;
        for (let j = 0; j < i; j++) {
            if (array[j + 1].charCodeAt(0) < array[j].charCodeAt(0)) {
                [array[j + 1], array[j]] = [array[j], array[j + 1]];
                sorted = false;
            }
        }
        if (sorted) {
            return array;
        }
    }
    return array;
}

/********************
*   Error Handling  *
********************/
const errorMessage = new Error("error");

function isMoreThanTwoArguments(args) {
    return (args.length >= 2);
}

/*
* Return 1 if no errors has been detected, else return error message
*/
function checkArgumentForError(args) {
    let testResult = 1;
    if (!isMoreThanTwoArguments(args)) {
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
if (checkResult !== 1) {
    result = checkResult.message;
} else {
    result = sortArray(args).join(" ");
    //result = (args).sort().join(" ");
}

/********************
*       Result      *
********************/
console.log(result);

//Note: l'utilisation de array.sort() trie deja les elements selon leur valeurs ASCII