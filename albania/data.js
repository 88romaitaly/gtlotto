// ALBANIA LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)
// Draw time: 14:00 GMT (21:00 WIB converted)

const albaniaLottoData = {
    // Array of results - MAX 30 ENTRIES
    results: [

        {
            date: "2026-10-18",
            draw: 622,
            numbers: 5, 6, 2, 8],
            time: "14:00"
        },
        {
            date: "2026-10-16",
            draw: 621,
            numbers: 3, 5, 8, 7],
            time: "14:00"
        },
        {
            date: "2026-10-16",
            draw: 620,
            numbers: 2, 3, 7, 6],
            time: "14:00"
        },
        {
            date: "2026-10-15",
            draw: 619,
            numbers: 1, 2, 6, 8],
            time: "14:00"
        },
        {
            date: "2026-10-14",
            draw: 618,
            numbers: 0, 1, 5, 4],
            time: "14:00"
        },
        {
            date: "2026-10-13",
            draw: 617,
            numbers: 0, 0, 8, 8],
            time: "14:00"
        },
        {
            date: "2026-10-12",
            draw: 616,
            numbers: 6, 3, 2, 5],
            time: "14:00"
        },
        {
            date: "2026-10-11",
            draw: 615,
            numbers: 1, 4, 9, 8],
            time: "14:00"
        },
        {
            date: "2026-10-10",
            draw: 614,
            numbers: 9, 3, 5, 6],
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
