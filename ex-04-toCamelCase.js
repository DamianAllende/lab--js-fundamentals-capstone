
/**
 * toCamelCase()
 *
 * Write a `toCamelCase` function that takes a multi word string as an argument
 * and returns a string that follows camel case convention
 *
 */

 function quitar (str) {
    let  cadena = ""
    let  arrayString = str.split(" ");
    for (let  i = 0; i < arrayString.length; i++) {
        if (arrayString[i] != "") {
            cadena += arrayString[i]
        }
    }
    return cadena;
}


function minusculas(frase){
	let mini = frase.toLowerCase();
	return mini 
}



 function toCamelCase(param){

	let stringOne = minusculas(param)
	console.log(stringOne)
 	stringTwo = stringOne.split("")
 	console.log(stringTwo)


 	
	//console.log(stringOne)
 	for(let i = 1; i < stringTwo.length; i++){
 		
 		if(stringTwo[i] === " " ){
 			stringTwo[i+1] = stringTwo[i+1].toUpperCase()
 		}
 	}
	//return 
	let unir = stringTwo.join("")

	return quitar(unir)

	


	 
 }








/*

function toCamelCase(param){
	let stringOne = param.split()
	for(let i = 0; i < param.length; i++){
		stringOne[i] = stringOne[i].toLowerCase()
		if(1>0){
			stringOne[i][0] = stringOne[i][0].toUpperCase()
		}
	}

	return stringOne.join("")
}


/*


if (stringOne[i] === " ") {

 			up = stringOne[i+1].toUpperCase()

 			console.log(up)

 			console.log(stringOne[i+1] = up)

 		}
*/

//~+~+~+~+~+~+~+~Don't Touch~+~+~++~+~+~+~+~+~+~+
console.log("[1] Should return 'fetchRecords'");
console.assert(toCamelCase("fetch records") === 'fetchRecords')
console.log("====================================");
console.log();

console.log("[2] Should return 'createTableRow'");
console.assert(  toCamelCase("create table row") === 'createTableRow'  )
console.log("====================================");
console.log();

console.log("[3] Should return 'convertToHtml'");
console.assert(  toCamelCase("convert to HTML") === 'convertToHtml'  )
console.log("====================================");
console.log();

console.log("[4] Should return 'getUserAccountId'");
console.assert(  toCamelCase("get user account ID") === 'getUserAccountId'  )
console.log("====================================");
