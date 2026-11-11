// SCOTLAND LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)

const scotlandLottoData = {
    results: [
        // Format: { date: "YYYY-MM-DD", draw: XXX, numbers: [X,X,X,X], time: "18:57" }

        {
            date: "2026-11-11",
            draw: 543,
            numbers: [1, 1, 5, 2],
            time: "11:30"
        },
        {
            date: "2026-11-10",
            draw: 542,
            numbers: [2, 4, 5, 3],
            time: "11:30"
        },
        {
            date: "2026-11-09",
            draw: 541,
            numbers: [1, 6, 9, 0],
            time: "11:30"
        },
        {
            date: "2026-11-08",
            draw: 540,
            numbers: [9, 4, 4, 6],
            time: "11:30"
        },
        {
            date: "2026-11-07",
            draw: 539,
            numbers: [2, 1, 5, 8],
            time: "11:30"
        },
        {
            date: "2026-11-06",
            draw: 538,
            numbers: [8, 6, 3, 1],
            time: "11:30"
        },
        {
            date: "2026-11-05",
            draw: 537,
            numbers: [3, 8, 7, 8],
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
