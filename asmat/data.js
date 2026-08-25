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
            date: "2026-08-25",
            draw: 330,
            numbers: [5, 2, 5, 9],
            time: "15:00"
        },
        {
            date: "2026-08-24",
            draw: 329,
            numbers: [9, 1, 3, 7],
            time: "15:00"
        },
        {
            date: "2026-08-23",
            draw: 328,
            numbers: [9, 4, 2, 1],
            time: "15:00"
        },
        {
            date: "2026-08-22",
            draw: 327,
            numbers: [9, 0, 5, 5],
            time: "15:00"
        },
        {
            date: "2026-08-21",
            draw: 326,
            numbers: [0, 4, 6, 9],
            time: "15:00"
        },
        {
            date: "2026-08-20",
            draw: 325,
            numbers: [2, 6, 2, 2],
            time: "15:00"
        },
        {
            date: "2026-08-19",
            draw: 324,
            numbers: [6, 4, 8, 6],
            time: "15:00"
        },
        {
            date: "2026-08-18",
            draw: 323,
            numbers: [9, 3, 5, 6],
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
