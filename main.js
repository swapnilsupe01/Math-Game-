// let playing = false;
// let timeremaining;
// let rimeremainingInterval;
// let correctAns;
// let score;

// function show(id) {
//     document.querySelector(`#${id}`).style.display = 'block';
// }
// function hide(id) {
//     document.querySelector(`#${id}`).style.display = 'none';
// }
// function srtText(id, text) {
//     document.querySelector(`#${id}`).innerHTML = 'text';
// }

// document.querySelector("#startstop").addEventListener('click',startStopGame);

// function startStopGame(evt) {
//     if(playing) {
//         //you pressed stop game
//         setText('startstop',"start Game");
//         hide("timeremaining");
//     }else {
//         //you passed start game
//         startStopGame();
//     }

//     playing = !playing;
// }
// function stopGame() {
//     clearInterval(timeremainingInterval);
//     show("gameover");
//     hide("timeremaining");
//     setText("scoreValue",'');
//     for(let i=1; i<5;i++) {
//         setText(`box${i}`,'');
//     }
//     setText('question','');
//     setText("gameover",`<p>GAME OVER</p><p>your score:@{score}</p>`);
//     setText("startstop","Start Game");
//     playing = false;
// }

// function startGame() {
//     setText('startstop',"Stop Game");
//     hide("gameover");
//     show("timeremaining");

//     timeremaining = 10;
//     score = 0;
//     setText("timeremainingValue",timeremaining);
//     setText("scoreValue", score);
//     generateQA();

//     for(let i=1; i<5;i++) {
//         document.querySelector(`#box${i}`).addEventListener('click',checkAnswer);
//     }
//     timeremainingInterval = setInterval(function(){
//         timeremaining--;
//         if(timeremaining === 0) {
//             stopGame();
//         }
//         setText("timeremainingValue",timeremaining);
//     },1000);
// }

// function generateQA() {
//     let num1 = 1 + (Math.round(Math.random() * 9));
//     let num2 = 1 + (Math.round(Math.random() * 9));
//     setText("question", `${num1} x ${num2}`);
//     correctAns = num * num2;
//     let randomBox = 1 +(Math.round(Math.random() *3));
//     setText(`box${randomBox}`,correctAns);
//     let answer = [corretAns];

//     for(let i = 1;i<5; i++) {
//         let wrongAnswer;

//         if (i !=randomBox) {
//             do {
//                 let tempNum1 = 1 +(Math.round(Math.random()* 9));
//                 let tempNum2 = 1 +(Math.round(Math.random()* 9));
//                 wrongAnswer = tempNum1 * tempNum2;
                 
//         } while (answer.indexOf(wrongAnswer != -1));

//         answer.push(wrongAnswer);
//         setText(`box${i}`,wrongAnswer);
//     }
// }
// }
// function checkAnswer(evt) {
//     //console.log(this.dtaset.position);
//     if(playing) {
//         let yourAnswer = this.innerHTML;

//         if(yourAnswer == correctAns) {
//             score++;
//             setText("scoreValue",score);
//             generateQA();
//             show("correct");
//             hide("wrong");
//             setTimeout(function() {
//                 hide("correct");
//             },1000);
//         } else {
//             show("wrong");
//             hide("correct");
//             setTimeout(function() {
//                 hide("wrong");
//             },1000);
//         }
//     }
// }







//new javascript

let playing = false; // A variable to track whether the game is currently being played or not.
let timeremaining;   // A variable to store the remaining time in the game.
let timeremainingInterval;  // A variable to store the interval ID for updating the timer
let correctAns;  // A variable to store the correct answer for a question or task.
let score;    // A variable to keep track of the player's score in the game.
// A function to show an HTML element with a specific id.
function show(id){
    document.querySelector(`#${id}`).style.display = 'block';
}
// A function to hide an HTML element with a specific id.
function hide(id){
    document.querySelector(`#${id}`).style.display = 'none';
}
// A function to set the text content of an HTML element with a specific id.
function setText(id, text){
    document.querySelector(`#${id}`).innerHTML = text;
}

document.querySelector("#startstop").addEventListener('click',startStopGame);

function startStopGame(evt){
    if(playing) {
        //You pressed stop game
        setText('startstop', "Start Game");
        hide("timeremaining");
    }else{
        //You pressed start game
        startGame();
    }

    playing = !playing;
}

