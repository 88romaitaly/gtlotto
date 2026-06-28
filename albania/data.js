// ALBANIA LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)
// Draw time: 14:00 GMT (21:00 WIB converted)

const albaniaLottoData = {
    // Array of results - MAX 30 ENTRIES
    results: [

        {
            date: "2026-06-28",
            draw: 420,
            numbers: [8, 3, 5, 1],
            time: "14:00"
        },
        {
            date: "2026-06-27",
            draw: 419,
            numbers: [3, 4, 2, 3],
            time: "14:00"
        },
        {
            date: "2026-06-26",
            draw: 418,
            numbers: [2, 3, 5, 7],
            time: "14:00"
        },
        {
            date: "2026-06-25",
            draw: 417,
            numbers: [6, 9, 7, 8],
            time: "14:00"
        },
        {
            date: "2026-06-24",
            draw: 416,
            numbers: [6, 9, 5, 5],
            time: "14:00"
        },
        {
            date: "2026-06-23",
            draw: 415,
            numbers: [0, 6, 0, 2],
            time: "14:00"
        },
        {
            date: "2026-06-22",
            draw: 414,
            numbers: [4, 0, 2, 5],
            time: "14:00"
        },
        {
            date: "2026-06-21",
            draw: 413,
            numbers: [0, 3, 4, 2],
            time: "14:00"
        },
        {
            date: "2026-06-20",
            draw: 412,
            numbers: [1, 9, 2, 9],
            time: "14:00"
        },
        {
            date: "2026-06-19",
            draw: 411,
            numbers: [4, 1, 2, 2],
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
