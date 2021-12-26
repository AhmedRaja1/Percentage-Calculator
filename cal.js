function percentage_1() {

	// Method returns the element of percent id
	let percent = document.getElementById("percent").value;
	
	// Method returns the element of num id
	let num = document.getElementById("num").value;

	let answer1 = document.getElementById("value1").value = 
	(num / 100) * percent;
}


function percentage_2() {

	// Method returns the element of num1 id
	let num1 = document.getElementById("num1").value;
	
	// Method returns the elements of num2 id
	let num2 = document.getElementById("num2").value;

	let answer2 = document.getElementById("value2")
		.value = (num1 * 100) / num2 + "%";
}


function percentageDifference(){

	// Method returns the element of x1 id
	let x1 = document.getElementById("x1").value;

	// Method returns the element of x2 id
	let x2 = document.getElementById("x2").value;
	
	//returns the formula element
	let answer3 = document.getElementById("value3").value = ((x2-x1)/x1) * 100 + "%";


value3


	
}