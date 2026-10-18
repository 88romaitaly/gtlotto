// SCOTLAND LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)

const scotlandLottoData = {
    results: [
        // Format: { date: "YYYY-MM-DD", draw: XXX, numbers: [X,X,X,X], time: "18:57" }

        {
            date: "2026-10-18",
            draw: 519,
            numbers: [0, 3, 6, 9],
            time: "11:30"
        },
        {
            date: "2026-10-17",
            draw: 518,
            numbers: [5, 4, 7, 1],
            time: "11:30"
        },
        {
            date: "2026-10-16",
            draw: 517,
            numbers: [4, 3, 6, 9],
            time: "11:30"
        },
        {
            date: "2026-10-15",
            draw: 516,
            numbers: [3, 2, 7, 8],
            time: "11:30"
        },
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
