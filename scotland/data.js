// SCOTLAND LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)

const scotlandLottoData = {
    results: [
        // Format: { date: "YYYY-MM-DD", draw: XXX, numbers: [X,X,X,X], time: "18:57" }

        {
            date: "2026-10-24",
            draw: 525,
            numbers: [1, 2, 4, 8],
            time: "11:30"
        },
        {
            date: "2026-10-23",
            draw: 524,
            numbers: [8, 9, 3, 2],
            time: "11:30"
        },
        {
            date: "2026-10-22",
            draw: 523,
            numbers: [6, 7, 2, 1],
            time: "11:30"
        },
        {
            date: "2026-10-21",
            draw: 522,
            numbers: [4, 6, 1, 9],
            time: "11:30"
        },
        {
            date: "2026-10-20",
            draw: 521,
            numbers: [4, 5, 0, 8],
            time: "11:30"
        },
        {
            date: "2026-10-19",
            draw: 520,
            numbers: [2, 4, 8, 2],
            time: "11:30"
        },
        {
            date: "2026-10-18",
            draw: 519,
            numbers: [0, 3, 6, 9],
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
