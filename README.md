---Description---

MysteryBee is a spelling game built upon the FreeBee API, which is a cloned from the New York Times Spelling Bee app.

---tech stack---

javaScript, DOM, HTML, CSS and Bulma

---API---

https://freebee.fun/cgi-bin/random

---Basic Logic---

MysteryBee:

       -uses the API to renders all DOM elements for game play 
       -checks user-input against API for accuracy 
       -assigns points based on length of accurate inputs 
       -collects the accurate inputs in a list 
       -accumulates points as the list of accurate inputs grows
       -throw errors in the form of modals 

---Game Play---

Objective:

       -find as many words as possible with the provided seven letters

Conditions/Rules:

       -input must contain the first letter listed
       -input must be at least 4 characters in length

 Points:
       -Correct user inputs that follow the conditions accumulate points based on the length of the word. 
       
              Word length	Points earned
              Four	       1
              Five	       5
              Six	       6
              Seven  	7


