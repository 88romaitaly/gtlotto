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
            date: "2026-07-10",
            draw: 284,
            numbers: [2, 0, 0, 7],
            time: "15:00"
        },
        {
            date: "2026-07-09",
            draw: 283,
            numbers: [4, 7, 7, 2],
            time: "15:00"
        },
        {
            date: "2026-07-08",
            draw: 282,
            numbers: [3, 9, 3, 5],
            time: "15:00"
        },
        {
            date: "2026-07-07",
            draw: 281,
            numbers: [1, 5, 1, 7],
            time: "15:00"
        },
        {
            date: "2026-07-06",
            draw: 280,
            numbers: [9, 3, 4, 7],
            time: "15:00"
        },
        {
            date: "2026-07-05",
            draw: 279,
            numbers: [5, 2, 5, 5],
            time: "15:00"
        },
        {
            date: "2026-07-04",
            draw: 278,
            numbers: [1, 5, 7, 1],
            time: "15:00"
        },
        {
            date: "2026-07-03",
            draw: 277,
            numbers: [4, 0, 2, 1],
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
