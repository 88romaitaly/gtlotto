// SCOTLAND LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)

const scotlandLottoData = {
    results: [
        // Format: { date: "YYYY-MM-DD", draw: XXX, numbers: [X,X,X,X], time: "18:57" }

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
        },
        {
            date: "2026-10-07",
            draw: 508,
            numbers: [1, 2, 2, 1],
            time: "11:30"
        },
        {
            date: "2026-10-06",
            draw: 507,
            numbers: [2, 2, 9, 6],
            time: "11:30"
        },
        {
            date: "2026-10-05",
            draw: 506,
            numbers: [0, 0, 8, 5],
            time: "11:30"
        },
        {
            date: "2026-10-04",
            draw: 505,
            numbers: [1, 7, 7, 1],
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
