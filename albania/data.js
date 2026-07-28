// ALBANIA LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)
// Draw time: 14:00 GMT (21:00 WIB converted)

const albaniaLottoData = {
    // Array of results - MAX 30 ENTRIES
    results: [

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
        },
        {
            date: "2026-07-26",
            draw: 448,
            numbers: [7, 2, 3, 5],
            time: "14:00"
        },
        {
            date: "2026-07-25",
            draw: 447,
            numbers: [5, 3, 6, 7],
            time: "14:00"
        },
        {
            date: "2026-07-24",
            draw: 446,
            numbers: [2, 1, 7, 9],
            time: "14:00"
        },
        {
            date: "2026-07-23",
            draw: 445,
            numbers: [9, 5, 2, 3],
            time: "14:00"
        },
        {
            date: "2026-07-22",
            draw: 444,
            numbers: [3, 3, 0, 1],
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
