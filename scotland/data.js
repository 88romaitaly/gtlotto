// SCOTLAND LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)

const scotlandLottoData = {
    results: [
        // Format: { date: "YYYY-MM-DD", draw: XXX, numbers: [X,X,X,X], time: "18:57" }

        
        {
            date: "2026-09-11",
            draw: 482,
            numbers: [3, 8, 6, 2],
            time: "11:30"
        },
        {
            date: "2026-09-10",
            draw: 481,
            numbers: [4, 9, 0, 3],
            time: "11:30"
        },
        {
            date: "2026-09-09",
            draw: 480,
            numbers: [7, 6, 1, 2],
            time: "11:30"
        },
        {
            date: "2026-09-08",
            draw: 479,
            numbers: [4, 0, 5, 8],
            time: "11:30"
        },
        {
            date: "2026-09-07",
            draw: 478,
            numbers: [0, 5, 5, 1],
            time: "11:30"
        },
        {
            date: "2026-09-06",
            draw: 477,
            numbers: [8, 7, 2, 7],
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
