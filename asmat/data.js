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
            date: "2026-07-17",
            draw: 291,
            numbers: [5, 4, 1, 2],
            time: "15:00"
        },
        {
            date: "2026-07-16",
            draw: 290,
            numbers: [7, 2, 2, 9],
            time: "15:00"
        },
        {
            date: "2026-07-15",
            draw: 289,
            numbers: [2, 0, 1, 9],
            time: "15:00"
        },
        {
            date: "2026-07-14",
            draw: 288,
            numbers: [3, 0, 9, 4],
            time: "15:00"
        },
        {
            date: "2026-07-13",
            draw: 287,
            numbers: [8, 0, 6, 4],
            time: "15:00"
        },
        {
            date: "2026-07-12",
            draw: 286,
            numbers: [1, 4, 0, 4],
            time: "15:00"
        },
        {
            date: "2026-07-11",
            draw: 285,
            numbers: [5, 8, 0, 1],
            time: "15:00"
        },
        {
            date: "2026-07-10",
            draw: 284,
            numbers: [2, 0, 0, 7],
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
