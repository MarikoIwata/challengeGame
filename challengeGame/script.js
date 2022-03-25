// TRIVIA CATEGORY GAME //
const messages = {
askPlay: `Do you want to play a game?`,
welcome: `Welcome to the trivia game. \nRules : The longer the word the more points you recieve (1 point per letter)`, 
skip: 'skip this question?',
enterName: 'Enter Name',
letBegin: `Excellent, lets begin! `,
q1: "Question 1: States\n Enter a US State",
q2: "Question 2: Animals\n Enter an animal that starts with the letter L",
q3: "Question 3: Coding Languages\n Enter a coding language name",
q4: "Question 4: Colors\n Enter a color that starts with A",
tryAgain: "Try again, answer not found",
exit: "exit out of game?",
noName: "you didn't enter a name"
// S1: `Excellent your score is now ${score}`,
// F1: `Congratulations ${user}! Your final score is ${score}`,
}
// place arrays for categories here:
// category 1; states
const states = ['alabama', 'alaska', 'american samoa', 'arizona', 'arkansas', 'california', 'colorado', 'connecticut', 'delaware', 'district of columbia', 'federated states of micronesia', 'florida', 'georgia', 'guam', 'hawaii', 'idaho', 'illinois', 'indiana', 'iowa', 'kansas', 'kentucky', 'louisiana', 'maine', 'marshall islands', 'maryland', 'massachusetts', 'michigan', 'minnesota', 'mississippi', 'missouri', 'montana', 'nebraska', 'nevada', 'new hampshire', 'new jersey', 'new mexico', 'new york', 'north carolina', 'north dakota', 'northern mariana islands', 'ohio', 'oklahoma', 'oregon', 'palau', 'pennsylvania', 'puerto rico', 'rhode island', 'south carolina', 'south dakota', 'tennessee', 'texas', 'utah', 'vermont', 'virgin island', 'virginia', 'washington', 'west virginia', 'wisconsin', 'wyoming' ]

// category 2; animals start with L
const animals = ['lamprey', 'lancashire heeler', 'lapponian herder', 'lawnmower blenny', 'lazarus lizard', 'leaf-tailed gecko', 'leech', 'lemming', 'lemur', 'leonberger', 'leopard', 'leopard cat', 'leopard frog', 'leopard gecko', 'leopard lizard', 'leopard seal', 'leopard tortoise', 'lhasa apso', 'lhasapoo', 'liger', 'lion', 'lion’s mane jellyfish', 'lionfish', 'little brown bat', 'little penguin', 'lizard', 'lizardfish', 'llama', 'loach', 'lobster', 'locust', 'lone star tick', 'long-eared owl', 'long-haired rottweiler', 'long-tailed tit', 'longnose gar', 'lorikeet', 'lowchen', 'lungfish', 'lynx', 'lyrebird']

// category 3; all coding languages
const codingLanguages = ['c', 'java', 'python', 'c++', 'c#', 'visual basic', 'javascript', 'php', 'sql', 'assembly language', 'r', 'groovy', 'html', 'css']

// category 4; colors
const colors = ['absinthe', 'alizaril', 'almond', 'amaranth', 'amazon', 'amber', 'amethyst', 'apricot', 'aqua', 'aquamarine', 'artichoke', 'ash', 'asparagus', 'auburn', 'avocado', 'azure']


//start the game
question1 = [messages.q1, states] 
question2 = [messages.q2, animals]
question3 = [messages.q3, codingLanguages]
question4 = [messages.q4, colors]

questionsArray = [question1, question2, question3, question4]

game();

function game(){
let score = 0;
let user = '';
const history = {};//ie sam:0

function starting(){
alert(messages.askPlay)
const begin = confirm(messages.welcome)
    //if "start" is true, invoke userCreater. if false, show message.
return (begin ? userInitialization() : alert(messages.exit)) //false goes to next action  
}
function userInitialization() {
user = prompt(messages.enterName)
if(!user){
    alert(messages.noName);
    prompt(messages.enterName)
}
history[user] = 0;//stores user to obj userNames assigns 0 score to user 
//for every question in the questionsArray, iterate through the questions function
for(let el of questionsArray){
    questions(...el);
}
//save the score in obj if it's top 10
return leaderBoard();
}

function questions(question, array){
//ask question
let answer = prompt(question)
//check if there is an answer, if so turn it to lowercase if not ask skip question?
if(!answer){
    return alert(messages.skip);
} else{
    //if the answer was turned to lower case, check if it's included in the array
    answer = answer.toLowerCase();
    if (array.includes(answer)) {
        //if it is in the array, increase the score by the length of the string
        score += answer.length
        //tell user what their score is
        alert(`Excellent your score is now ${score}`)
        //go to the next question
    }else {
        //if the answer is not in the array, alert them to try again
        alert(messages.tryAgain);
    }
}
}

function leaderBoard() { 
    alert(`Congratulations ${user}! your final score is ${score}`)
}

return starting();
}
