let accountStatus = 1000;
const withdrawal = 10;

function takeDamage() {
    accountStatus = accountStatus - withdrawal;

    const healthText = document.getElementById("account-balance");
    const statusText = document.getElementById("status-message");

    healthText.innerText = playerHealth;

    if (accountStatus > 0) 
        {
            healthText.innerText = accountStatus;
            statusText.innerText = "No money to withdraw";
        
    }
    else
    {
        healthText.innerText = 0;
        statusText.innerText = "No money to withdraw";
        statusText.style.color = "#f9331d";
        statusText.style.fontweight = "bold";

        document.body.style.backgroundColor = "#Salala";

        document.querySelector("button").disabled = true;
        document.querySelector("button").InnerText = "Dead";

    }
}