let accountStatus = 1000;
const withdraw = 100;
const deposit = 100

function takeWithdraw() {
    accountStatus = accountStatus - withdraw;

    const accountText = document.getElementById("account-balance");
    const statusText = document.getElementById("status-message");

    accountText.innerText = accountStatus;

    if (accountStatus > 0) 
        {
            accountText.innerText = accountStatus;
            statusText.innerText = "Money Withdrawn";
        
    }
    else
    {
        accountText.innerText = 0;
        statusText.innerText = "No money to withdraw";
        statusText.style.color = "#f9331d";
        statusText.style.fontweight = "bold";

        document.body.style.backgroundColor = "#Salala";

        document.querySelector("button").disabled = true;
        document.querySelector("button").InnerText = "No Money";

    }
}

function takeDeposit() {
    accountStatus = accountStatus - deposit;

    const accountText = document.getElementById("account-balance");
    const statusText = document.getElementById("status-message");

    accountText.innerText = accountStatus;

    if (accountStatus > 0) 
        {
            accountText.innerText = accountStatus;
            statusText.innerText = "Money Deposited";
        
    }
    
}