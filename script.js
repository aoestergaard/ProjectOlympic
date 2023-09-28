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

// Define an array of example company data
const companiesData = [
    {
        name: "Company A",
        industry: "Technology",
        description: "A technology company specializing in software development.",
        revenue: "$1 billion",
        ebitda: "$100 million",
    },
    {
        name: "Company B",
        industry: "Finance",
        description: "A financial institution providing banking services.",
        revenue: "$2 billion",
        ebitda: "$300 million",
    },
    // Add more example company data as needed
];

// Load the Company Universe content when the tab is clicked
document.getElementById("company-tab").addEventListener("click", function () {
    loadCompanyUniverseContent();
});

function loadCompanyUniverseContent() {
    const companyUniverseContent = document.getElementById("company-universe-content");
    
    // Create tabs for each company
    const tabsHTML = companiesData.map((company, index) => {
        return `<div class="company-tab" id="company-tab-${index}">${company.name}</div>`;
    }).join("");

    companyUniverseContent.innerHTML = `
        <h2>Company Universe</h2>
        <div class="company-tabs">
            ${tabsHTML}
        </div>
        <div class="company-details">
            <!-- Company details will be displayed here -->
        </div>
    `;

    // Add event listeners to display company details when a tab is clicked
    companiesData.forEach((company, index) => {
        const tab = document.getElementById(`company-tab-${index}`);
        tab.addEventListener("click", function () {
            displayCompanyDetails(company);
        });
    });
}

// Function to display company details
function displayCompanyDetails(company) {
    const companyDetailsContainer = document.querySelector(".company-details");
    companyDetailsContainer.innerHTML = `
        <h3>Name: ${company.name}</h3>
        <p>Industry: ${company.industry}</p>
        <p>Brief Description: ${company.description}</p>
        <p>Revenue: ${company.revenue}</p>
        <p>EBITDA: ${company.ebitda}</p>
    `;
}

