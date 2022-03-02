let lettersContainer = document.getElementById('lettersContainer');
let inputContainer = document.getElementById('inputContainer');
let deleteButton = document.getElementById('deleteButton');
let submitButton = document.getElementById('submitButton');
let correctAnswersContainer = document.getElementById('correctAnswersContainer');
let totalPointsContainer = document.getElementById('points');
let correctAnswersList = document.getElementById('correctAnswersList');
let accumulatedPoints = 0;
let messageContainer = document.getElementById('messageContainer');
        messageContainer.setAttribute('id', 'messageContainer');

fetch (`https://freebee.fun//cgi-bin/random`)
.then(response => response.json())
.then(getData => {
    let centerLetter = getData.center;
    let centerLetButton = document.createElement('button');
    centerLetButton.setAttribute('id', 'centerButton');
    centerLetButton.setAttribute('class', "button is-medium")
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
        letterButton.setAttribute('class', 'button is-medium');
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
                listItem.innerHTML = "-  " + userAttempt;
                correctAnswersList.appendChild(listItem);
                inputContainer.innerHTML = '';
                pointsFunction(userAttempt); 
                totalPointsContainer.innerHTML = "Points:   " + accumulatedPoints;
                return true;
        } 
        else if (!userAttempt.includes(centerButton.value) ) { 
                let errorMessage = `<article id="errorMessage" class="message is-danger">
                <div class="message-header">
                  <p>Uh Oh!</p>
                  <button class="delete" onclick="messageContainer.removeChild(messageContainer.firstElementChild)" aria-label="delete"></button>
                </div>
                <div class="message-body">
                  Word must contain FIRST letter.
                </div>
                </article>`;
                document.querySelector('#messageContainer').insertAdjacentHTML('afterbegin', errorMessage);
                inputContainer.innerHTML = '';
                return false;
                }  
        else if (!gameAnswersList.includes(userAttempt)) { 
                let errorMessage = `<article id="errorMessage" class="message is-danger">
                <div class="message-header">
                  <p>Uh Oh!</p>
                  <button class="delete" onclick="messageContainer.removeChild(messageContainer.firstElementChild)" aria-label="delete"></button>
                </div>
                <div class="message-body">
                  Word not found.
                </div>
                </article>`;
                document.querySelector('#messageContainer').insertAdjacentHTML('afterbegin', errorMessage);
                inputContainer.innerHTML = '';
                return false;
             } 
        else if (correctAnswersArr.includes(userAttempt)) { 
                let errorMessage = `<article id="errorMessage" class="message is-danger">
                <div class="message-header">
                  <p>Uh Oh!</p>
                  <button class="delete" onclick="messageContainer.removeChild(messageContainer.firstElementChild)" aria-label="delete"></button>
                </div>
                <div class="message-body">
                  Word already Found.
                </div>
                </article>`;
                document.querySelector('#messageContainer').insertAdjacentHTML('afterbegin', errorMessage);
                inputContainer.innerHTML = '';
                return false;
            }   
})
})

deleteButton.addEventListener('click', () => {
    let input  = String(inputContainer.innerText);
    let newString = input.slice(0, -1);
    inputContainer.innerHTML = newString;
}) 

let userAttempt = inputContainer.innerHTML.toString();
let pointsFunction = function points(userAttempt) {
        if (userAttempt.length === 4) {
                messageContainer.innerHTML = "Nice! You earned 1 point."
                setTimeout(function () {messageContainer.innerHTML = ""}, 2000);
                accumulatedPoints += 1;
        } else if (userAttempt.length === 5) {
                accumulatedPoints += 5;
                messageContainer.innerHTML = "Very Nice! You earned 5 points."
                setTimeout(function () {messageContainer.innerHTML = ""}, 2000);
        } else if (userAttempt.length >= 6) {
                messageContainer.innerHTML = "Excellent! You earned 6 points."
                setTimeout(function () {messageContainer.innerHTML = ""}, 2000);
                accumulatedPoints += 6;
        }
}

