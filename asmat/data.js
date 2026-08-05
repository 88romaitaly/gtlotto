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
            date: "2026-08-05",
            draw: 310,
            numbers: [9, 2, 8, 1],
            time: "15:00"
        },
        {
            date: "2026-08-04",
            draw: 309,
            numbers: [1, 3, 4, 2],
            time: "15:00"
        },
        {
            date: "2026-08-03",
            draw: 308,
            numbers: [7, 6, 5, 4],
            time: "15:00"
        },
        {
            date: "2026-08-02",
            draw: 307,
            numbers: [5, 3, 2, 0],
            time: "15:00"
        },
        {
            date: "2026-08-01",
            draw: 306,
            numbers: [7, 6, 2, 7],
            time: "15:00"
        },
        {
            date: "2026-07-31",
            draw: 305,
            numbers: [3, 9, 2, 8],
            time: "15:00"
        },
        {
            date: "2026-07-30",
            draw: 304,
            numbers: [3, 5, 9, 2],
            time: "15:00"
        },
        {
            date: "2026-07-29",
            draw: 303,
            numbers: [3, 6, 4, 8],
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
