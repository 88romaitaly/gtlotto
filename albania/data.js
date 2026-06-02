// ALBANIA LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)
// Draw time: 14:00 GMT (21:00 WIB converted)

const albaniaLottoData = {
    // Array of results - MAX 30 ENTRIES
    results: [

        {
            date: "2026-06-02",
            draw: 394,
            numbers: [4, 4, 9, 2],
            time: "14:00"
        },
        {
            date: "2026-06-01",
            draw: 393,
            numbers: [2, 2, 5, 5],
            time: "14:00"
        },
        {
            date: "2026-05-31",
            draw: 392,
            numbers: [1, 3, 1, 1],
            time: "14:00"
        },
        {
            date: "2026-05-30",
            draw: 391,
            numbers: [5, 4, 7, 1],
            time: "14:00"
        },
        {
            date: "2026-05-29",
            draw: 390,
            numbers: [7, 5, 2, 8],
            time: "14:00"
        },
        {
            date: "2026-05-28",
            draw: 389,
            numbers: [6, 6, 2, 1],
            time: "14:00"
        },
        {
            date: "2026-05-27",
            draw: 388,
            numbers: [3, 0, 6, 2],
            time: "14:00"
        },
        {
            date: "2026-05-26",
            draw: 387,
            numbers: [2, 9, 0, 8],
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
