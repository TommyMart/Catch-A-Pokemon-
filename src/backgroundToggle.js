console.log("CSS Theme toggler loaded and running!");

let bodyElement = document.body;
// Assign the root and button to variables
let rootElement = document.documentElement;  // Correct root element selector
let themeToggler = document.getElementById("themeToggler");

// Initial theme index
let currentThemeIndex = 1;

let themes = [
    {
        name: "Ocean",
        properties: {
            position: "fixed",
            top: "0",
            left: "0",
            width: "100vw",
            height: "100vh",
            backgroundImage: 'url("./assets/oceanBackground.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat", // Ensure the image does not repeat
        }
    },
    {
        name: "Forest",
        properties: {
            backgroundImage: 'url("./assets/pokemonforest.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }
    },
    {
        name: "Sky",
        properties: {
            backgroundImage: 'url("./assets/spaceBackground.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }
    }
];

// Function to toggle themes
function toggleTheme() {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;  // Cycle through the themes
    applyTheme(themes[currentThemeIndex]); // Apply the next theme
    themeToggler.innerText = themes[(currentThemeIndex + 1) % themes.length].name;  // Update the button name
}

// Function to apply a theme
function applyTheme(theme) {
    // Apply all the properties
    Object.assign(rootElement.style, theme.properties);
}

// Apply the initial theme and button text when the page loads
applyTheme(themes[currentThemeIndex]);
themeToggler.innerText = themes[(currentThemeIndex + 1) % themes.length].name;

themeToggler.addEventListener("click", toggleTheme);