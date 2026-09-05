// ALBANIA LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)
// Draw time: 14:00 GMT (21:00 WIB converted)

const albaniaLottoData = {
    // Array of results - MAX 30 ENTRIES
    results: [

        {
            date: "2026-09-05",
            draw: 579,
            numbers: [9, 4, 7, 2],
            time: "14:00"
        },
        {
            date: "2026-09-04",
            draw: 578,
            numbers: [2, 7, 8, 0],
            time: "14:00"
        },
        {
            date: "2026-09-03",
            draw: 577,
            numbers: [4, 3, 5, 2],
            time: "14:00"
        },
        {
            date: "2026-09-02",
            draw: 576,
            numbers: [6, 0, 3, 1],
            time: "14:00"
        },
        {
            date: "2026-09-01",
            draw: 575,
            numbers: [9, 7, 6, 9],
            time: "14:00"
        },
        {
            date: "2026-08-31",
            draw: 574,
            numbers: [7, 1, 0, 4],
            time: "14:00"
        },
        {
            date: "2026-08-30",
            draw: 573,
            numbers: [8, 6, 2, 1],
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
