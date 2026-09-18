// SCOTLAND LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)

const scotlandLottoData = {
    results: [
        // Format: { date: "YYYY-MM-DD", draw: XXX, numbers: [X,X,X,X], time: "18:57" }

        
        {
            date: "2026-09-18",
            draw: 489,
            numbers: [2, 8, 7, 4],
            time: "11:30"
        },
        {
            date: "2026-09-17",
            draw: 488,
            numbers: [1, 7, 6, 3],
            time: "11:30"
        },
        {
            date: "2026-09-16",
            draw: 487,
            numbers: [9, 6, 5, 2],
            time: "11:30"
        },
        {
            date: "2026-09-15",
            draw: 486,
            numbers: [8, 5, 4, 1],
            time: "11:30"
        },
        {
            date: "2026-09-14",
            draw: 485,
            numbers: [7, 3, 9, 1],
            time: "11:30"
        },
        {
            date: "2026-09-13",
            draw: 484,
            numbers: [6, 2, 8, 9],
            time: "11:30"
        }
        // IMPORTANT: Keep only 30 entries maximum
        // Add new results at the TOP, remove from bottom if needed
    ]
};

// Helper function to ensure we only keep last 30 entries
function maintainDataLimit() {
    if (scotlandLottoData.results.length > 30) {
        scotlandLottoData.results = scotlandLottoData.results.slice(0, 30);
    }
}

// Call this initially
maintainDataLimit();
