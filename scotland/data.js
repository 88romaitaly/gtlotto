// SCOTLAND LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)

const scotlandLottoData = {
    results: [
        // Format: { date: "YYYY-MM-DD", draw: XXX, numbers: [X,X,X,X], time: "18:57" }

        
        {
            date: "2026-08-18",
            draw: 458,
            numbers: [0, 3, 9, 4],
            time: "11:30"
        },
        {
            date: "2026-08-17",
            draw: 457,
            numbers: [7, 8, 2, 7],
            time: "11:30"
        },
        {
            date: "2026-08-16",
            draw: 456,
            numbers: [2, 8, 1, 5],
            time: "11:30"
        },
        {
            date: "2026-08-15",
            draw: 455,
            numbers: [6, 5, 0, 6],
            time: "11:30"
        },
        {
            date: "2026-08-14",
            draw: 454,
            numbers: [1, 2, 2, 3],
            time: "11:30"
        },
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
