// ALBANIA LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)
// Draw time: 14:00 GMT (21:00 WIB converted)

const albaniaLottoData = {
    // Array of results - MAX 30 ENTRIES
    results: [

        {
            date: "2026-09-16",
            draw: 590,
            numbers: 5, 2, 3, 7],
            time: "14:00"
        },
        {
            date: "2026-09-15",
            draw: 589,
            numbers: 4, 1, 2, 6],
            time: "14:00"
        },
        {
            date: "2026-09-14",
            draw: 588,
            numbers: 3, 9, 1, 5],
            time: "14:00"
        },
        {
            date: "2026-09-13",
            draw: 587,
            numbers: 2, 8, 9, 4],
            time: "14:00"
        },
        {
            date: "2026-09-12",
            draw: 586,
            numbers: 9, 7, 6, 3],
            time: "14:00"
        },
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
