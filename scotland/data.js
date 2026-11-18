// SCOTLAND LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)

const scotlandLottoData = {
    results: [
        // Format: { date: "YYYY-MM-DD", draw: XXX, numbers: [X,X,X,X], time: "18:57" }

        {
            date: "2026-11-18",
            draw: 550,
            numbers: [5, 5, 6, 2],
            time: "11:30"
        },
        {
            date: "2026-11-17",
            draw: 549,
            numbers: [3, 7, 9, 0],
            time: "11:30"
        },
        {
            date: "2026-11-16",
            draw: 548,
            numbers: [7, 3, 0, 2],
            time: "11:30"
        },
        {
            date: "2026-11-15",
            draw: 547,
            numbers: [4, 4, 3, 0],
            time: "11:30"
        },
        {
            date: "2026-11-14",
            draw: 546,
            numbers: [0, 3, 4, 0],
            time: "11:30"
        },
        {
            date: "2026-11-13",
            draw: 545,
            numbers: [8, 9, 4, 4],
            time: "11:30"
        },
        {
            date: "2026-11-12",
            draw: 544,
            numbers: [4, 7, 4, 5],
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
