// SCOTLAND LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)

const scotlandLottoData = {
    results: [
        // Format: { date: "YYYY-MM-DD", draw: XXX, numbers: [X,X,X,X], time: "18:57" }

        
        {
            date: "2026-09-05",
            draw: 476,
            numbers: [8, 1, 2, 7],
            time: "11:30"
        },
        {
            date: "2026-09-04",
            draw: 475,
            numbers: [6, 3, 9, 2],
            time: "11:30"
        },
        {
            date: "2026-09-03",
            draw: 474,
            numbers: [8, 4, 0, 2],
            time: "11:30"
        },
        {
            date: "2026-09-02",
            draw: 473,
            numbers: [4, 2, 8, 1],
            time: "11:30"
        },
        {
            date: "2026-09-01",
            draw: 472,
            numbers: [0, 4, 9, 2],
            time: "11:30"
        },
        {
            date: "2026-08-31",
            draw: 471,
            numbers: [4, 7, 8, 1],
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
