// ALBANIA LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)
// Draw time: 14:00 GMT (21:00 WIB converted)

const albaniaLottoData = {
    // Array of results - MAX 30 ENTRIES
    results: [

        {
            date: "2026-10-10",
            draw: 614,
            numbers: 9, 3, 5, 6],
            time: "14:00"
        },
        {
            date: "2026-10-09",
            draw: 613,
            numbers: 6, 7, 4, 0],
            time: "14:00"
        },
        {
            date: "2026-10-08",
            draw: 612,
            numbers: 1, 3, 8, 4],
            time: "14:00"
        },
        {
            date: "2026-10-07",
            draw: 611,
            numbers: 0, 9, 1, 7],
            time: "14:00"
        },
        {
            date: "2026-10-06",
            draw: 610,
            numbers: 9, 1, 3, 6],
            time: "14:00"
        },
        {
            date: "2026-10-05",
            draw: 609,
            numbers: 5, 2, 9, 8],
            time: "14:00"
        },
        {
            date: "2026-10-04",
            draw: 608,
            numbers: 6, 9, 2, 5],
            time: "14:00"
        },
        {
            date: "2026-10-03",
            draw: 607,
            numbers: 5, 8, 1, 4],
            time: "14:00"
        },
        {
            date: "2026-10-02",
            draw: 606,
            numbers: 3, 2, 7, 4],
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
