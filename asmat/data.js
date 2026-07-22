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
            date: "2026-07-22",
            draw: 296,
            numbers: [0, 2, 2, 0],
            time: "15:00"
        },
        {
            date: "2026-07-21",
            draw: 295,
            numbers: [7, 7, 0, 3],
            time: "15:00"
        },
        {
            date: "2026-07-20",
            draw: 294,
            numbers: [2, 2, 8, 7],
            time: "15:00"
        },
        {
            date: "2026-07-19",
            draw: 293,
            numbers: [9, 9, 0, 4],
            time: "15:00"
        },
        {
            date: "2026-07-18",
            draw: 292,
            numbers: [5, 3, 4, 0],
            time: "15:00"
        },
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
