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

/********************
*   Error Handling  *
********************/

/********************
*      Parsing      *
********************/
const { argv } = process.argv;

/********************
*        Main       *
********************/

/********************
*       Result      *
********************/
console.log(argv);
