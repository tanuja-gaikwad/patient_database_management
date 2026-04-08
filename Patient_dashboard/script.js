
// Load default section
showSection("patients");

// Function to switch sections
function showSection(section) {

  const content = document.getElementById("content");
  const title = document.getElementById("title");

  // PATIENTS
  if (section === "patients") {
    title.innerText = "Patient Details";

    content.innerHTML = `
      <div class="cards">

        <div class="card">
          <h3>Jessica Taylor</h3>
          <p><strong>Age:</strong> 28</p>
          <p><strong>Gender:</strong> Female</p>
          <p><strong>Status:</strong> <span style="color:green;">Healthy</span></p>
        </div>

        <div class="card">
          <h3>Blood Pressure</h3>
          <canvas id="bpChart"></canvas>
        </div>

      </div>
    `;

    loadChart();
  }

  // REPORTS
  if (section === "reports") {
    title.innerText = "Reports";

    content.innerHTML = `
      <div class="card">
        <h3>Medical Reports</h3>
        <ul>
          <li>✔ Blood Test - Normal</li>
          <li>✔ Heart Checkup - Good</li>
          <li>✔ Sugar Level - Normal</li>
        </ul>
      </div>
    `;
  }

  // SETTINGS
  if (section === "settings") {
    title.innerText = "Settings";

    content.innerHTML = `
      <div class="card">
        <h3>Settings</h3>
        <p>🔔 Notifications: Enabled</p>
        <p>🌙 Dark Mode: Disabled</p>
        <button onclick="alert('Settings Saved')">Save Settings</button>
      </div>
    `;
  }
}


// Chart Function
function loadChart() {
  const ctx = document.getElementById("bpChart");

  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["2019", "2020", "2021", "2022", "2023"],
      datasets: [
        {
          label: "Systolic",
          data: [120, 125, 130, 128, 135],
          borderWidth: 2
        },
        {
          label: "Diastolic",
          data: [80, 82, 85, 84, 88],
          borderWidth: 2
        }
      ]
    },
    options: {
      responsive: true
    }
  });
}