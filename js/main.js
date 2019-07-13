var myName = 'Nesh';

console.log(myName);

var myBrotherName = 'Malli';

console.log('My brother\'s name is ' + myBrotherName);

var mySisterName = 'Manna';
console.log('My sister\'s name is ' + mySisterName);

var myFavoriteGame = 'Fifa 19,Roblox etc';
console.log('My favourite game is ' + myFavoriteGame);

var myName = 'Nesh';
console.log('My name is ' + myName);

var teacherName = 'Mr Musa';
console.log('My teacher\'s name is ' + teacherName + ' and my brothers name is ' + myBrotherName)

var father = 'Daniel Muondu';

var mother = 'Diana Gacheri';

var classSix = 'Six South';

var principle = 'Father Caroli';

var teacher = 'Mr Momanyi';

var pupil = 'Josh';

var swimming = 'pool';
var school = 'Consolata school';
console.log('I am in ' + school + '. I am in class ' + classSix + '. Principle is called ' + principle + '. One of my teachers is ' + teacher + '. One of my friends is called ' + pupil + '. We go swimming in the ' + swimming + '. My father is called ' + father + '. My mother name is ' + mother);




//USING BACKTICKS
let friend = `My friend is called  ${pupil}`;
let friend2 = 'My friend is called ' + pupil;
console.log(friend2);





let bodyElement = document.getElementById("demo");

//bodyElement.innerHTML = `Hi discord.How are you`;

let myButton = document.getElementById("button");


// Do anything you want here....
myButton.addEventListener('click', function () {
    bodyElement.innerHTML = 'Hello';
})


let myButtonTwo = document.getElementById('button two');

myButtonTwo.addEventListener('click', function () {
    bodyElement.innerHTML = 'Bye';
})
//MySCHOOL
let mySchool = {
    name: 'Consolata',
    principals: [`Fr. Caroli`, `Mr. Kariuki`, `Mrs. Fanandis`],
    games: ['Hide and Seek', 'British Bulldog', 'Chess', 'Monopoly'],

    sports: ['Swimming', 'Basketball', 'Football', 'Netball'],

    pupils: ['Alvin', 'Kalufa', 'Nigel', 'Wayine', 'Francis', 'Ryan'],

    teachers: ['Class teacher', 'Math teacher', 'English teacher', 'Kiswahili teacher', 'Science teacher', 'Social teacher', 'CRE teacher', 'Math teacher', 'English teacher', 'Kiswahili teacher', 'Science teacher', 'Social teacher', 'Math teacher', 'English teacher', 'Kiswahili teacher', 'Science teacher', 'Social teacher', 'Math teacher', 'English teacher', 'Kiswahili teacher', 'Science teacher', 'Social teacher'],
    myFriend: { name: 'Nick', class: 6, bestInScience: false}
    
};






// Write and object about your home
let myHome = {
    place:'Mt View Estate',
    houseNumber:216,
    hasFurniture:true,
    hasOneParent:false,
    hasChildren:true,
    doesComputerPrograming:true,
    doesNotHaveAGirl:false,
    hasAhousehelp:true,
    hasAWatchman:false,
    hasASmartTv:true,
    hasLaptops:true,
    hasABaby:true,
    hasNeighbours:true,
    hasRules:true,
    parentsHaveWork:true,
    goesToChurch:true
};
//About football
let football = {
  how_many_players:11,
  length_of_a_pitch_in_metres: 210,
  how_long_a_football_match_in_minutes: 90,
  positions:['Striker','Mid Filder','Defender','Goal keper']
  
};
