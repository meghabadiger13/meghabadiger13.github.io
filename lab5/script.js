let accountStatus = 1000;
const withdrawAmount = 100;
const depositAmount = 100;

function takeWithdraw() {
    accountStatus = accountStatus - withdrawAmount;

      const accountText = document.getElementById("account-balance");
      const statusText = document.getElementById("status-message");

    accountText.innerText = accountStatus;

    if (accountStatus > 0) {
        accountText.innerText = accountStatus;
        statusText.innerText = "Money Withdrawn";
    } 
    else {
        accountText.innerText = 0;
        accountStatus = 0;
        statusText.innerText = "No money to withdraw";
        statusText.style.color = "#f9331d";
        statusText.style.fontWeight = "bold";

        document.body.style.backgroundColor = "#5a1a1a";

        
        document.querySelector("button").disabled = true;
        document.querySelector("button").innerText = "Add Money";

    }
}

function takeDeposit() {
    accountStatus = accountStatus + depositAmount;

    const accountText = document.getElementById("account-balance");
    const statusText = document.getElementById("status-message");

    accountText.innerText = accountStatus;

    if (accountStatus > 0) 
        {
            accountText.innerText = accountStatus;
            statusText.innerText = "Money Deposited";
        
    }
    
}