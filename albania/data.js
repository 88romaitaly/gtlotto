// ALBANIA LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)
// Draw time: 14:00 GMT (21:00 WIB converted)

const albaniaLottoData = {
    // Array of results - MAX 30 ENTRIES
    results: [

        {
            date: "2026-07-03",
            draw: 425,
            numbers: [4, 5, 4, 6],
            time: "14:00"
        },
        {
            date: "2026-07-02",
            draw: 424,
            numbers: [0, 4, 6, 5],
            time: "14:00"
        },
        {
            date: "2026-07-01",
            draw: 423,
            numbers: [1, 1, 5, 6],
            time: "14:00"
        },
        {
            date: "2026-06-30",
            draw: 422,
            numbers: [3, 2, 0, 8],
            time: "14:00"
        },
        {
            date: "2026-06-29",
            draw: 421,
            numbers: [9, 6, 2, 1],
            time: "14:00"
        },
        {
            date: "2026-06-28",
            draw: 420,
            numbers: [8, 3, 5, 1],
            time: "14:00"
        },
        {
            date: "2026-06-27",
            draw: 419,
            numbers: [3, 4, 2, 3],
            time: "14:00"
        },
        {
            date: "2026-06-26",
            draw: 418,
            numbers: [2, 3, 5, 7],
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
