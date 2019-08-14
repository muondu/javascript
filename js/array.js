
let pupils = ['LEWIS', 'MELLISA','BARAKA','ANTONIA','JAYDEN','FAITH','JEREMY','NATASHA','MEGH','SHALI']; 


console.log(pupils);

// REMOVES AN ITEM(ON THE FIRST STATEMENT:THE NUMBER OF THE ITEM YOU WANT TO REMOVE) (SECOND STATEMENT:HOW MANY ITEMS YOU WANT TO REMOVE)
pupils.splice(2,1);
console.log('Splice example');
console.log(pupils);

//REMOVES THE FIRST ITEM FROM THE ARRAY
pupils.shift();
console.log('Shift example');
console.log(pupils);

//ADDS AN ITEM AT THE BEGINGING OF AN  ARRAY
pupils.unshift('LEWIS');
console.log('Unshift example');
console.log(pupils);


//REMOVES THE LAST ELLEMENT FROM AN ARRAY 
pupils.pop();
console.log('Pop example');
console.log(pupils);


//ADDS AN ITEM AT THE LAST POINT
pupils.push('BARAKA');
console.log('Push example');
console.log(pupils);


//DELETE WHAT YOU PUT IN THE SQUARE BRACKETS FROM THE ARRAY
delete pupils[5];
console.log('Delete example');
console.log(pupils); 


//IT WORKS LIKE toString, BUT YOU CAN SPECIY THE SEPARATOR
pupils.join('*');
console.log('Join example');
console.log(pupils);


//MAKES THE WHOLE ARRAY INTO ONE STRING
pupils.toString();
console.log('To String example');
console.log(pupils);
/*
console.log(pupils.toString());

pupils.shift();

pupils.sort();

pupils.unshift();

pupils.pop();

pupils.push();

delete[5]

pupils.join('ui ayaya');


*/
