
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


// Open the application for the selected pet
function applyForPet(petName) {

    // Save the animal's name
    selectedPet = petName;

    // Change the application heading
    document.getElementById("applicationTitle").innerHTML =
        "Apply to Adopt " + selectedPet + "! ♡";

    // Clear any information from a previous application
    document.getElementById("adoptionForm").reset();

    // Open the application
    showPage("application");
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
