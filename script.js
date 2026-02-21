// Get all need information from the HTML
const form = document.getElementById("checkInForm");
const nameinput = document.getElementById("attendeeName");
const teaminput = document.getElementById("teamSelect");

// Attendence count
let count = 0;
const maxCount = 50;

// Form
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Form values
  const name = nameinput.value;
  const team = teaminput.value;
  const teamname = teaminput.selectedOptions[0].text;

  // Increase attendence count
  count++;

  // Update team count
  const teamcounter = document.getElementById(team + "Count");
  teamcounter.textContent = parseInt(teamcounter.textContent) + 1;

  // Display welcome message
  const message = `Welcome, ${name} from ${teamname}`;

  // Update progress bar
  const percentage = Math.round((count / maxCount) * 100) + "%";

  // Reset form
  form.reset();
});
