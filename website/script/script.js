//------------------Donal Dempsey script----------------------
//START MINI GAME SCRIPT

//Declares variables 
var randomNumber;
var attemptsLeft;
var userGuess;
var message;

//function called by button press
function startGame() {
    // Hides the "play mini game" button
    document.getElementById('start').style.display = 'none';
            
    // Display's the game container on button push overwriting the css style 'none'
    document.getElementById('minigame').style.display = 'block';

    // Creates a random number between 1 and 10 and stores it in the var randomNumber
    randomNumber = Math.floor(Math.random() * 10) + 1;
    // Set's the number of attempts a user has to guess the number
    attemptsLeft = 3;
    // Display's message to user explaning the rules and the game
    document.getElementById('result').innerHTML = "I have randomly selected a number between 1-10<br>you have 3 attempts to guess it!";
    // Shows the user how many attempts they have left
    document.getElementById('attempts').textContent = attemptsLeft;
    }

// Function called when user enters their guess
function checkGuess() {
    // Get the user's guess from the input
    userGuess = parseInt(document.getElementById('guessInput').value);

    // Checks if the user has attempts left
    if (attemptsLeft > 0) {
    // Reduces users remaing guess' after each attempt
        attemptsLeft--;

        // Check's if the users guess is correct and displays the message if it is (will also call the endGame function if user is correct)
        if (userGuess === randomNumber) {
            document.getElementById('result').innerHTML = "SUCCESS! <br>" +randomNumber+ " is the correct number!";
            endGame();
        } 
        else {
            // works out and tells the user whether their guess is too high or too low (if the statement is true, too low is displayed otherwise, too high is displayed)
            message = userGuess < randomNumber ? 'too low!' : 'too high!';
            document.getElementById('result').innerHTML = "Incorrect guess! "+userGuess+ " is " +message+ "<br>You have " +attemptsLeft+ " attempt(s) left: " ;
        }

        // Updates the attempts display to show the user how many trys they have left
        document.getElementById('attempts').textContent = attemptsLeft;

        // Check's if the user is out of try's and displays the message if so (will also call the endGame function if user is out of trys)
        if (attemptsLeft == 0 && userGuess !== randomNumber) {
                document.getElementById('result').innerHTML ="Oh no! You're out of luck!<br>The correct number was: " +randomNumber;
                endGame();
        }
    }
}

// Shows the "Play Again" button after the game has finished
function endGame() {
    document.getElementById('enterGuess').style.display = 'none';
    document.getElementById('guessInput').style.display = 'none';
    document.getElementById('playAgainButton').style.display = 'inline';
}
        
// Resets all the game states so it can to be played again once the play again button is pressed
function playAgain() {
    document.getElementById('start').style.display = 'inline';
    document.getElementById('minigame').style.display = 'none';
    document.getElementById('playAgainButton').style.display = 'none';
    document.getElementById('enterGuess').style.display = 'inline';
    document.getElementById('guessInput').style.display = 'inline';
    document.getElementById('result').innerHTML = '';
    document.getElementById('attempts').textContent = '';
    document.getElementById('guessInput').value = '';
}

//END OF MINI GAME SCRIPT

//START OF TEXT OVER IMAGES SCRIPT

//addEventListner allows me to specify the function to look out for a certain event within the html
//DOMContentLoaded ensures script will not run until after the html is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // query.SelectorAll targets all elements with the class 'carousel-item'
    var carouselItems = document.querySelectorAll('.carousel-item');
    // Loop's through each 'carousel-item' element
    carouselItems.forEach(function(carouselItem) {
      // Add's event listeners and allocates a function for each 'carousel-item' in this case, mouseover & mouseout
      carouselItem.addEventListener('mouseover', function () {
        showCaption(carouselItem);
      }); //closes addEventListner-mouseover & function
  
      carouselItem.addEventListener('mouseout', function () {
        hideCaption(carouselItem);
      }); //closes addEventListner-mouseout & function
    }); //closes forEach-function

    //Calls the fuction after it is detected by the eventlisteners 
    function showCaption(carouselItem) {
      // Find the 'carousel-caption' within the current 'carousel-item'
      var caption = carouselItem.querySelector('.carousel-caption');
      if (caption) {
        caption.style.display = 'block';
      }
    }
  
    function hideCaption(carouselItem) {
      // Find the 'carousel-caption' within the current 'carousel-item'
      var caption = carouselItem.querySelector('.carousel-caption');
      if (caption) {
        caption.style.display = 'none';
      }
    }
  }); //closes addEventListener-DOMContentLoaded & function 

//END OF TEXT OVER IMAGE SCRIPT

//START OF SEASONAL COUNTDOWN TIMER

//knowledge and code obtained from https://www.w3schools.com/howto/howto_js_countdown.asp

// Set the date we're counting down to
var countDownDate = new Date("Dec 25, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("time").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "EXPIRED";
  }
}, 1000);

function change() {
  document.getElementById('timer').style.display = 'contents';
  document.getElementById('time').style.display = 'contents';
  document.getElementById('hide').style.display = 'block';
  document.getElementById('christmas').style.display = 'none';
  document.getElementById('count').style.display = 'none';

}
function back(){
  document.getElementById('timer').style.display = 'none';
  document.getElementById('time').style.display = 'none';
  document.getElementById('hide').style.display = 'none';
  document.getElementById('christmas').style.display = '';
  document.getElementById('count').style.display = 'block';
}

