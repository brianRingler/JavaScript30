// if 'd' is pressed: 
// - e.code: "KeyD"; e.key: "d"; e.keyCode: 68

window.addEventListener('keydown', function(e) { 
  console.log(e);

  // access class="key" with .key
  const key = document.querySelector(`.key[data-key="${e.key.toLowerCase()}"]`); 
  console.log(key)
});

// KeyboardEvent.code
// -- https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code
// e.code return the result of 'keydown' event. If you press 'a' 'KeyA' is returned

function playSound(e) { 
  // convert to lowerCase if cap letter is entered 
  // selecting the audio element based on the letter selected
  const letter = document.querySelector(`audio[data-key="${e.key.toLowerCase()}"]`);

  // access class="key" with .key
  const key = document.querySelector(`.key[data-key="${e.key.toLowerCase()}"]`);
  
  // stop the function from running 
  if (!letter) return; 

  // adding this line restarts the audio file if the letter is hit multiple times in a row. Try hitting a multiple times then comment out the immediate line below.
  letter.currentTime = 0;

  // play the audi o file assocaiated with the letter
  letter.play();

  // Above we found which element was being accesed
  // Now we want to add the class 'playing to that tag
  // This allows for us to run .playing from CSS file
  key.classList.add('playing');
};


// This function removes the class 'playing' after it has been added
// The func will be called in the below forEach
function removeTransition(e) {
  // skip if its not a transform 
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
};

// keys will be an array of all 9 div.key
const keys = document.querySelectorAll('.key');

// using forEach to add 'transitioned' event listner to each element in the array 'keys'
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// Add a window event listener for 'keydown'
// "keydown" event is fired when ANY key is pressed
window.addEventListener('keydown', playSound);
