/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [X] Project 5 (REQUIRED FEATURE) 
  - [X] Any time after
***/

// Step 1: Select the theme button
let themeButton = document.getElementById("theme-button")

// Step 2: Write the callback function
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode')
}

// Step 3: Register a 'click' event listener for the theme button,
themeButton.addEventListener('click', toggleDarkMode);


/*** Form Handling [PLACEHOLDER] [ADDED IN UNIT 6] ***/
let rsvpButton = document.getElementById("rsvp-button")
let count = 3;

const addParticipant = (person) => {
  const para = document.createElement("p");
  para.textContent = `✅ ${person.name} from ${person.hometown} has RSVP'd.`;
  document.querySelector(".rsvp-participants").appendChild(para);

  const element = document.getElementById("rsvp-count");
  if (element) {
    element.remove();
  }

  count++;

  const newPtag = document.createElement("p");
  newPtag.id = "rsvp-count";
  newPtag.textContent = "⭐ " + count + " people have RSVP'd to this event!";
  document.querySelector(".rsvp-participants").appendChild(newPtag);
};


/*** Form Validation [PLACEHOLDER] [ADDED IN UNIT 7] ***/
const validateForm = (event) => {
  event.preventDefault(); // Prevent form from reloading the page
  let containsErrors = false;
  let rsvpInputs = document.getElementById("rsvp-form").elements;

  let person = {
    name: rsvpInputs[0].value,
    hometown: rsvpInputs[1].value,
    email: rsvpInputs[2].value
  };

  // Validate name and hometown
  if (person.name.length < 2) {
    containsErrors = true;
    rsvpInputs[0].classList.add("error");
  } else {
    rsvpInputs[0].classList.remove("error");
  }

  if (person.hometown.length < 2) {
    containsErrors = true;
    rsvpInputs[1].classList.add("error");
  } else {
    rsvpInputs[1].classList.remove("error");
  }

  // Validate email
  if (!person.email.includes("@") || !person.email.includes(".com")) {
    containsErrors = true;
    rsvpInputs[2].classList.add("error");
  } else {
    rsvpInputs[2].classList.remove("error");
  }

  // Only add participant if all inputs are valid
  if (!containsErrors) {
    addParticipant(person);
    toggleModal(person);


    for (let i = 0; i < rsvpInputs.length; i++) {
      if (rsvpInputs[i].type === "text") {
        rsvpInputs[i].value = "";
      }
    }
  }
}

rsvpButton.removeEventListener('click', addParticipant);
rsvpButton.addEventListener('click', validateForm);

/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/

/*** Modal ***
  
  Purpose:
  - Use this starter code to add a pop-up modal to your website.

  When To Modify:
  - [x] Project 9 (REQUIRED FEATURE)
  - [x] Project 9 (STRETCH FEATURE)
  - [x] Any time after
***/

const toggleModal = (person) => {
  let modal = document.getElementById('success-modal');
  let modalText = document.getElementById('modal-text');

  modal.style.display = 'flex';
  modalText.textContent = `Thanks for RSVPing, ${person.name}! We can't wait to see you at the event.`;

  let intervalId = null;

  if (!reduceMotion) {
    intervalId = setInterval(animateImage, 500);
  }

  setTimeout(() => {
    modal.style.display = 'none';
    if (intervalId !== null) {
      clearInterval(intervalId);
    }
  }, 5000);
};


let closeModalBtn = document.getElementById("close-modal-button");

const closeModal = () => {
  document.getElementById("success-modal").style.display = "none";
};

closeModalBtn.addEventListener("click", closeModal);


// TODO: animation variables and animateImage() function
let rotateFactor = 0;
let modalImage = document.querySelector("#success-modal img");

const animateImage = () => {
  rotateFactor = (rotateFactor === 0) ? -10 : 0;
  modalImage.style.transform = `rotate(${rotateFactor}deg)`;
};

let reduceMotion = false;

document.getElementById("motion-button").addEventListener("click", () => {
  reduceMotion = !reduceMotion;
});