/* 
  ---------- Flaviu Vanca, Student ID: 22195092 -----------
              ------- Form Validation -------
*/
/* 
  Syntax: target.addEventListener(type, listener);
  -The event listener is added to manipulate the elements
  -The method accepts 2 parameters. The first one is the type and second one is the listener, 
    but in our care we use an anonymous function. It is called an anonymous function because 
    its created on the spot and has no name, simmilar to anonymous classes in java :) .  

  */
  document.addEventListener('DOMContentLoaded', function () {
  //Select the form
  var form = document.getElementById('form');

  //Add an event listener for the form submission.
  //This line of code is simmilar to the above one but it is used for the form
  form.addEventListener('submit', function (event) {
      //Prevent the default form submission
      event.preventDefault();

      //Validate the name field
      var nameInput = document.getElementById('name');//Select the HTML element by the ID or class then assign it to the var 
      //If the length of the name is less than 2 then display a message
      if (nameInput.value.length < 2) {
          alert('Please enter a name with a minimum of 2 letters.');//Display message within the alert box
          return;//return is used to exit the function because it doesn' meets the requirements    
      }//End if statement

      //Validate the email field if the field is not empty
      var emailInput = document.getElementById('email');//Select the HTML element by the ID or class then assign it to the var
      //Trim method removes empty spaces added by mistake then check if the string is not empty
      if (emailInput.value.trim() !== '') { 
        /*
          -Store the email pattern. 
          -I used this email pattern for the CA. 
            It practically reads like this:
              1-There must be at least one character before @
              2-At least one character between @ and .
              3-At least one lower case letter after .  
        */
        var emailPattern = /.+@.+\.[a-z]+/;
        //Check if the pattern is matching against the value 
          if (!emailPattern.test(emailInput.value)) {
              alert('Please enter a valid email address.');//Display message within the alert box
              return;//return is used to exit the function because it doesn' meets the requirements  
          }//End inner if statement
      }//End if statement

      //Validate the address field
      var address = document.getElementById('address');//Select the HTML element by the ID or class then assign it to the var
      if(address.value.length < 6){//Check if the length of the address is lass than 6  
        alert('Please enter an address.');//Display message within the alert box
        return;//return is used to exit the function because it doesn' meets the requirements  
      }//End if statement

      //Validate the phone number field
      //Select the HTML element by the ID or class then assign it to the var
      var phoneInput = document.getElementById('phone_number');
      /*
        The patternn reads like this:
          - ^ (Caret) indicates the start of a string 
          - [0-9] indicates that the phone number should consist of digits from 0 to 9
          - {10,15} indicates that the ength of the phone number should be between 10 to 15 digits
          - $ indicates the end of the string
      */
      var phonePattern = /^[0-9]{10,15}$/;
      //Check if the pattern is matching against the value 
      if (!phonePattern.test(phoneInput.value)) {
          alert('Please enter a valid phone number with 10 to 15 digits.');//Display message within the alert box
          return;//return is used to exit the function because it doesn' meets the requirements  
      }//End if statement

      //Validate 'Select Cake' dropdown menu
      //Select the HTML element by the ID or class then assign it to the var
      var cakeSelect = document.getElementById('category');
      /*
        Because the first option in the cake dropdown selection is "Select Cake", I've added a strict check to validate if the value is empty. The form cannot be submited without any cake being selected. 
      */
      if (cakeSelect.value === '') {
        alert('Please select a cake category.');//Display message within the alert box
        return;//return is used to exit the function because it doesn' meets the requirements  
      }//End if statement

      //Validate the selection of the terms and conditions chackbox 
      //Select the HTML element by the ID or class then assign it to the var
      var terms = document.getElementById('terms_conditions');
      if(!terms.checked){//Check if the cjeckbox is selected and revert the boolean value using !
        alert('Please accept the Terms and Conditions');//Display message within the alert box
        return;//return is used to exit the function because it doesn' meets the requirements  
      }//End if statement

      //Form validation message
      alert('Form submitted successfully!');

      //Reset the form by clearing all the fields
      form.reset();
  });
});
/*  ********** END OF FORM VALIDATION ********** */

/* ********** STYLE THE PREVIOUS AND NEXT SLIDE ICONS ********** */
document.addEventListener('DOMContentLoaded', function () {
    // Get the previous and next slide icons
    var prevIcon = document.querySelector('.carousel-control-prev-icon');
    var nextIcon = document.querySelector('.carousel-control-next-icon');

    //Styles for the previous slide icon
    prevIcon.style.width = '40px';
    prevIcon.style.height = '50px';
    prevIcon.style.borderRadius = '50px';
    prevIcon.style.backgroundColor = 'rgb(94, 94, 193)';

    //Add hover effect for the previous slide icon
    prevIcon.addEventListener('mouseover', function () {
        prevIcon.style.boxShadow = 'goldenrod 0px 0px 2px 2px';
    });

    //Remove hover effect when not hovered
    prevIcon.addEventListener('mouseout', function () {
        prevIcon.style.boxShadow = 'none';
    });

    //Styles for the next slide icon
    nextIcon.style.width = '40px';
    nextIcon.style.height = '50px';
    nextIcon.style.borderRadius = '50px';
    nextIcon.style.backgroundColor = 'rgb(94, 94, 193)';

    //Add hover effect for the next slide icon
    nextIcon.addEventListener('mouseover', function () {
        nextIcon.style.boxShadow = 'goldenrod 0px 0px 2px 2px';
    });

    //Remove hover effect when not hovered
    nextIcon.addEventListener('mouseout', function () {
        nextIcon.style.boxShadow = 'none';
    });

});
/* ********** END STYLE OF THE PREVIOUS AND NEXT SLIDE ICONS ********** */
