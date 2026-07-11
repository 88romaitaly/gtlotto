// ALBANIA LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)
// Draw time: 14:00 GMT (21:00 WIB converted)

const albaniaLottoData = {
    // Array of results - MAX 30 ENTRIES
    results: [

        {
            date: "2026-07-11",
            draw: 433,
            numbers: [2, 0, 2, 0],
            time: "14:00"
        },
        {
            date: "2026-07-10",
            draw: 432,
            numbers: [8, 5, 0, 2],
            time: "14:00"
        },
        {
            date: "2026-07-09",
            draw: 431,
            numbers: [1, 0, 1, 8],
            time: "14:00"
        },
        {
            date: "2026-07-08",
            draw: 430,
            numbers: [5, 8, 3, 8],
            time: "14:00"
        },
        {
            date: "2026-07-07",
            draw: 429,
            numbers: [2, 0, 0, 6],
            time: "14:00"
        },
        {
            date: "2026-07-06",
            draw: 428,
            numbers: [7, 3, 3, 8],
            time: "14:00"
        },
        {
            date: "2026-07-05",
            draw: 427,
            numbers: [1, 2, 1, 7],
            time: "14:00"
        },
        {
            date: "2026-07-04",
            draw: 426,
            numbers: [8, 3, 5, 1],
            time: "14:00"
        },
        {
            date: "2026-07-03",
            draw: 425,
            numbers: [4, 5, 4, 6],
            time: "14:00"
        }
        // IMPORTANT: Keep only 30 entries maximum
        // Add new results at the TOP, remove from bottom if needed
    ]
};

// Helper function to ensure we only keep last 30 entries
function maintainDataLimit() {
    if (albaniaLottoData.results.length > 30) {
        albaniaLottoData.results = albaniaLottoData.results.slice(0, 30);
    }
}

// Call this initially
maintainDataLimit();
