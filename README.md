MysteryBee is a spelling game built upon the FreeBee API, cloned from the New York Times Spelling Bee app.
 
The API that was used https://freebee.fun/cgi-bin/random
This API contains 349 words that might cover all users guessing words. 

MysteryBee is to make as many words with the seven letters following some conditions and roles.
 - User must choose first letter
 - Words must have at least for letters
 
 You can get points based on the length of the word as it shown below:
       Word length	Points earned
       Four	       1
       Five	       5
       Six	       6
       Seven  	7

MysteryBee was built using javaScript, DOM, HTML, CSS and Bulma.


 make fetch to API
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