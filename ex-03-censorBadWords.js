/**
 * censorBadWords()
 *
 * Write a function called censorBadWords()that returns
 * It should remove bad words in its input sentence and replace them with ****.
 *
 *
**/
/*
function censorBadWords(badlist, param){
	let stringOne = param.split(" ")
	//console.log(stringOne)

	for(let i = 0; i < stringOne.length; i++){

	
			censor(stringOne[i], badlist)

			

			 
			
				
	}

	console.log(stringOne)

	



	

}

function censor(word, list){
	

	for(let j = 0; j < list.length; j++){
		if (word === list[j]) {
			let word = "***"
		}
				
	}

	console.log(word)

}

*/

/*
function censorBadWords (tocensor){
	let tocensor_array = tocensor.split(" ")
	for(let x = 0; x < tocensor_array.length; x++ ){

		for( let y = 0; y < badWordsList.length; y++){
			if(tocensor_array[x] === badWordsList[y]){
				tocensor_array[x] = "****"
			}
		}

	}



	return tocensor_array.join(" ")
}

*/

function censorBadWords (list, tocensor){
	let tocensor_array = tocensor.split(" ")
	for(let x = 0; x < tocensor_array.length; x++ ){

		for( let y = 0; y < list.length; y++){
			if(tocensor_array[x] === list[y]){
				tocensor_array[x] = "****"
			}
		}
	}

	return tocensor_array.join(" ")
}










var badWordsList = ['heck', 'darn', 'dang', 'crappy', 'crud', 'crap', 'freaking']
var badWords2 = ['idiot',  'crap', 'freaking']

//console.log(censorBadWords(badWordsList, 'mom get the heck in here and bring me a darn sandwich'))



var censored1 = censorBadWords(badWordsList, "mom get the heck in here and bring me a darn sandwich")
var censored2 = censorBadWords(badWordsList, "here son, your crappy sandwich is on the dang plate")
var censored3 = censorBadWords(badWords2, "your freaking idiot dog left crap on my floor")

console.log("[1] Expected: 'mom get the **** in here and bring me a **** sandwich'");
console.assert( censored1 === "mom get the **** in here and bring me a **** sandwich")
console.log("=====================================================================");
console.log();

console.log("[2] Expected: 'here son, your **** sandwich is on the **** plate'");
console.assert( censored2 === "here son, your **** sandwich is on the **** plate")
console.log("=====================================================================");
console.log();

console.log("[3] Expected: 'your **** **** dog left **** on my floor'");
console.assert( censored3 === "your **** **** dog left **** on my floor")
console.log("=====================================================================");
