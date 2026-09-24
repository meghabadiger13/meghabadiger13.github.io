let accountStatus = 1000;
const withdrawal = 10;

function takeDamage() {
    accountStatus = accountStatus - withdrawal;

    const healthText = document.getElementById("health-disparity");
    const statusText = document.getElementById("status-message");

    healthText.innerText = playerHealth;

    if (playerHealth > 0) 
        {
            healthText.innerText = playerHealth;
            statusText.innerText = "You've been hit!";
        
    }
    else
    {
        healthText.innerText = 0;
        statusText.innerText = "Game Over!";
        statusText.style.color = "#f9331d";
        statusText.style.fontweight = "bold";

        document.body.style.backgroundColor = "#Salala";

        document.querySelector("button").disabled = true;
        document.querySelector("button").InnerText = "Dead";

    }
}