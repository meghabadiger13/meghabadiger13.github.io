let accountStatus = 1000;
const withdraw = 10;

function withdraw() {
    accountStatus = accountStatus - withdraw;

    const accountText = document.getElementById("account-balance");
    const statusText = document.getElementById("status-message");

    accountText.innerText = accountStatus;

    if (accountStatus > 0) 
        {
            healthText.innerText = accountStatus;
            statusText.innerText = "Deposit";
        
    }
    else
    {
        healthText.innerText = 0;
        statusText.innerText = "No money to withdraw";
        statusText.style.color = "#f9331d";
        statusText.style.fontweight = "bold";

        document.body.style.backgroundColor = "#Salala";

        document.querySelector("button").disabled = true;
        document.querySelector("button").InnerText = "No Money";

    }
}