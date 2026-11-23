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
            date: "2026-11-23",
            draw: 419,
            numbers: [5, 7, 4, 1],
            time: "15:00"
        },
        {
            date: "2026-11-22",
            draw: 418,
            numbers: [5, 9, 7, 3],
            time: "15:00"
        },
        {
            date: "2026-11-21",
            draw: 417,
            numbers: [5, 6, 2, 9],
            time: "15:00"
        },
        {
            date: "2026-11-20",
            draw: 416,
            numbers: [1, 7, 9, 9],
            time: "15:00"
        },
        {
            date: "2026-11-19",
            draw: 415,
            numbers: [2, 0, 7, 2],
            time: "15:00"
        },
        {
            date: "2026-11-18",
            draw: 414,
            numbers: [7, 4, 2, 1],
            time: "15:00"
        },
        {
            date: "2026-11-17",
            draw: 413,
            numbers: [7, 3, 7, 4],
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
