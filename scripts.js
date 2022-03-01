

let lettersContainer = document.getElementById('lettersContainer');
let inputContainer = document.getElementById('inputContainer');
let deleteButton = document.getElementById('deleteButton');
let submitButton = document.getElementById('submitButton');
let correctAnswersContainer = document.getElementById('correctAnswersContainer');
let totalPointsContainer = document.getElementById('points');
let correctAnswersList = document.getElementById('correctAnswersList');
let accumulatedPoints = 0;
let alertMessages = document.getElementById('alertMessages');
let resetButton = document.getElementById('resetButton');

let message = "";


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
        let userAttempt = inputContainer.innerHTML.toString();
        if (gameAnswersList.includes(userAttempt) && !correctAnswersArr.includes(userAttempt) && userAttempt.includes(centerButton.value)) { // 
                correctAnswersArr.push(userAttempt);
                let listItem = document.createElement('li');
                listItem.setAttribute('id', listItem);
                listItem.setAttribute('value', userAttempt);
                listItem.setAttribute('class', 'list-group-item' )
                listItem.innerHTML = userAttempt;
                correctAnswersList.appendChild(listItem);
                inputContainer.innerHTML = '';
                pointsFunction(userAttempt); 
                totalPointsContainer.innerHTML = accumulatedPoints;
                console.log(accumulatedPoints);
                message = "nice";
                alertMessages.innerText = message;
                inputContainer.innerHTML = '';
                // alert('nice!');
                return true;
        }
        else if (!userAttempt.includes(centerButton.value) ) { 
                message = "must choose first letter";
                alertMessages.innerText = message;
                return false;
                }   
        else if (!gameAnswersList.includes(userAttempt)) { 
                message = "word not found, please try again";
                alertMessages.innerText = message;
                inputContainer.innerHTML = '';
                return false;
             } 
        else if (correctAnswersArr.includes(userAttempt)) { 
                // alert('word already found');
                // inputContainer.innerHTML = '';
                // return false;
                message = "word already found";
                alertMessages.innerText = message;
                inputContainer.innerHTML = '';
                return false;
            }   
})
})

deleteButton.addEventListener('click', () => {
    let input  = String(inputContainer.innerText);
    let newString = input.slice(0, -1);
    inputContainer.innerHTML = newString;

    message = "";
    alertMessages.innerText = message;
}) 

let userAttempt = inputContainer.innerHTML.toString();
let pointsFunction = function points(userAttempt) {
        if (userAttempt.length === 4) {
                accumulatedPoints += 1;
        } else if (userAttempt.length === 5) {
                accumulatedPoints += 5;
        } else if (userAttempt.length === 6) {
                accumulatedPoints += 6;
        }
}

