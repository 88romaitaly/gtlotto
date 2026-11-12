// ALBANIA LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)
// Draw time: 14:00 GMT (21:00 WIB converted)

const albaniaLottoData = {
    // Array of results - MAX 30 ENTRIES
    results: [

        {
            date: "2026-11-12",
            draw: 647,
            numbers: 4, 6, 0, 7],
            time: "14:00"
        },
        {
            date: "2026-11-11",
            draw: 646,
            numbers: 9, 4, 8, 9],
            time: "14:00"
        },
        {
            date: "2026-11-10",
            draw: 645,
            numbers: 4, 7, 7, 9],
            time: "14:00"
        },
        {
            date: "2026-11-09",
            draw: 644,
            numbers: 2, 5, 1, 0],
            time: "14:00"
        },
        {
            date: "2026-11-08",
            draw: 643,
            numbers: 8, 4, 7, 5],
            time: "14:00"
        },
        {
            date: "2026-11-07",
            draw: 642,
            numbers: 9, 8, 6, 5],
            time: "14:00"
        },
        {
            date: "2026-11-06",
            draw: 641,
            numbers: 6, 4, 7, 0],
            time: "14:00"
        },
        {
            date: "2026-11-05",
            draw: 640,
            numbers: 9, 0, 0, 4],
            time: "14:00"
        },
        {
            date: "2026-11-04",
            draw: 639,
            numbers: 4, 0, 3, 8],
            time: "14:00"
        },
        {
            date: "2026-11-03",
            draw: 638,
            numbers: 2, 6, 6, 4],
            time: "14:00"
        },
        {
            date: "2026-11-02",
            draw: 637,
            numbers: 0, 9, 7, 1],
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
