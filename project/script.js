
// PAWS & HOMES JAVASCRIPT

// This function changes which page is displayed.

function showPage(pageName) {

    // Hide all pages
    let pages = document.getElementsByClassName("page");

    for (let i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }

    // Show the selected page
    document.getElementById(pageName).style.display = "block";

    // Scroll back to the top
    window.scrollTo(0, 0);
}


// This function filters pets by animal type.

function showPets(type) {

    // First show the pets page
    showPage("pets");

    // Get all pet cards
    let pets = document.getElementsByClassName("pet-card");

    for (let i = 0; i < pets.length; i++) {

        // Show all pets
        if (type === "all") {
            pets[i].style.display = "block";
        }

        // Show only dogs
        else if (type === "dog") {

            if (pets[i].classList.contains("dog")) {
                pets[i].style.display = "block";
            }
            else {
                pets[i].style.display = "none";
            }
        }

        // Show only cats
        else if (type === "cat") {

            if (pets[i].classList.contains("cat")) {
                pets[i].style.display = "block";
            }
            else {
                pets[i].style.display = "none";
            }
        }
    }
}


// This function submits the adoption application.

function submitApplication(event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Get the user's name
    let name = document.getElementById("fullName").value;

    // Display a confirmation message
    if (name !== "") {

        // Go to the confirmation page
        showPage("confirmation");

        // Clear the application form
        document.getElementById("adoptionForm").reset();
    }
}


// Show the homepage when the website opens.

showPage("home");
