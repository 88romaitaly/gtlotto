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
            date: "2026-06-26",
            draw: 270,
            numbers: [4, 4, 4, 9],
            time: "15:00"
        },
        {
            date: "2026-06-25",
            draw: 269,
            numbers: [2, 5, 6, 9],
            time: "15:00"
        },
        {
            date: "2026-06-24",
            draw: 268,
            numbers: [3, 4, 5, 7],
            time: "15:00"
        },
        {
            date: "2026-06-23",
            draw: 267,
            numbers: [0, 9, 7, 6],
            time: "15:00"
        },
        {
            date: "2026-06-22",
            draw: 266,
            numbers: [1, 0, 3, 3],
            time: "15:00"
        },
        {
            date: "2026-06-21",
            draw: 265,
            numbers: [6, 2, 3, 6],
            time: "15:00"
        },
        {
            date: "2026-06-20",
            draw: 264,
            numbers: [6, 0, 0, 7],
            time: "15:00"
        },
        {
            date: "2026-06-19",
            draw: 263,
            numbers: [8, 7, 0, 5],
            time: "15:00"
        },
        {
            date: "2026-06-18",
            draw: 262,
            numbers: [9, 2, 7, 8],
            time: "15:00"
        },
        {
            date: "2026-06-17",
            draw: 261,
            numbers: [1, 6, 5, 1],
            time: "15:00"
        },
        {
            date: "2026-06-16",
            draw: 260,
            numbers: [3, 1, 9, 2],
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
