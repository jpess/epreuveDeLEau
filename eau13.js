/**
* Tri par sélection
*/

/*
* Créez un programme qui trie une liste de nombres.
* Votre programme devra implémenter l’algorithme du tri par sélection.
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
* Return a sorted array using selection sort
*/
function selectionSort(array) {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (Number(array[j]) < Number(array[minIndex])) {
                minIndex = j;
            }
        }
        if (minIndex != i) {
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
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

function isOnlyNumbers(args) {
    const regExp = new RegExp("^[-]?[0-9]+$");
    return (regExp.test(args[0]));
}

/*
* Return 1 if no errors has been detected, else return error message
*/
function checkArgumentForError(args) {
    let testResult = 1;
    if (!isMoreThanTwoArguments(args)) {
        //1.a if less than two argument has been passed
        testResult = errorMessage;
    } else if (!isOnlyNumbers(args)) {
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
if (checkResult !== 1) {
    result = checkResult.message;
} else {
    result = selectionSort(args).join(" ");
}

/********************
*       Result      *
********************/
console.log(result);