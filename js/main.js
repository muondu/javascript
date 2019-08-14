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

    teachers: ['Class teacher', 'Math teacher', 'English teacher', 'Kiswahili teacher', 'Science teacher', 'Social teacher', 'CRE teacher'],
    myFriend: {
        name: 'Nick',
        class: 6,
        bestInScience: false
    }

};






// Write and object about your home
let myHome = {
    place: 'Mt View Estate',
    houseNumber: 216,
    hasFurniture: true,
    hasOneParent: false,
    hasChildren: true,
    doesComputerPrograming: true,
    doesNotHaveAGirl: false,
    hasAhousehelp: true,
    hasAWatchman: false,
    hasASmartTv: true,
    hasLaptops: true,
    hasABaby: true,
    hasNeighbours: true,
    hasRules: true,
    parentsHaveWork: true,
    goesToChurch: true
};
//About football
let football = {
    how_many_players: 11,
    length_of_a_pitch_in_metres: 210,
    how_long_a_football_match_in_minutes: 90,
    positions: ['Striker', 'Mid Filder', 'Defender', 'Goal keper']

};

/*
//Get Element by Id
var data = document.getElementById('ul');

// Go through the list of Positions
football.positions.forEach(function(position){
    
    // Create a new element and put the value you want inside it
    var name = document.createElement('li');
    name.innerHTML = position;
    
    // Put your new element inside your main list
    data.append(name);  
    
});
*/


var data = document.getElementById('ul');
mySchool.teachers.forEach(function(teacher){
    var name = document.createElement('li');
    name.innerHTML = teacher;
    data.append(name);  
    
});



//ABOUT MY SCHOOL
let myConsolata = {
  name : 'Consolata',
  principal : 'Father Caroli',
  location : 'Nairobi county',
  pupils: {
    nesh: {
      name: 'Munene Muondu',
      placesVisited : ['Naivasha', 'Mombasa', 'Nakuru', 'Meru'],
      favouriteSports: {},
        tennis : {},
        swimming : {}
      }, 
    },
    malli: {},
  
    nick: {}
};

// 1. Go through the object and populate your website.
// 2. Go through the object and get the propety you want show on your website.
let myConsolataElement = document.getElementById('my-consolata');

//CREAR AN ELEMENT TO SHOW PRINCIPLE'S NAME
let principalElement = document.createElement('h3');

//PUT THE NAME OF THE PRINCIPAL INSIDE THE ELEMENT
//principalElement.innerHTML = myConsolata.principal;
principalElement.innerHTML = myConsolata.location;

//SHOW OUR PRINCIPLE INSIDE OUR WEBSITE(myConsolataElement)
myConsolataElement.append(principalElement);
//AN OBJECT IN A OBJECT

let myHome2 = {
  place: 'Kangemi',
  estate: 'Mt. View',
  members: ['Dad','Mum','Nesh','Malli','Manna'],
  familyMembers: {
    malli: {
      name: 'Malli Muondu',
      favoriteSports: ['Tennis', 'Swimming','Football'],
      friends: {
        friend1: 'Wayn',
        friend2: 'Alvin',
        friend3: 'Kalufa',
        friend4: 'Wachira',
        friend5: 'Earn'
      },
      favoriteGame: {
        name: 'Roblox',
         details: {
           whereToGetIt: 'Google',
           doYouDownloadIt: true
        }
      }
    },
    manna: {},
    mum: {},
    dad: {},
    nesh: {
      name: 'Nesh',
      favoriteSport: 'tennis',
      friends: {
        friend1: 'caleb',
        friend2: 'nick',
        friend3: 'nathan',
        friend4: 'victor',
        friend5: {
          name:'ablvkthug1346',
          friends: {
            friend1: {}
          },
          favoriteSport: {
            sport1: 'Tennis',
            sport2: 'Swimming',
            sport3: 'Football'
          }
        },
        friend6: {}
    }
      
    }
  },
  ourRules: {
    ruleOne: 'Never Give up',
    ruleTwo: 'We live for Excellence'
  }
  
  
};
//
//for(num = 50; num >= 0; num = num - 3){
//    console.log(num); 
//};


for(hello = 1; hello < 100; hello = hello + 1){
	// Check if hello is divisible by five
    if((hello%5) == 0){
        // Show the hello here
        console.log(hello);
    }
};
/*5 10 15 20 25 30 35 40 45 50 55 60 65 70 75 80 85 90 95 100*/


for (hat = 100;hat >= 0;hat = hat -1 ){
    
    if((hat%3) == 0){
        console.log(hat)
    }
      
};
//
//for(dog = 1; dog < 100; dog = dog + 1){
//    if((dog%3) == 0){
//        console.log(dog);
//    }
//}





//Arees and loops

