        // 1) make fetch to API
        // use "letters" key whose value comes in as a string
        // then .split() to make an array that contains each letter as a string
        // then loop over the "letters" array, forEach letter make a button and an event listener that adds the button-content to the userInput
// 2) use "center" key whose value is also a string- assign eventListener that adds the button-content to the userInput
// 3) create submitButton that starts step 4
// 4)use "wordlist" key whose value is an array and check userInput against the array using a loop.
// 5)if userInput is in "wordlist" then add to "correctAnswer" array, accumulate point, add word to DOM
// 6)else userInput it NOT in "wordlist" then alert and clear userInput 
// 7) if "center" is not included in userInput then alert and clear userInput
// 8) create delete button for userInput
// let userInput = document.getElementById('userInput');
let lettersContainer = document.getElementById('lettersContainer');
let inputContainer = document.getElementById('inputContainer');

fetch (`https://freebee.fun//cgi-bin/random`)
.then(response => response.json())
.then(getLetters => {
            // console.log(getLetters.letters);
    let centerLetter = getLetters.center;
            // console.log(centerLetter);
    let centerButton = document.createElement('button');
    centerButton.setAttribute('id', 'centerButton');
    centerButton.setAttribute('value', centerLetter);
    centerButton.innerText = centerButton.value;
    lettersContainer.appendChild(centerButton);
    centerButton.addEventListener('click', (e) => {
        e.preventDefault();
        inputContainer.innerHTML+= centerButton.value;
})
    let letters = getLetters.letters.split('');      
            // console.log(letters);
    letters.forEach(letters => {
        let letterButton = document.createElement('button');
        letterButton.setAttribute('id', 'letterButton');
        letterButton.setAttribute('value', letters);
        letterButton.innerText = letterButton.value;
            // console.log(letterButton);
        lettersContainer.appendChild(letterButton);
        letterButton.addEventListener('click', (e) => {
            e.preventDefault();
            inputContainer.innerHTML+= letterButton.value;
        })
       
})
})
