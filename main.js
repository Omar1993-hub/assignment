// Sample candidate data
const candidates = [
  {
    name: "John",
    location: "New York",
    jobRole: "Manager",
    image: "./images/male.webp",
  },
  {
    name: "Sarah",
    location: "London",
    jobRole: "HR Professional",
    image: "./images/female.png",
  },
  {
    name: "Michael",
    location: "Paris",
    jobRole: "Manager",
    image: "./images/male.webp",
  },
  {
    name: "Emily",
    location: "New York",
    jobRole: "HR Professional",
    image: "./images/female.png",
  },
  {
    name: "Peter",
    location: "London",
    jobRole: "Manager",
    image: "./images/male.webp",
  },
  {
    name: "Jessica",
    location: "New York",
    jobRole: "HR Professional",
    image: "./images/female.png",
  },
  {
    name: "Noah",
    location: "London",
    jobRole: "Manager",
    image: "./images/male.webp",
  },
  {
    name: "Derek",
    location: "Paris",
    jobRole: "HR Professional",
    image: "./images/male.webp",
  },
  {
    name: "Suzanne",
    location: "New York",
    jobRole: "Manager",
    image: "./images/female.png",
  },
  {
    name: "Andy",
    location: "London",
    jobRole: "HR Professional",
    image: "./images/male.webp",
  },
  {
    name: "Ema",
    location: "New York",
    jobRole: "Manager",
    image: "./images/female.png",
  },
  {
    name: "Andrew",
    location: "London",
    jobRole: "Manager",
    image: "./images/male.webp",
  },
  {
    name: "Shelby",
    location: "Paris",
    jobRole: "HR Professional",
    image: "./images/male.webp",
  },
];

function searchCandidates() {
  // Clear previous search results
  const candidateList = document.getElementById("candidateList");
  candidateList.innerHTML = "";

  // Get the search input values
  const locationInput = document
    .getElementById("locationInput")
    .value.toLowerCase();
  const jobRoleInput = document
    .getElementById("jobRoleInput")
    .value.toLowerCase();

  // Check if input values are empty
  if (locationInput.trim() === "" && jobRoleInput.trim() === "") {
    return; // Exit the function if both fields are empty
  }

  // Filter candidates based on location and job role
  const filteredCandidates = candidates.filter(
    (candidate) =>
      candidate.location.toLowerCase().includes(locationInput) &&
      candidate.jobRole.toLowerCase().includes(jobRoleInput)
  );

  // Display the search results
  filteredCandidates.forEach((candidate) => {
    const listItem = document.createElement("li");
    const candidateInfo = document.createElement("div");
    candidateInfo.textContent = `${candidate.name} - ${candidate.location} (${candidate.jobRole})`;

    const addButton = document.createElement("button");
    addButton.textContent = "Add to Evaluation";
    addButton.addEventListener("click", () => {
      addCandidateToEvaluation(candidate);
    });

    listItem.appendChild(candidateInfo);
    listItem.appendChild(addButton);
    candidateList.appendChild(listItem);

    const image = document.createElement("img");
    image.src = candidate.image;
    image.alt = candidate.name;
    listItem.appendChild(image);
  });
}

function addCandidateToEvaluation(candidate) {
  const evaluationList = document.getElementById("evaluationList");

  // Check if the candidate is already in the evaluation list
  const existingCandidates = evaluationList.getElementsByTagName("li");
  for (let i = 0; i < existingCandidates.length; i++) {
    const existingCandidate = existingCandidates[i];
    if (existingCandidate.textContent.includes(candidate.name)) {
      console.log("Candidate already exists in the evaluation list.");
      return; // Exit the function if the candidate is already present
    }
  }

  // Create the list item and add the candidate details
  const listItem = document.createElement("li");
  listItem.textContent = `${candidate.name} - ${candidate.location} (${candidate.jobRole})`;

  // Create the candidate image
  const image = document.createElement("img");
  image.src = candidate.image;
  image.alt = candidate.name;

  // Append the image to the list item
  listItem.appendChild(image);

  // Append the list item to the evaluation list
  evaluationList.appendChild(listItem);
}
