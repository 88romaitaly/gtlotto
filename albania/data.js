// ALBANIA LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)
// Draw time: 14:00 GMT (21:00 WIB converted)

const albaniaLottoData = {
    // Array of results - MAX 30 ENTRIES
    results: [

        {
            date: "2026-08-11",
            draw: 554,
            numbers: [7, 6, 1, 2],
            time: "14:00"
        },
        {
            date: "2026-08-10",
            draw: 553,
            numbers: [6, 9, 1, 3],
            time: "14:00"
        },
        {
            date: "2026-08-09",
            draw: 552,
            numbers: [1, 5, 4, 5],
            time: "14:00"
        },
        {
            date: "2026-08-08",
            draw: 551,
            numbers: [8, 5, 5, 2],
            time: "14:00"
        },
        {
            date: "2026-08-07",
            draw: 550,
            numbers: [2, 1, 9, 1],
            time: "14:00"
        },
        {
            date: "2026-08-06",
            draw: 549,
            numbers: [6, 8, 5, 9],
            time: "14:00"
        },
        {
            date: "2026-08-05",
            draw: 458,
            numbers: [7, 3, 4, 1],
            time: "14:00"
        },
        {
            date: "2026-08-04",
            draw: 457,
            numbers: [3, 6, 4, 4],
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
