// jai ganesh 

var  readlineSync  = require('readline-sync')
//var ysn = readlineSync.keyInYN('answer ')
var score = 0

var userName = readlineSync.question("hey there ! What's your name ? ")


console.log("Welcome to The Game -' do you know TANISHK' ?"  )



function play(question,answer) {
var userAnswer = readlineSync.question(question)
userAnswer=userAnswer.toLowerCase()

if (userAnswer===answer ) {console.log(' RIGHT !')
score = score + 2  }
else { console.log(' WRONG ! ')
score = score - 1
}
console.log('Current score:' ,score  )
console.log("------------------")
}

console.log("-Every RIGHT answer = +2 , WRONG answer = -1.")
console.log("==========================================================")
console.log('                     |DO YOU KNOW TANISHK?|     ')
console.log("ALL THE BEST ! " + userName)
console.log("\n")
//questions for QUIZ

var Two= {
  question:"1) Where do tanishk live ? ",
  answer:"indore"
}
var Three= {
  question: '3) Which game is love for tanishk ? ',
  answer:"basketball"
}




var Seven ={
  question:"4) Favourite colour of tanishk ? ",
  answer:"black"
}

var Eight={
  question:"2) Favourite food of tanishk ? ",
answer : "chill paneer"
}

var Nine={
  question:"5) Which is the Favourite pc game tanishk play ? ",answer:"gta"

}

var questions = [ Two,Eight,Three,Seven,Nine]

for (var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
 
}

console.log("YEP ! your TOTAL score = " + score )
console.log('===========================')
console.log("--------THANK YOU !--------")