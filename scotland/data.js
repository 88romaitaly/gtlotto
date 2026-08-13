// SCOTLAND LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)

const scotlandLottoData = {
    results: [
        // Format: { date: "YYYY-MM-DD", draw: XXX, numbers: [X,X,X,X], time: "18:57" }

        
        {
            date: "2026-08-13",
            draw: 453,
            numbers: [5, 4, 9, 7],
            time: "11:30"
        },
        {
            date: "2026-08-12",
            draw: 452,
            numbers: [1, 2, 3, 2],
            time: "11:30"
        },
        {
            date: "2026-08-11",
            draw: 451,
            numbers: [2, 6, 9, 5],
            time: "11:30"
        },
        {
            date: "2026-08-10",
            draw: 450,
            numbers: [6, 9, 8, 3],
            time: "11:30"
        },
        {
            date: "2026-08-09",
            draw: 449,
            numbers: [3, 4, 6, 9],
            time: "11:30"
        },
        {
            date: "2026-08-08",
            draw: 448,
            numbers: [3, 9, 0, 2],
            time: "11:30"
        },
        {
            date: "2026-08-07",
            draw: 447,
            numbers: [2, 8, 0, 3],
            time: "11:30"
        },
        {
            date: "2026-08-06",
            draw: 446,
            numbers: [1, 7, 6, 4],
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
