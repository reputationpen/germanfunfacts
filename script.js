// JavaScript code to fetch random fun fact from funfacts.txt file
const funFactElement = document.getElementById("fun-fact");

// Fetch the fun facts file and display a random line
fetch("funfacts.txt")
    .then(response => response.text())
    .then(data => {
        const funFacts = data.split("\n");
        const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
        funFactElement.textContent = randomFact;
    })
    .catch(error => {
        console.error("Error fetching fun facts:", error);
        funFactElement.textContent = "Failed to fetch fun fact. Please try again later.";
    });
