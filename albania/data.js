// ALBANIA LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)
// Draw time: 14:00 GMT (21:00 WIB converted)

const albaniaLottoData = {
    // Array of results - MAX 30 ENTRIES
    results: [

        {
            date: "2026-09-11",
            draw: 585,
            numbers: 8, 6, 5, 4],
            time: "14:00"
        },
        {
            date: "2026-09-10",
            draw: 584,
            numbers: 2, 8, 1, 2],
            time: "14:00"
        },
        {
            date: "2026-09-09",
            draw: 583,
            numbers: [5, 9, 2, 9],
            time: "14:00"
        },
        {
            date: "2026-09-08",
            draw: 582,
            numbers: [6, 8, 4, 3],
            time: "14:00"
        },
        {
            date: "2026-09-07",
            draw: 581,
            numbers: [8, 0, 3, 0],
            time: "14:00"
        },
        {
            date: "2026-09-06",
            draw: 580,
            numbers: [4, 3, 1, 4],
            time: "14:00"
        },
        {
            date: "2026-09-05",
            draw: 579,
            numbers: [9, 4, 7, 2],
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
