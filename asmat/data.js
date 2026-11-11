// ASMAT LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)
// Draw time: 15:00 WIB (08:00 GMT)

const asmatLottoData = {
    // Array of results - MAX 30 ENTRIES
    results: [
        // New entries go at the TOP
        // Format: { date: "YYYY-MM-DD", draw: XXX, numbers: [X,X,X,X], time: "15:00" }
        
        // January 2026 - Example data

        
        {
            date: "2026-11-11",
            draw: 407,
            numbers: [0, 0, 2, 5],
            time: "15:00"
        },
        {
            date: "2026-11-10",
            draw: 406,
            numbers: [1, 8, 1, 1],
            time: "15:00"
        },
        {
            date: "2026-11-09",
            draw: 405,
            numbers: [1, 7, 0, 3],
            time: "15:00"
        },
        {
            date: "2026-11-08",
            draw: 404,
            numbers: [9, 3, 7, 8],
            time: "15:00"
        },
        {
            date: "2026-11-07",
            draw: 403,
            numbers: [5, 6, 8, 8],
            time: "15:00"
        },
        {
            date: "2026-11-06",
            draw: 402,
            numbers: [0, 9, 3, 7],
            time: "15:00"
        },
        {
            date: "2026-11-05",
            draw: 401,
            numbers: [4, 4, 2, 1],
            time: "15:00"
        }
        // December 2025 - Example continuation
        // IMPORTANT: Keep only 30 entries maximum
        // Add new results at the TOP, remove from bottom if needed
    ]
};

// Helper function to ensure we only keep last 30 entries
function maintainDataLimit() {
    if (asmatLottoData.results.length > 30) {
        asmatLottoData.results = asmatLottoData.results.slice(0, 30);
    }
}

// Call this initially
maintainDataLimit();
