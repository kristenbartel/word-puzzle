        // 1) make fetch to API
        // use "letters" key whose value comes in as a string
        // then .split() to make an array that contains each letter as a string
        // then loop over the "letters" array, forEach letter make a button and an event listener that adds the button-content to the userInput
        // 2) use "center" key whose value is also a string- assign eventListener that adds the button-content to the userInput
        // 3) create submitButton that starts step 4
        // 4)use "wordlist" key whose value is an array and check userInput against the array using a loop.
        // 5)if userInput is in "wordlist" then add to "correctAnswer" array, accumulate point, add word to DOM
        // 6)Add some alerts: else userInput it NOT in "wordlist" then alert and clear userInput 
        // 7) if useif "center" is not included in userInput then alert and clear userInput
        // 8) create delete button for userInput


let lettersContainer = document.getElementById('lettersContainer');
let inputContainer = document.getElementById('inputContainer');
let deleteButton = document.getElementById('deleteButton');
let submitButton = document.getElementById('submitButton');
let correctAnswersContainer = document.getElementById('correctAnswersContainer');
let totalPointsContainer = document.getElementById('points');
let correctAnswersList = document.getElementById('correctAnswersList');
let accumulatedPoints = 0;


fetch (`https://freebee.fun//cgi-bin/random`)
.then(response => response.json()) //
.then(getData => {
    let centerLetter = getData.center;
    let centerLetButton = document.createElement('button');
    centerLetButton.setAttribute('id', 'centerButton');
    centerLetButton.setAttribute('value', centerLetter);
    centerLetButton.innerText = centerLetButton.value;
    lettersContainer.appendChild(centerLetButton);
    centerLetButton.addEventListener('click', (e) => {
        e.preventDefault();
        inputContainer.innerHTML+= centerLetButton.value;
})
    let letters = getData.letters.split('');      
    letters.forEach(letters => {
        let letterButton = document.createElement('button');
        letterButton.setAttribute('id', 'letterButton');
        letterButton.setAttribute('value', letters);
        letterButton.innerText = letterButton.value;
        lettersContainer.appendChild(letterButton);
        letterButton.addEventListener('click', (e) => {
            e.preventDefault();
            inputContainer.innerHTML+= letterButton.value;
        })
})
correctAnswersArr = [];
submitButton.addEventListener('click',  (e) => {
        e.preventDefault();
        let gameAnswersList = getData.wordlist;
        // console.log(gameAnswersList);
        let userAttempt = inputContainer.innerHTML.toString();
        console.log(userAttempt);
        if (gameAnswersList.includes(userAttempt) && !correctAnswersArr.includes(userAttempt) && userAttempt.includes(centerButton.value)) { // 
                correctAnswersArr.push(userAttempt);
                let listItem = document.createElement('li');
                listItem.setAttribute('id', listItem);
                listItem.setAttribute('value', userAttempt);
                listItem.innerHTML = userAttempt;
                correctAnswersList.appendChild(listItem);
                inputContainer.innerHTML = '';
                //callback points function
                // pointsFunction(userAttempt);
                accumulatedPoints++;
                totalPointsContainer.innerHTML = accumulatedPoints;
                alert('nice!');
                return true;
        }
        // else if (!userAttempt.includes(centerButton.value) ) { 
        //         alert('must use first letter');
        //         inputContainer.innerHTML = '';
        //         return false;
        //         }   
        // else if (!gameAnswersList.includes(userAttempt)) { 
        //          alert('word not found, please try again');
        //          inputContainer.innerHTML = '';
        //          return false;
        //      } 
        // else if (correctAnswersArr.includes(userAttempt)) { 
        //         alert('word already found');
        //         inputContainer.innerHTML = '';
        //         return false;
        //     }      
})
console.log(correctAnswersArr);
})

deleteButton.addEventListener('click', () => {
    let input  = String(inputContainer.innerText);
    let newString = input.slice(0, -1);
    inputContainer.innerHTML = newString;
}) 

//points function

// let userAttempt = inputContainer.innerHTML.toString();
// let pointsFunction = function points(userAttempt) {
//         let splitWord = userAttempt.split()
//         // console.log(splitWord, 'line 100'); //this makes an array of chars in word
//         let wordLength = splitWord.length 
//         // console.log(wordLength, 'line 102');
//         if (wordLength === 4) {
//                 accumulatedPoints = 4;
//         } else if (wordLength === 5) {
//                 accumulatedPoints = 5;
//         } else if (wordLength === 6) {
//                 accumulatedPoints = 6;
//         }
// }