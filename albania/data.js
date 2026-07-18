// ALBANIA LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)
// Draw time: 14:00 GMT (21:00 WIB converted)

const albaniaLottoData = {
    // Array of results - MAX 30 ENTRIES
    results: [

        {
            date: "2026-07-18",
            draw: 440,
            numbers: [5, 3, 4, 0],
            time: "14:00"
        },
        {
            date: "2026-07-17",
            draw: 439,
            numbers: [4, 8, 2, 6],
            time: "14:00"
        },
        {
            date: "2026-07-16",
            draw: 438,
            numbers: [1, 5, 6, 7],
            time: "14:00"
        },
        {
            date: "2026-07-15",
            draw: 437,
            numbers: [4, 3, 5, 1],
            time: "14:00"
        },
        {
            date: "2026-07-14",
            draw: 436,
            numbers: [0, 5, 7, 6],
            time: "14:00"
        },
        {
            date: "2026-07-13",
            draw: 435,
            numbers: [4, 0, 1, 6],
            time: "14:00"
        },
        {
            date: "2026-07-12",
            draw: 434,
            numbers: [0, 9, 2, 9],
            time: "14:00"
        },
        {
            date: "2026-07-11",
            draw: 433,
            numbers: [2, 0, 2, 0],
            time: "14:00"
        },
        {
            date: "2026-07-10",
            draw: 432,
            numbers: [8, 5, 0, 2],
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
