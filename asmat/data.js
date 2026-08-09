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
            date: "2026-08-09",
            draw: 314,
            numbers: [8, 9, 1, 0],
            time: "15:00"
        },
        {
            date: "2026-08-08",
            draw: 313,
            numbers: [7, 2, 0, 8],
            time: "15:00"
        },
        {
            date: "2026-08-07",
            draw: 312,
            numbers: [0, 3, 8, 7],
            time: "15:00"
        },
        {
            date: "2026-08-06",
            draw: 311,
            numbers: [3, 7, 2, 9],
            time: "15:00"
        },
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
