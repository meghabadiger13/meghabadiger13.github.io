let linesOfCode = 0;

let clickPower = 1;
let upgradeCost = 50;

// New click power upgrade variables
let upgradeProCost = 300;
let clickPowerProBonus = 5;

let interns = 0;
let internCost = 100;

// New auto-clicking upgrade variables
let seniors = 0;
let seniorCost = 500;

function writeCode()
{
    linesOfCode = linesOfCode + clickPower;
    updateScreen();
}

function buyKeyboard()
{
    if(linesOfCode >= upgradeCost)
    {
        linesOfCode = linesOfCode - upgradeCost;
        clickPower = clickPower + 1;
        upgradeCost = Math.floor(upgradeCost * 1.5);
        updateScreen();
    }
}

// New Click Power Upgrade Function
function buyKeyboardPro()
{
    if(linesOfCode >= upgradeProCost)
    {
        linesOfCode = linesOfCode - upgradeProCost;
        clickPower = clickPower + clickPowerProBonus;
        upgradeProCost = Math.floor(upgradeProCost * 1.5);
        updateScreen();
    }
}

function buyIntern()
{
    if(linesOfCode >= internCost)
    {
        linesOfCode = linesOfCode - internCost;
        interns = interns + 1; // Fixed bug from original code
        internCost = Math.floor(internCost * 1.5);
        updateScreen();
    }
}

// New Auto-Clicker Upgrade Function
function buySenior()
{
    if(linesOfCode >= seniorCost)
    {
        linesOfCode = linesOfCode - seniorCost;
        seniors = seniors + 1;
        seniorCost = Math.floor(seniorCost * 1.5);
        updateScreen();
    }
}

function updateScreen()
{
    document.getElementById("score-display").innerText = linesOfCode + " lines of code";

    document.getElementById("power-display").innerText = clickPower;
    document.getElementById("cost-display").innerText = upgradeCost;
    document.getElementById("cost-pro-display").innerText = upgradeProCost;
    
    document.getElementById("intern-display").innerText = interns;
    document.getElementById("intern-display-cost").innerText = internCost;

    document.getElementById("senior-display").innerText = seniors;
    document.getElementById("senior-display-cost").innerText = seniorCost;
}

setInterval(function(){
    let totalAutoProduction = interns + (seniors * 5); // Interns give 1, Seniors give 5
    if(totalAutoProduction > 0)
    {
        linesOfCode = linesOfCode + totalAutoProduction;
        updateScreen();
    }
},
1000
);