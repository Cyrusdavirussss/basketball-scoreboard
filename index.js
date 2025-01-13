// Select elements
let homeCountEl = document.getElementById("home-count-el");
let guestCountEl = document.getElementById("guest-count-el");
let newGameButton = document.getElementById("new-game-btn-el");

let homeCount = 0;
let guestCount = 0;

// Function to increment HOME score
function incrementHome(value) {
    homeCount += value;
    homeCountEl.textContent = homeCount;
    
    // Toggle "leader" class based on current scores
    homeCountEl.classList.toggle("leader", homeCount > guestCount);
    guestCountEl.classList.toggle("leader", guestCount > homeCount);
}

// Function to increment GUEST score
function incrementGuest(value) {
    guestCount += value;
    guestCountEl.textContent = guestCount;
    
    // Toggle "leader" class based on current scores
    homeCountEl.classList.toggle("leader", homeCount > guestCount);
    guestCountEl.classList.toggle("leader", guestCount > homeCount);
}

// newGameButton logic:
function startNewGame() {
    homeCount = 0
    guestCount = 0
    
    homeCountEl.textContent = homeCount
    guestCountEl.textContent = guestCount
    homeCountEl.classList.remove("leader")
    guestCountEl.classList.remove("leader")
}


// Key Logic:
// The if-else structure ensures that only one score is highlighted at a time, depending on which team is leading.

// If the scores are equal, the highlight is removed from both scores because neither team is winning.

// starNewGame logic is reset the variables homeCount and guestCount back to 0, updated it via textContent and also used the homeCountEl.classList.remove the CSS class leader so when it resets the screen goes back to 0 :) 


