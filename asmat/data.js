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
            date: "2026-09-01",
            draw: 337,
            numbers: [9, 1, 6, 3],
            time: "15:00"
        },
        {
            date: "2026-08-31",
            draw: 336,
            numbers: [6, 0, 5, 2],
            time: "15:00"
        },
        {
            date: "2026-08-30",
            draw: 335,
            numbers: [1, 2, 8, 2],
            time: "15:00"
        },
        {
            date: "2026-08-29",
            draw: 334,
            numbers: [0, 6, 3, 5],
            time: "15:00"
        },
        {
            date: "2026-08-28",
            draw: 333,
            numbers: [1, 3, 9, 8],
            time: "15:00"
        },
        {
            date: "2026-08-27",
            draw: 332,
            numbers: [4, 0, 1, 9],
            time: "15:00"
        },
        {
            date: "2026-08-26",
            draw: 331,
            numbers: [3, 0, 6, 6],
            time: "15:00"
        },
        {
            date: "2026-08-25",
            draw: 330,
            numbers: [5, 2, 5, 9],
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
