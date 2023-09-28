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
            <img id="graph-image" src="example_graph.png" alt="Returns Over 5 Years">
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

    // Get a reference to the img tag
    const graphImage = document.getElementById("graph-image");

    // Generate a random number between 1 and 3 (or adjust the range as needed)
    const randomGraphNumber = Math.floor(Math.random() * 3) + 1;

    // Set the src attribute of the img tag to a random graph image
    graphImage.src = `graph${randomGraphNumber}.png`; // Replace with your actual image names
}


