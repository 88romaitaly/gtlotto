// SCOTLAND LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)

const scotlandLottoData = {
    results: [
        // Format: { date: "YYYY-MM-DD", draw: XXX, numbers: [X,X,X,X], time: "18:57" }

        
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
        },
        {
            date: "2026-07-08",
            draw: 417,
            numbers: [2, 3, 1, 8],
            time: "11:30"
        },
        {
            date: "2026-07-07",
            draw: 416,
            numbers: [8, 6, 0, 6],
            time: "11:30"
        },
        {
            date: "2026-07-06",
            draw: 415,
            numbers: [7, 0, 3, 1],
            time: "11:30"
        },
        {
            date: "2026-07-05",
            draw: 414,
            numbers: [8, 7, 4, 1],
            time: "11:30"
        },
        {
            date: "2026-07-04",
            draw: 413,
            numbers: [1, 7, 8, 8],
            time: "11:30"
        },
        {
            date: "2026-07-03",
            draw: 412,
            numbers: [6, 5, 1, 8],
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
