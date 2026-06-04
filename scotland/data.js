// SCOTLAND LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)

const scotlandLottoData = {
    results: [
        // Format: { date: "YYYY-MM-DD", draw: XXX, numbers: [X,X,X,X], time: "18:57" }

        
        {
            date: "2026-06-04,
            draw: 383,
            numbers: [9, 6, 2, 8],
            time: "11:30"
        },
        {
            date: "2026-06-03,
            draw: 382,
            numbers: [3, 4, 5, 7],
            time: "11:30"
        },
        {
            date: "2026-06-02,
            draw: 381,
            numbers: [4, 1, 4, 0],
            time: "11:30"
        },
        {
            date: "2026-06-01,
            draw: 380,
            numbers: [9, 9, 1, 0],
            time: "11:30"
        },
        {
            date: "2026-05-31,
            draw: 379,
            numbers: [3, 5, 0, 8],
            time: "11:30"
        },
        {
            date: "2026-05-30,
            draw: 378,
            numbers: [8, 8, 5, 6],
            time: "11:30"
        },
        {
            date: "2026-05-29,
            draw: 377,
            numbers: [4, 6, 5, 1],
            time: "11:30"
        },
        {
            date: "2026-05-28,
            draw: 376,
            numbers: [9, 7, 2, 7],
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
