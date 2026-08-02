// ALBANIA LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)
// Draw time: 14:00 GMT (21:00 WIB converted)

const albaniaLottoData = {
    // Array of results - MAX 30 ENTRIES
    results: [

        {
            date: "2026-08-02",
            draw: 455,
            numbers: [4, 8, 9, 7],
            time: "14:00"
        },
        {
            date: "2026-08-01",
            draw: 454,
            numbers: [1, 3, 7, 3],
            time: "14:00"
        },
        {
            date: "2026-07-31",
            draw: 453,
            numbers: [7, 4, 2, 9],
            time: "14:00"
        },
        {
            date: "2026-07-30",
            draw: 452,
            numbers: [9, 4, 1, 9],
            time: "14:00"
        },
        {
            date: "2026-07-29",
            draw: 451,
            numbers: [4, 9, 5, 3],
            time: "14:00"
        },
        {
            date: "2026-07-28",
            draw: 450,
            numbers: [5, 4, 3, 1],
            time: "14:00"
        },
        {
            date: "2026-07-27",
            draw: 449,
            numbers: [9, 1, 2, 6],
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
