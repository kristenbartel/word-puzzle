let lettersContainer = document.getElementById('lettersContainer');
let inputContainer = document.getElementById('inputContainer');
let deleteButton = document.getElementById('deleteButton');
let submitButton = document.getElementById('submitButton');
let correctAnswersContainer = document.getElementById('correctAnswersContainer');
let totalPointsContainer = document.getElementById('points');
let correctAnswersList = document.getElementById('correctAnswersList');
let accumulatedPoints = 0;
let pointsMessageContainer = document.getElementById('pointsMessageContainer')

fetch (`https://freebee.fun//cgi-bin/random`)
.then(response => response.json())
.then(getData => {
    let centerLetter = getData.center;
    let centerLetButton = document.createElement('button');
    centerLetButton.setAttribute('id', 'centerButton');
    centerLetButton.setAttribute('class', "button is-medium m-1 is-warning is-light is-outlined")
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
        letterButton.setAttribute('class', 'button is-medium m-1');
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
                let errorMessage = `<div class="modal is-active">
                <div class="modal-background"></div>
                <div class="modal-card">
                  <header class="modal-card-head">
                    <p class="modal-card-title">Uh Oh!</p>
                    <button class="delete" onclick="body.removeChild(body.firstElementChild)" aria-label="delete"></button>
                  </header>
                  <section class="modal-card-body">
                    Word must contain first letter listed.
                  </section>
                  <footer class="modal-card-foot">
                  </footer>
                </div>
              </div>`
                document.querySelector('body').insertAdjacentHTML('afterbegin', errorMessage);
                inputContainer.innerHTML = '';
                return false;
                }  
        else if (!gameAnswersList.includes(userAttempt)) { 
                let errorMessage = `<div class="modal is-active">
                <div class="modal-background"></div>
                <div class="modal-card">
                  <header class="modal-card-head">
                    <p class="modal-card-title">Oh No!</p>
                    <button class="delete" onclick="body.removeChild(body.firstElementChild)" aria-label="delete"></button>
                  </header>
                  <section class="modal-card-body">
                    Word not found in game.
                  </section>
                  <footer class="modal-card-foot">
                  </footer>
                </div>
              </div>`
                document.querySelector('body').insertAdjacentHTML('afterbegin', errorMessage);
                inputContainer.innerHTML = '';
                return false;
             } 
        else if (correctAnswersArr.includes(userAttempt)) { 
                let errorMessage = `<div class="modal is-active">
                <div class="modal-background"></div>
                <div class="modal-card">
                  <header class="modal-card-head">
                    <p class="modal-card-title">Oops!</p>
                    <button class="delete" onclick="body.removeChild(body.firstElementChild)" aria-label="delete"></button>
                  </header>
                  <section class="modal-card-body">
                    Word already found.
                  </section>
                  <footer class="modal-card-foot">
                  </footer>
                </div>
              </div>`
                document.querySelector('body').insertAdjacentHTML('afterbegin', errorMessage);
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
                pointsMessageContainer.innerHTML = "Nice! You earned 1 point."
                setTimeout(function () {pointsMessageContainer.innerHTML = ""}, 2000);
                accumulatedPoints += 1;
        } else if (userAttempt.length === 5) {
                accumulatedPoints += 5;
                pointsMessageContainer.innerHTML = "Very Nice! You earned 5 points."
                setTimeout(function () {pointsMessageContainer.innerHTML = ""}, 2000);
        } else if (userAttempt.length >= 6) {
                pointsMessageContainer.innerHTML = "Excellent! You earned 6 points."
                setTimeout(function () {pointsMessageContainer.innerHTML = ""}, 2000);
                accumulatedPoints += 6;
        }
}

