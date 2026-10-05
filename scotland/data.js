// SCOTLAND LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)

const scotlandLottoData = {
    results: [
        // Format: { date: "YYYY-MM-DD", draw: XXX, numbers: [X,X,X,X], time: "18:57" }

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
        },
        {
            date: "2026-10-03",
            draw: 504,
            numbers: [9, 2, 1, 3],
            time: "11:30"
        },
        {
            date: "2026-10-02",
            draw: 503,
            numbers: [8, 1, 0, 8],
            time: "11:30"
        },
        {
            date: "2026-10-01",
            draw: 502,
            numbers: [3, 8, 7, 9],
            time: "11:30"
        },
        {
            date: "2026-09-30",
            draw: 501,
            numbers: [4, 9, 6, 8],
            time: "11:30"
        },
        {
            date: "2026-09-29",
            draw: 500,
            numbers: [3, 8, 1, 2],
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
