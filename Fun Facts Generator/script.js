// script.js
const funFacts = [
    "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.",
    "A day on Venus is longer than a year on Venus. It takes 243 Earth days to rotate once, but only 225 Earth days to orbit the Sun.",
    "Bananas are berries, but strawberries aren't.",
    "Octopuses have three hearts.",
    "The Eiffel Tower can be 15 cm taller during the summer due to thermal expansion of the metal.",
    "There are more stars in the universe than grains of sand on all the Earth's beaches.",
    "A group of flamingos is called a 'flamboyance'.",
    "Wombat poop is cube-shaped.",
    "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
    "Some cats are allergic to humans."
];

function generateFunFact() {
    const factElement = document.getElementById('fact');
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    factElement.classList.remove('show');
    setTimeout(() => {
        factElement.textContent = randomFact;
        factElement.classList.add('show');
    }, 100); // Delay to allow CSS transition
}
