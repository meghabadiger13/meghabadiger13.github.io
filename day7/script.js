let playerHealth = 100;
const damageAmount = 30;

function takeDamage() {
    playerHealth = playerHealth - damageAmount;

    const healthText = document.getElementById("health-disparity");
    const statusText = document.getElementbyId("status-message");

    healthText.innerText = playerHealth;
}