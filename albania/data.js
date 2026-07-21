// ALBANIA LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)
// Draw time: 14:00 GMT (21:00 WIB converted)

const albaniaLottoData = {
    // Array of results - MAX 30 ENTRIES
    results: [

        {
            date: "2026-07-21",
            draw: 443,
            numbers: [2, 2, 1, 2],
            time: "14:00"
        },
        {
            date: "2026-07-20",
            draw: 442,
            numbers: [3, 1, 6, 7],
            time: "14:00"
        },
        {
            date: "2026-07-19",
            draw: 441,
            numbers: [1, 4, 8, 87],
            time: "14:00"
        },
        {
            date: "2026-07-18",
            draw: 440,
            numbers: [2, 2, 0, 8],
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
            numbers: [1, 5, 6, 3],
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
