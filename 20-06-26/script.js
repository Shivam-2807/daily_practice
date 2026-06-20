const quotes = [
    "Success is the sum of small efforts repeated daily.",
    "Believe in yourself.",
    "Stay hungry, stay foolish.",
    "Dream big and dare to fail.",
    "Consistency beats talent."
];

const quote = document.querySelector("#quote");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {

    // Generate random index
    const randomIndex = Math.floor(Math.random() * quotes.length);

    // Change quote text
    quote.textContent = quotes[randomIndex];

});