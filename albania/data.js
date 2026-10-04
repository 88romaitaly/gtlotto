// ALBANIA LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)
// Draw time: 14:00 GMT (21:00 WIB converted)

const albaniaLottoData = {
    // Array of results - MAX 30 ENTRIES
    results: [

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
        },
        {
            date: "2026-10-01",
            draw: 605,
            numbers: 2, 1, 6, 9],
            time: "14:00"
        },
        {
            date: "2026-09-30",
            draw: 604,
            numbers: 1, 9, 5, 0],
            time: "14:00"
        },
        {
            date: "2026-09-29",
            draw: 603,
            numbers: 9, 8, 3, 2],
            time: "14:00"
        },
        {
            date: "2026-09-28",
            draw: 602,
            numbers: 3, 4, 6, 5],
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
