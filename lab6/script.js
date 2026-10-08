
// ========================================
// UNIVERSITY OF SOUTH CAROLINA
// STUDENT PORTAL
// ========================================


// ========================================
// PAGE CONTENT
// Edit this section to change the text
// displayed on each page.
// ========================================

const pages = {

    // HOME PAGE
    home: {
        label: "WELCOME TO CAROLINA",

        title: "Student Portal",

        description:
            "Welcome to the landing page. Navigate to the side of the screen for more options.",

        cardTitle: "Your Carolina Experience",

        cardDescription:
            "Explore campus resources, dining options, and academics all in one place."
    },


    // CAROLINA CASH PAGE
    "carolina-cash": {
        label: "CAMPUS SERVICES",

        title: "Carolina Cash",

        description:
            "Carolina Cash can be used on campus for food or apparel.",

        cardTitle: "Carolina Cash Information",

        cardDescription:
            "Explore your campus spending options and learn more about using Carolina Cash."
    },


    // DINING HALL MENU PAGE
    "dining-hall": {
        label: "CAMPUS DINING",

        title: "Dining Hall Menu",

        description:
            "This is a rotating menu page. On Mondays, pizza will be served.",

        cardTitle: "Campus Dining",

        cardDescription:
            "Discover dining options available to students throughout the week."
    },


    // ACADEMICS PAGE
    academics: {
        label: "ACADEMIC EXCELLENCE",

        title: "Academics",

        description:
            "At UofSC, we offer a variety of courses with various disciplines. Find your path here!",

        cardTitle: "Explore Academics",

        cardDescription:
            "Discover academic opportunities and explore the programs available at the University of South Carolina."
    }

};


// ========================================
// GET HTML ELEMENTS
// ========================================

const pageTitle = document.getElementById("page-title");

const pageDescription = document.getElementById("page-description");

const sectionLabel = document.getElementById("section-label");

const cardTitle = document.getElementById("card-title");

const cardDescription = document.getElementById("card-description");

const navigationButtons = document.querySelectorAll(".nav-button");


// ========================================
// FUNCTION TO CHANGE PAGE CONTENT
// ========================================

function changePage(pageName) {

    // Find the selected page
    const selectedPage = pages[pageName];

    // Stop if page does not exist
    if (!selectedPage) {
        return;
    }

    // Update main heading
    pageTitle.textContent = selectedPage.title;

    // Update main paragraph
    pageDescription.textContent = selectedPage.description;

    // Update section label
    sectionLabel.textContent = selectedPage.label;

    // Update information card
    cardTitle.textContent = selectedPage.cardTitle;

    cardDescription.textContent = selectedPage.cardDescription;


    // ====================================
    // UPDATE ACTIVE BUTTON
    // ====================================

    navigationButtons.forEach(function(button) {

        // Remove active style
        button.classList.remove("active");

        button.removeAttribute("aria-current");

        // Highlight the selected button
        if (button.dataset.page === pageName) {

            button.classList.add("active");

            button.setAttribute("aria-current", "page");

        }

    });

}


// ========================================
// HANDLE URL NAVIGATION
// ========================================

function loadPageFromURL() {

    // Get the page name from the URL
    const pageName = window.location.hash.substring(1);

    // Display selected page or home page
    if (pages[pageName]) {

        changePage(pageName);

    } else {

        changePage("home");

    }

}


// ========================================
// BUTTON CLICK EVENTS
// ========================================

navigationButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Find which button was clicked
        const pageName = button.dataset.page;

        // Update the main content
        changePage(pageName);

    });

});


// ========================================
// DETECT URL CHANGES
// ========================================

window.addEventListener("hashchange", loadPageFromURL);


// ========================================
// LOAD THE WEBSITE
// ========================================

loadPageFromURL();
