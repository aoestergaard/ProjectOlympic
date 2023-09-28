let balance = 10000;
let stockPrices = {
    A: 50.00,
    B: 30.00,
    // Add more companies and initial stock prices here
};

function buyStock(company) {
    const stockPrice = stockPrices[company];
    if (balance >= stockPrice) {
        balance -= stockPrice;
        updateBalance();
        // Add logic to manage the player's stock portfolio
        alert(`You bought a share of Company ${company} for $${stockPrice}.`);
    } else {
        alert("Insufficient balance to buy this stock.");
    }
}

function sellStock(company) {
    // Add logic to sell stocks
    alert(`You sold a share of Company ${company}.`);
}

function updateBalance() {
    document.getElementById("balance").textContent = balance.toFixed(2);
}

// Add more functions and game mechanics as needed