
// PAWS & HOMES JAVASCRIPT

// Remember which pet the user selected
let selectedPet = "";


// Change the displayed page
function showPage(pageName) {

    let pages = document.getElementsByClassName("page");

    for (let i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }

    document.getElementById(pageName).style.display = "block";

    window.scrollTo(0, 0);
}


// Filter the available pets
function showPets(type) {

    showPage("pets");

    let pets = document.getElementsByClassName("pet-card");

    for (let i = 0; i < pets.length; i++) {

        if (type === "all") {
            pets[i].style.display = "block";
        }

        else if (pets[i].classList.contains(type)) {
            pets[i].style.display = "block";
        }

        else {
            pets[i].style.display = "none";
        }
    }
}



function applyForPet(petName) {

    // Remember which pet was selected
    selectedPet = petName;

    // Update the application title
    document.getElementById("applicationTitle").textContent =
        "Apply to Adopt " + petName + "! ♡";

    // Clear the form
    document.getElementById("adoptionForm").reset();

    // Hide all other pages
    let pages = document.getElementsByClassName("page");

    for (let i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }

    // Show the application
    document.getElementById("application").style.display = "block";

    // Return to the top of the page
    window.scrollTo(0, 0);
}



// Return to the selected animal's profile
function backToPet() {

    showPage(selectedPet.toLowerCase());
}


// Submit the adoption application
function submitApplication(event) {

    // Stop the page from refreshing
    event.preventDefault();

    let name = document.getElementById("fullName").value;

    if (name !== "") {

        // Create a confirmation message
        document.getElementById("confirmationMessage").textContent =
            "Thank you, " + name +
            ", for applying to adopt " + selectedPet + "!";

        // Show confirmation
        showPage("confirmation");

        // Clear the form
        document.getElementById("adoptionForm").reset();
    }
}


// Start on the homepage
showPage("home");


// PET PERSONALITY QUIZ

// Remember the pet matched by the quiz
let matchedPet = "";


// Find the user's best pet match
function findMatch() {

    // Get answers from the four questions
    let answer1 = document.getElementById("question1").value;
    let answer2 = document.getElementById("question2").value;
    let answer3 = document.getElementById("question3").value;
    let answer4 = document.getElementById("question4").value;

    // Make sure every question was answered
    if (answer1 === "" || answer2 === "" ||
        answer3 === "" || answer4 === "") {

        alert("Please answer all four questions!");
        return;
    }

    // Give each animal a starting score
    let maxScore = 0;
    let lunaScore = 0;
    let buddyScore = 0;
    let miloScore = 0;

    // Put all answers into an array
    let answers = [answer1, answer2, answer3, answer4];

    // Count how many answers match each pet
    for (let i = 0; i < answers.length; i++) {

        if (answers[i] === "Max") {
            maxScore++;
        }

        else if (answers[i] === "Luna") {
            lunaScore++;
        }

        else if (answers[i] === "Buddy") {
            buddyScore++;
        }

        else if (answers[i] === "Milo") {
            miloScore++;
        }
    }

    // Find the pet with the highest score
    let highestScore = Math.max(
        maxScore, lunaScore, buddyScore, miloScore
    );

    // If there is a tie, use this order
    if (maxScore === highestScore) {
        matchedPet = "Max";
    }

    else if (lunaScore === highestScore) {
        matchedPet = "Luna";
    }

    else if (buddyScore === highestScore) {
        matchedPet = "Buddy";
    }

    else {
        matchedPet = "Milo";
    }

    // Display the matching pet
    document.getElementById("matchName").textContent =
        matchedPet + "! ♡";

    // Give each pet a fun description
    if (matchedPet === "Max") {

        document.getElementById("matchPicture").textContent = "🐕";

        document.getElementById("matchDescription").textContent =
            "You love adventures, making friends, and having fun! " +
            "Max is the perfect playful companion for you!";
    }

    else if (matchedPet === "Luna") {

        document.getElementById("matchPicture").textContent = "🐈";

        document.getElementById("matchDescription").textContent =
            "You enjoy relaxing, being independent, and living " +
            "your best cozy life! Luna is your perfect match!";
    }

    else if (matchedPet === "Buddy") {

        document.getElementById("matchPicture").textContent = "🐶";

        document.getElementById("matchDescription").textContent =
            "You have lots of energy and love staying active! " +
            "Buddy would love to be your adventure partner!";
    }

    else if (matchedPet === "Milo") {

        document.getElementById("matchPicture").textContent = "🐱";

        document.getElementById("matchDescription").textContent =
            "You are sweet, silly, and love cozy days! " +
            "Milo is ready to be your new best friend!";
    }

    // Open the results page
    showPage("quizResult");
}


// Open the matched pet's profile
function viewMatch() {

    showPage(matchedPet.toLowerCase());
}
