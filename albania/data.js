// ALBANIA LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)
// Draw time: 14:00 GMT (21:00 WIB converted)

const albaniaLottoData = {
    // Array of results - MAX 30 ENTRIES
    results: [

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
        },
        {
            date: "2026-08-29",
            draw: 572,
            numbers: [4, 2, 8, 1],
            time: "14:00"
        },
        {
            date: "2026-08-28",
            draw: 571,
            numbers: [6, 9, 1, 5],
            time: "14:00"
        },
        {
            date: "2026-08-27",
            draw: 570,
            numbers: [9, 6, 4, 5],
            time: "14:00"
        },
        {
            date: "2026-08-26",
            draw: 569,
            numbers: [4, 3, 1, 5],
            time: "14:00"
        },
        {
            date: "2026-08-25",
            draw: 568,
            numbers: [9, 5, 3, 7],
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
