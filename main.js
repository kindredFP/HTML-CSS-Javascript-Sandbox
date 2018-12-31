
function firstFunction (name){
	return name;
}

function addElement (myArray,myVariable){
	myArray.push(myVariable);
	return myArray;
}

function removeElement (myArray){
	myArray.pop();
	return myArray;
}

let firstName = 'Francis';

//Print the function
console.log(firstFunction(firstName));