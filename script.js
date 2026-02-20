// Get all need information from the HTML
const form = document.getElementById("checkInForm");
const nameinput = document.getElementById("attendeeName");
const teamselect = document.getElementById("teamSelect");

// Attendence count
let count = 0;
const maxCount = 50;

// Form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Form values
  const name = nameinput.value;
  const team = teamselect.value;
  const teamName = teamselect.selectedOptions[0].text;
  console.log( name, team, teamName);

  // Increase attendence count
  count++;
  console.log("Total check ins: ", count);

  // Update progress bar
  const percentage = Math.round((count / maxCount) * 100) + "%";
  console.log("Progress: " + percentage);

  // Update team count
  const teamcounter = document.getElementById(team + "Count");
  teamcounter.textContent = parseInt(teamcounter.textContent) +1;

  // Display welcome message
  const message = `Welcome, ${name} from ${teamName}`;
  console.log(message);

  // Reset form
  form.reset();
});
