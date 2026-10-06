const checklist = [
    "Wear Garnet and Black",
    "Bring Carolina Card",
    "Hydrate!"
];

const displayList = document.getElementById("checklist-display");

function renderList() {
    
    
    displayList.innerHTML = "";

    
    for (let i = 0; i < checklist.length; i++) {
        
        displayList.innerHTML += "<li>" + checklist[i] + "</li>";
    }
}


function addItem() {
    

    const inputBox = document.getElementById("newItem");
    const newItemText = inputBox.value;


    if (newItemText !== "") {
        
        checklist.push(newItemText);
        
        renderList();
        
        inputBox.value = "";
    }
}

renderList();