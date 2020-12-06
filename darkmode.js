// ------------------------------------------------- DARK MODE -----------------------------

/* Body and Core Elements */
const body = document.querySelector('body');

// Dark Mode Action
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector('button');


// Enable Dark Mode
const enableDarkMode = () => {

    body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled")
}

// Disable Dark Mode
const disableDarkMode = () => {

    body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", null)
}

if (darkMode == "enabled") {
    enableDarkMode();
}

// Desktop Button
darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
})