function stopGame() {
    //Clear the interval timeremainingInterval to stop the countdown
    clearInterval(timeremainingInterval);
    // Display the "gameover" element and hide the "timeremaining" element
    show("gameover");
    hide("timeremaining");
    // Clear the score and text of boxes
    setText("scoreValue",'');
    for(let i=1; i<5; i++){
        setText(`box${i}`, '');
    }
    // Clear the question text
    setText('question','');
    // Set the "gameover" element's content to display the game result
    setText("gameover",`<p>GAME OVER</p><p>YOUR SCORE: ${score}</p>`);
    // Change the text of the "startstop" element back to "Start Game"
    setText("startstop", "Start Game");
    // Set the "playing" variable to false, indicating the game is not active
    playing = false;
}

function startGame(){
    // Set the text of the "startstop" element to "Stop Game"
    setText('startstop', "Stop Game");
    // Hide the "gameover" element and show the "timeremaining" element
    hide("gameover");
    show("timeremaining");
    // Initialize timeremaining to 60 seconds and score to 0
    timeremaining = 60;
    score = 0;
    // Set the initial text content of timeremainingValue and scoreValue
    setText("timeremainingValue", timeremaining);
    setText("scoreValue", score);
    // Generate a new question and answer
    generateQA();
   // Add click event listeners to the answer boxes (box1 to box4)
    for(let i=1; i<5; i++){
        document.querySelector(`#box${i}`).addEventListener('click', checkAnswer);
    }
    // Start a countdown timer using setInterval
    timeremainingInterval = setInterval(function() {
        timeremaining--;
        if(timeremaining === 0){
            stopGame();   // If timer reaches 0, call stopGame to end the game
        }
        setText("timeremainingValue", timeremaining);
    },1000);
}

function generateQA(){
     // Generate two random numbers between 1 and 9
    let num1 = 1 + (Math.round(Math.random() * 9));
    let num2 = 1 + (Math.round(Math.random() * 9));
    // Set the question text to display the multiplication question
    setText("question", `${num1} x ${num2}`);
    // Calculate the correct answer
    correctAns = num1*num2;
    // Choose a random box (box1 to box3) to place the correct answer
    let randomBox = 1 + (Math.round(Math.random() * 3));
    // Set the text of the randomly chosen box to the correct answer
    setText(`box${randomBox}`, correctAns);
    // Create an array to store answer options, starting with the correct answer
    let answers = [correctAns];
    // Generate three wrong answers and add them to the answers array
    for(let i=1; i<5; i++){
        let wrongAns;
        //Skip the box that already contains the correct answer
        if(i != randomBox){
            do{
                let tempNum1 = 1 + (Math.round(Math.random() * 9));  // Generate two new random numbers between 1 and 9
                let tempNum2 = 1 + (Math.round(Math.random() * 9));
               // Calculate the wrong answer
                wrongAns = tempNum1*tempNum2;
            }while(answers.indexOf(wrongAns) != -1);  // Ensure the wrong answer is unique

            answers.push(wrongAns);    // Add the wrong answer to the answers array
            setText(`box${i}`, wrongAns);  
            // Set the text of the current box (i) to the wrong answer
        }
    }
}

function checkAnswer(){
    // console.log(this.dataset.position);
     // Ensure the game is currently in progress (the 'playing' variable is true)
    if(playing) {
          // Get the text content (answer) of the clicked answer box
        let yourAns = this.innerHTML;

        // Compare the player's answer (yourAns) to the correct answer (correctAns)
        if(yourAns == correctAns){
            score++;  // If the answer is correct:  // 1. Increase the player's score by 1.
            // 2. Update the displayed score on the screen.
            setText("scoreValue",score);
            
            // 3. Generate a new question with new answer options
            generateQA();
            // 4. Show the "correct" message briefly.
            show("correct");
            
            // 5. Hide the "wrong" message if it's currently displayed
            hide("wrong");
                // 6. Use setTimeout to hide the "correct" message after 1 second (1000 milliseconds).
            setTimeout(function(){
                hide("correct");
            },1000);
        }else{
            // If the answer is incorrect:  // 1. Show the "wrong" message briefly.
            show("wrong");
            // 2. Hide the "correct" message if it's currently displayed.
            hide("correct");
             // 3. Use setTimeout to hide the "wrong" message after 1 second (1000 milliseconds).
            setTimeout(function(){
                hide("wrong");
            },1000);
        }
    }
}