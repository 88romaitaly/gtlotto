// ALBANIA LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)
// Draw time: 14:00 GMT (21:00 WIB converted)

const albaniaLottoData = {
    // Array of results - MAX 30 ENTRIES
    results: [

        {
            date: "2026-08-21",
            draw: 564,
            numbers: [8, 8, 3, 9],
            time: "14:00"
        },
        {
            date: "2026-08-20",
            draw: 563,
            numbers: [2, 3, 5, 1],
            time: "14:00"
        },
        {
            date: "2026-08-19",
            draw: 562,
            numbers: [4, 3, 9, 5],
            time: "14:00"
        },
        {
            date: "2026-08-18",
            draw: 561,
            numbers: [6, 7, 3, 1],
            time: "14:00"
        },
        {
            date: "2026-08-17",
            draw: 560,
            numbers: [3, 2, 8, 2],
            time: "14:00"
        },
        {
            date: "2026-08-16",
            draw: 559,
            numbers: [6, 5, 1, 3],
            time: "14:00"
        },
        {
            date: "2026-08-15",
            draw: 558,
            numbers: [5, 1, 8, 9],
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
