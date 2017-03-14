


var touches_pressees = [];



$('button').on('click', doRememberKey);

$('#calculate').on('click', doCalculate);

$('#clear').on('click', doErase);




/*
	Fin du programme.
	A partir d'ici, uniquement des fonctions
*/


	
function doRememberKey(){
	
	var cle = $(this).html();
	touches_pressees.push( cle );

	console.log( touches_pressees );
	
}




function doCalculate(){

	var val1 = 0;
	var val2 = 0;
	var action = null;

	// Extraction des chiffres et de l'opération à effectuer

	for( key in touches_pressees ) {
		cle = touches_pressees[key];
		
		if( cle == parseInt(cle) ) {
			if( action )
				val2 += parseInt(cle);
				else
				val1 += parseInt(cle);
		}
		else {
			if( cle != "=" )
			{
				action = cle;
			}
		}
	}

	console.log( val1 + "/" + action + "/" + val2 );


	// Quelques tests de contrôle

	if( ! val1 || ! val2 || ! action ) {
		doPrint( error() );
	}


	// Exécution de l'opération

	switch( action ) {
		case '/': doPrint( divide(val1, val2) ); break; 	
		case 'X': doPrint( multiply(val1, val2) ); break; 	
		case '-': doPrint( substract(val1, val2) ); break; 	
		case '+': doPrint( add(val1, val2) ); break;
		default : doPrint( error() );
	}
	
	// réinitialisation des touches enregistrées
	
	touches_pressees = [];
}




function doErase() {
	doPrint( "" );
}


function error() {
	return "Erreur de saisie !";
}


function  doPrint( result ) {
	$('input[name=result]').val( result );
}






// Les fonctions de calcul

function divide( a, b ) {
	return a / b;
}


function multiply( a, b ) {
	return a * b;
}


function substract( a, b ) {
	return a - b ;
}


function add( a, b ) {
	return a + b ;
}

