// SCOTLAND LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)

const scotlandLottoData = {
    results: [
        // Format: { date: "YYYY-MM-DD", draw: XXX, numbers: [X,X,X,X], time: "18:57" }

        
        {
            date: "2026-07-16",
            draw: 425,
            numbers: [9, 9, 9, 5],
            time: "11:30"
        },
        {
            date: "2026-07-15",
            draw: 424,
            numbers: [5, 1, 7, 6],
            time: "11:30"
        },
        {
            date: "2026-07-14",
            draw: 423,
            numbers: [8, 1, 7, 8],
            time: "11:30"
        },
        {
            date: "2026-07-13",
            draw: 422,
            numbers: [8, 5, 4, 3],
            time: "11:30"
        },
        {
            date: "2026-07-12",
            draw: 421,
            numbers: [1, 7, 0, 8],
            time: "11:30"
        },
        {
            date: "2026-07-11",
            draw: 420,
            numbers: [6, 7, 1, 8],
            time: "11:30"
        },
        {
            date: "2026-07-10",
            draw: 419,
            numbers: [2, 0, 0, 3],
            time: "11:30"
        },
        {
            date: "2026-07-09",
            draw: 418,
            numbers: [0, 0, 2, 7],
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
