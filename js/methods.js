/*METHODS ARE ACTIONS THAT CAN BE PERFOMED IN OBJECTS FOR E.G 
A CAR IS AN OBJECT.
A CAR CAN HAVE ALL THESE METHODS E.G stop,accelerate,turn left or right.
ANOTHER E.G IS A PERSON CAN HAVE THE METHODS:run walk kick,play,sleep,sit,type,look,listen,speak,hear etc
SYNTAX OF JAVASCRIPT METHOD

- A function is a subprogram designed to perform a particular task.
- Functions are executed when they are called. This is known as invoking a function.
- Values can be passed into functions and used within the function.
- Functions always return a value. In JavaScript, if no return value is specified, the function will return undefined.
*/

//THIS METHOD ADDS TWO NUMBERS
function addTwoNumbers(num1, num2){
	return num1 + num2;
}

console.log(addTwoNumbers(9876543210, 9876543210));

function addThreeNumbers(num1, num2, num3){
    return num1 + num2 + num3; 
}
console.log('I AM ADDING THREE NUMBERS');
console.log(addThreeNumbers(8, 5, 6))

let num1 = 1;
let num2 = 2;

addTwoNumbers(num1, num2);


    function returnLargestNumber(number1, number2){
    if (number1 < number2){
        return console.log(number2);
    }
    else{
         return console.log(number1);
    }
}
console.log(returnLargestNumber);

/*
function assingment(){
    
}


function returnSmallestNumber(number1, number2){
    if (number2 < number1){
        return console.log(number1);
    }
    else{
         return console.log(number2);
    }
}
console.log(returnSmallestNumber;)


//console.log(addTwoNumbers(num1, num2));










*/