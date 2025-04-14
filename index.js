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
    // Write your code here
    // This section will run whenever the button is clicked
    document.body.classList.toggle('dark-mode')
}

// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function
themeButton.addEventListener('click', toggleDarkMode);


/*** Form Handling [PLACEHOLDER] [ADDED IN UNIT 6] ***/
/*** Form Handling ***
  
  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [ ] Project 6 (REQUIRED FEATURE)
  - [ ] Project 6 (STRETCH FEATURE) 
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: Add your query for the submit RSVP button here
let rsvpButton = document.getElementById("rsvp-button")
let count = 3;

const addParticipant = (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const state = document.getElementById("state").value;

  if (name && state) {
    const para = document.createElement("p");
    para.textContent = `✅ ${name} from ${state} has RSVP'd.`;
    document.querySelector(".rsvp-participants").appendChild(para);

    const element = document.getElementById("rsvp-count");
    if (element) {
      element.remove();
    }

    count = count + 1;

    const newPtag = document.createElement("p");
    newPtag.id = "rsvp-count";
    newPtag.textContent = "⭐ " + count + " people have RSVP'd to this event!";
    document.querySelector(".rsvp-participants").appendChild(newPtag);
  }
};


// Step 3: Add a click event listener to the submit RSVP button here

/*** Form Validation [PLACEHOLDER] [ADDED IN UNIT 7] ***/
/*** Form Validation ***
  
  Purpose:
  - Prevents invalid form submissions from being added to the list of participants.

  When To Modify:
  - [x] Project 7 (REQUIRED FEATURE)
  - [x] Project 7 (STRETCH FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.

// Step 2: Write the callback function
const validateForm = () => {

  let containsErrors = false;

  var rsvpInputs = document.getElementById("rsvp-form").elements;
  // TODO: Loop through all inputs
  for (let i = 0; i < rsvpInputs.length; i++) {
    let input = rsvpInputs[i];

    if (input.type !== "text") continue; // Skip non-text inputs (like the button)

    if (input.value.length < 2) {
      containsErrors = true;
      input.classList.add("error");
    } else {
      input.classList.remove("error");
    }
  }

  // Only call addParticipant() if all inputs are valid
  if (!containsErrors) {
    addParticipant();

    // Clear inputs after successful submission
    for (let i = 0; i < rsvpInputs.length; i++) {
      if (rsvpInputs[i].type === "text") {
        rsvpInputs[i].value = "";
      }
    }
  }

  // Replace old RSVP click listener with this


  

  // TODO: Inside loop, validate the value of each input

  // TODO: If no errors, call addParticipant() and clear fields

}

// Step 3: Replace the form button's event listener with a new one that calls validateForm()
rsvpButton.removeEventListener('click', addParticipant); // Just to be safe
rsvpButton.addEventListener('click', validateForm);

/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/