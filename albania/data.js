// ALBANIA LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)
// Draw time: 14:00 GMT (21:00 WIB converted)

const albaniaLottoData = {
    // Array of results - MAX 30 ENTRIES
    results: [

        {
            date: "2026-09-26",
            draw: 600,
            numbers: 1, 2, 4, 3],
            time: "14:00"
        },
        {
            date: "2026-09-25",
            draw: 599,
            numbers: 9, 1, 3, 2],
            time: "14:00"
        },
        {
            date: "2026-09-24",
            draw: 598,
            numbers: 8, 9, 2, 1],
            time: "14:00"
        },
        {
            date: "2026-09-23",
            draw: 597,
            numbers: 7, 8, 1, 9],
            time: "14:00"
        },
        {
            date: "2026-09-22",
            draw: 596,
            numbers: 6, 7, 0, 8],
            time: "14:00"
        },
        {
            date: "2026-09-21",
            draw: 595,
            numbers: 4, 1, 3, 2],
            time: "14:00"
        },
        {
            date: "2026-09-20",
            draw: 594,
            numbers: 5, 3, 1, 7],
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
