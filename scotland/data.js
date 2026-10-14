// SCOTLAND LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)

const scotlandLottoData = {
    results: [
        // Format: { date: "YYYY-MM-DD", draw: XXX, numbers: [X,X,X,X], time: "18:57" }

        {
            date: "2026-10-14",
            draw: 515,
            numbers: [2, 1, 5, 6],
            time: "11:30"
        },
        {
            date: "2026-10-13",
            draw: 514,
            numbers: [1, 0, 4, 4],
            time: "11:30"
        },
        {
            date: "2026-10-12",
            draw: 513,
            numbers: [3, 5, 2, 6],
            time: "11:30"
        },
        {
            date: "2026-10-11",
            draw: 512,
            numbers: [3, 2, 9, 8],
            time: "11:30"
        },
        {
            date: "2026-10-10",
            draw: 511,
            numbers: [2, 4, 8, 8],
            time: "11:30"
        },
        {
            date: "2026-10-09",
            draw: 510,
            numbers: [9, 2, 6, 4],
            time: "11:30"
        },
        {
            date: "2026-10-08",
            draw: 509,
            numbers: [8, 0, 0, 1],
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
