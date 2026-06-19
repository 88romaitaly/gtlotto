// ALBANIA LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)
// Draw time: 14:00 GMT (21:00 WIB converted)

const albaniaLottoData = {
    // Array of results - MAX 30 ENTRIES
    results: [

        {
            date: "2026-06-19",
            draw: 411,
            numbers: [4, 1, 2, 2],
            time: "14:00"
        },
        {
            date: "2026-06-18",
            draw: 410,
            numbers: [8, 7, 2, 4],
            time: "14:00"
        },
        {
            date: "2026-06-17",
            draw: 409,
            numbers: [4, 0, 2, 8],
            time: "14:00"
        },
        {
            date: "2026-06-16",
            draw: 408,
            numbers: [4, 8, 7, 1],
            time: "14:00"
        },
        {
            date: "2026-06-15",
            draw: 407,
            numbers: [4, 7, 7, 4],
            time: "14:00"
        },
        {
            date: "2026-06-14",
            draw: 406,
            numbers: [2, 7, 3, 5],
            time: "14:00"
        },
        {
            date: "2026-06-13",
            draw: 405,
            numbers: [7, 6, 8, 8],
            time: "14:00"
        },
        {
            date: "2026-06-12",
            draw: 404,
            numbers: [4, 4, 8, 0],
            time: "14:00"
        },
        {
            date: "2026-06-11",
            draw: 403,
            numbers: [1, 2, 0, 0],
            time: "14:00"
        },
        {
            date: "2026-06-10",
            draw: 402,
            numbers: [4, 4, 4, 4],
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
