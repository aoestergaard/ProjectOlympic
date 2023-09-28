// JavaScript for tab switching
document.getElementById("dashboard").addEventListener("click", function () {
    loadDashboardContent();
});

function loadDashboardContent() {
    const dashboardContent = document.getElementById("dashboard");
    dashboardContent.innerHTML = `
        <!-- Your Dashboard content here -->
    `;
}


document.getElementById("company-tab").addEventListener("click", function () {
    loadCompanyUniverseContent();
});

document.getElementById("progress-tab").addEventListener("click", function () {
    loadProgressTrackerContent();
});

document.getElementById("resources-tab").addEventListener("click", function () {
    loadResourcesContent();
});

// Functions to load content for each tab
function loadDashboardContent() {
    // Load dashboard content here
}

function loadCompanyUniverseContent() {
    // Load company universe content here
}

function loadProgressTrackerContent() {
    // Load progress tracker content here
}

function loadResourcesContent() {
    // Load resources content here
}
