var readlineSync = require('readline-sync');
var userInput = readlineSync.question('What is your name ? ');
console.log("Welcome "+userInput+ ", to, DO YOU KNOW SAURABH ? ")
console.log("     ");

var count =0;

// Questions
var questions = [
  {
    Q:"What is my middle name ? (Laxman, Ramdas, Tukaram) :  ",
    A:"Laxman"
  },
  {
    Q:"What is my favourite color ? (Options: Red, White, Green) :  ",
    A:"White"
  },
  {
    Q:"My education ? (Options: BE, BSc, MCA) :  ",
    A:"BE"
  },
  {
    Q:"Mobile I use ? (Options: Oneplus, Apple, Samsung) :  ",
    A:"Oneplus"
  },
  {
    Q:"What is my Height ? (Options: 5.9, 5.11, 6) :  ",
    A:"6"
  },
  {
    Q:"Bike I have ? (Options: Pulsar, Bullet, Shine) :  ",
    A:"Pulsar"
  },
];

for(var i=0; i<questions.length; i++){
  check(questions[i].Q,questions[i].A)
}

function check(quest,ans){
  var userAns = readlineSync.question(quest);

  if(userAns === ans){
    console.log("Right!");
    count++;   
  }else {
    console.log("Wrong, try again.")
      if(count>0)
        count--;
  }
  console.log("score : " + count);
  console.log("-----------------------");
}
console.log("Your final score is : " + count);