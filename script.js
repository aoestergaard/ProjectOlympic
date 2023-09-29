<script>
    // Function to hide all tab contents
    function hideAllTabs() {
        const tabs = ["dashboard-content", "company-universe-content", "progress-content"];
        tabs.forEach((tabId) => {
            const tabContent = document.getElementById(tabId);
            tabContent.style.display = "none";
        });
    }

    // Function to load the Dashboard content
    function loadDashboardContent() {
        const dashboardContent = document.getElementById("dashboard-content");
        dashboardContent.style.display = "block";
        dashboardContent.innerHTML = `
            <h2>Dashboard</h2>
            <div class="dashboard-graph">
                <img id="graph-image" src="example_graph.png" alt="Returns Over 5 Years">
            </div>
            <div class="dashboard-table">
                <!-- ... -->
            </div>
        `;

        const graphImage = document.getElementById("graph-image");
        const randomGraphNumber = Math.floor(Math.random() * 3) + 1;
        console.log(`Random Graph Number: ${randomGraphNumber}`);
        graphImage.src = `graph${randomGraphNumber}.png`; // Make sure image files exist
    }

    // Function to load the Company Universe content
    function loadCompanyUniverseContent() {
        const companyUniverseContent = document.getElementById("company-universe-content");

        // Create tabs for each company
        const tabsHTML = companiesData.map((company, index) => {
            return `<div class="company-tab" id="company-tab-${index}">${company.name}</div>`;
        }).join("");

        companyUniverseContent.style.display = "block";
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

    // Function to load the Progress Tracker content
    function loadProgressTrackerContent() {
        const progressTrackerContent = document.getElementById("content");

        progressTrackerContent.innerHTML = `
            <h2>Progress Tracker</h2>
            <div class="progress-wheel">
                <div class="progress-part" id="fund-setup">Fund Setup</div>
                <div class="progress-part" id="source-deals">Source Deals</div>
                <div class="progress-part" id="buy-companies">Buy Companies</div>
                <div class="progress-part" id="value-creation">Value Creation</div>
                <div class="progress-part" id="realize-investments">Realize Investments</div>
            </div>
            <div class="progress-details">
                <!-- Progress details will be displayed here -->
            </div>
        `;

        // Add event listeners to each progress part
        const progressParts = document.querySelectorAll(".progress-part");
        progressParts.forEach((part) => {
            part.addEventListener("click", function () {
                displayProgressDetails(part.id);
            });
        });
    }

    // Function to display progress details
    function displayProgressDetails(progressPart) {
        const progressDetailsContainer = document.querySelector(".progress-details");
        progressDetailsContainer.innerHTML = `
            <h3>${progressPart}</h3>
            <p>Details for ${progressPart} will be displayed here.</p>
        `;
    }

    // Call the loadDashboardContent() function when the page loads (default tab)
    window.onload = function () {
        hideAllTabs(); // Hide all tabs on page load
        loadDashboardContent();
    };
    
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
        {
            name: "Company C",
            industry: "Technology",
            description: "A leading tech company specializing in software development and cloud services.",
            revenue: "$5 billion",
            ebitda: "$800 million",
        },
        {
            name: "Company D",
            industry: "Healthcare",
            description: "A pharmaceutical company focused on innovative treatments for various diseases.",
            revenue: "$4.5 billion",
            ebitda: "$600 million",
        },
        {
            name: "Company E",
            industry: "Retail",
            description: "A global retail giant with a diverse range of consumer products and services.",
            revenue: "$10 billion",
            ebitda: "$1.2 billion",
        },
        {
            name: "Company F",
            industry: "Automotive",
            description: "A leading car manufacturer known for its eco-friendly electric vehicles.",
            revenue: "$7 billion",
            ebitda: "$900 million",
        },
        {
            name: "Company G",
            industry: "Telecommunications",
            description: "A telecommunications company providing cutting-edge mobile and internet services.",
            revenue: "$6 billion",
            ebitda: "$1 billion",
        },
        {
            name: "Company H",
            industry: "Energy",
            description: "An energy company specializing in renewable energy projects and sustainable solutions.",
            revenue: "$8 billion",
            ebitda: "$1.5 billion",
        },
        {
            name: "Company I",
            industry: "Entertainment",
            description: "A media conglomerate producing films, television shows, and digital content.",
            revenue: "$9 billion",
            ebitda: "$1.3 billion",
        },
        {
            name: "Company J",
            industry: "Aerospace",
            description: "An aerospace and defense company known for advanced aircraft and technology.",
            revenue: "$7.5 billion",
            ebitda: "$1.1 billion",
        }
    ];

    // Load the Company Universe content when the tab is clicked
    document.getElementById("company-tab").addEventListener("click", function () {
        loadCompanyUniverseContent();
    });

    // Load the Progress Tracker content when the tab is clicked
    document.getElementById("progress-tab").addEventListener("click", function () {
        loadProgressTrackerContent();
    });
</script>
