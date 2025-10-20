// --- Search History ---
function getHistory() {
    const history = localStorage.getItem("searchHistory");
    return history ? JSON.parse(history) : [];
}

function saveToHistory(query) {
    let history = getHistory();
    history = history.filter(item => item !== query); // remove duplicates
    history.unshift(query);
    if (history.length > 10) history.pop(); // keep last 10
    localStorage.setItem("searchHistory", JSON.stringify(history));
}

function showAutocomplete(input) {
    const history = getHistory();
    const datalist = document.getElementById("history-list");
    datalist.innerHTML = "";
    history.forEach(item => {
        if (item.toLowerCase().includes(input.toLowerCase())) {
            const option = document.createElement("option");
            option.value = item;
            datalist.appendChild(option);
        }
    });
}

// --- Ask AI Studio ---
async function askQuestion() {
    const input = document.getElementById("question");
    const question = input.value.trim();
    const resDiv = document.getElementById("response");

    if (!question) {
        resDiv.textContent = "Please enter a question!";
        return;
    }

    saveToHistory(question); 
    resDiv.textContent = "Loading...";
    resDiv.style.opacity = 0.6;

    try {
        const response = await fetch("/api/query", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ question })
        });

        const data = await response.json();
        resDiv.textContent = data.response;
        resDiv.style.opacity = 1;
    } catch (error) {
        console.error(error);
        resDiv.textContent = "Error querying AI Studio. Check console.";
        resDiv.style.opacity = 1;
    }
}

async function askQuestion() {
  const question = document.getElementById("question").value;
  const resDiv = document.getElementById("response");

  const response = await fetch("/api/query", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({question})
  });
  const data = await response.json();
  resDiv.textContent = data.response;
}

// Redirect to Stanford resource prompt
function goToResources() {
  window.location.href = "resources.html";
}

// --- Autocomplete on input ---
document.getElementById("question").addEventListener("input", (e) => {
    showAutocomplete(e.target.value);
});