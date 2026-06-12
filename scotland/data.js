// SCOTLAND LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)

const scotlandLottoData = {
    results: [
        // Format: { date: "YYYY-MM-DD", draw: XXX, numbers: [X,X,X,X], time: "18:57" }

        
        {
            date: "2026-06-12,
            draw: 391,
            numbers: [9, 6, 9, 7],
            time: "11:30"
        },
        {
            date: "2026-06-11,
            draw: 390,
            numbers: [1, 2, 0, 8],
            time: "11:30"
        },
        {
            date: "2026-06-10,
            draw: 389,
            numbers: [2, 5, 5, 0],
            time: "11:30"
        },
        {
            date: "2026-06-09,
            draw: 388,
            numbers: [6, 9, 4, 1],
            time: "11:30"
        },
        {
            date: "2026-06-08,
            draw: 387,
            numbers: [7, 0, 6, 2],
            time: "11:30"
        },
        {
            date: "2026-06-07,
            draw: 386,
            numbers: [3, 7, 4, 2],
            time: "11:30"
        },
        {
            date: "2026-06-06,
            draw: 385,
            numbers: [4, 1, 6, 4],
            time: "11:30"
        },
        {
            date: "2026-06-05,
            draw: 384,
            numbers: [2, 5, 8, 4],
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
