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
rsvpButton.addEventListener('click', addParticipant)
/*** Form Validation [PLACEHOLDER] [ADDED IN UNIT 7] ***/
/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/