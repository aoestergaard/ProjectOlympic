// JavaScript for tab switching
document.getElementById("dashboard-button").addEventListener("click", function () {
    loadDashboardContent();
});

function loadDashboardContent() {
    const dashboardContent = document.getElementById("dashboard-content");
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

