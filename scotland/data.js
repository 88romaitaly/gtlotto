// SCOTLAND LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)

const scotlandLottoData = {
    results: [
        // Format: { date: "YYYY-MM-DD", draw: XXX, numbers: [X,X,X,X], time: "18:57" }

        
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
        },
        {
            date: "2026-08-30",
            draw: 470,
            numbers: [1, 1, 3, 7],
            time: "11:30"
        },
        {
            date: "2026-08-29",
            draw: 469,
            numbers: [1, 8, 1, 6],
            time: "11:30"
        },
        {
            date: "2026-08-28",
            draw: 468,
            numbers: [5, 2, 3, 4],
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
