// JavaScript for tab switching
document.getElementById("dashboard").addEventListener("click", function () {
    loadDashboardContent();
});

function loadDashboardContent() {
    const dashboardContent = document.getElementById("dashboard");
    dashboardContent.innerHTML = `
      function loadDashboardContent() {
    const dashboardContent = document.getElementById("dashboard");
    dashboardContent.innerHTML = `
        <h2>Dashboard</h2>
        <div class="dashboard-graph">
            <!-- Example graph here -->
            <img src="example_graph.png" alt="Returns Over 5 Years">
        </div>
        <div class="dashboard-table">
            <table>
                <tr>
                    <th># of Companies Analyzed</th>
                    <th># of Companies Bought</th>
                    <th>Current Fund Multiple</th>
                </tr>
                <tr>
                    <td>50</td>
                    <td>15</td>
                    <td>2.5x</td>
                </tr>
            </table>
        </div>
    `;
}
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
