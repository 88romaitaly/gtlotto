// SCOTLAND LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)

const scotlandLottoData = {
    results: [
        // Format: { date: "YYYY-MM-DD", draw: XXX, numbers: [X,X,X,X], time: "18:57" }

        
        {
            date: "2026-06-21",
            draw: 400,
            numbers: [8, 3, 1, 1],
            time: "11:30"
        },
        {
            date: "2026-06-20",
            draw: 399,
            numbers: [7, 3, 1, 9],
            time: "11:30"
        },
        {
            date: "2026-06-19",
            draw: 398,
            numbers: [8, 7, 3, 0],
            time: "11:30"
        },
        {
            date: "2026-06-18",
            draw: 397,
            numbers: [1, 3, 9, 7],
            time: "11:30"
        },
        {
            date: "2026-06-17",
            draw: 396,
            numbers: [2, 5, 1, 2],
            time: "11:30"
        },
        {
            date: "2026-06-16",
            draw: 395,
            numbers: [1, 0, 5, 0],
            time: "11:30"
        },
        {
            date: "2026-06-15",
            draw: 394,
            numbers: [6, 6, 0, 7],
            time: "11:30"
        },
        {
            date: "2026-06-14",
            draw: 393,
            numbers: [8, 0, 8, 7],
            time: "11:30"
        },
        {
            date: "2026-06-13",
            draw: 392,
            numbers: [0, 2, 2, 1],
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
