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
            date: "2026-07-03",
            draw: 277,
            numbers: [4, 0, 2, 1],
            time: "15:00"
        },
        {
            date: "2026-07-02",
            draw: 276,
            numbers: [5, 1, 9, 0],
            time: "15:00"
        },
        {
            date: "2026-07-01",
            draw: 275,
            numbers: [5, 5, 7, 5],
            time: "15:00"
        },
        {
            date: "2026-06-30",
            draw: 274,
            numbers: [8, 5, 7, 8],
            time: "15:00"
        },
        {
            date: "2026-06-29",
            draw: 273,
            numbers: [1, 9, 6, 7],
            time: "15:00"
        },
        {
            date: "2026-06-28",
            draw: 272,
            numbers: [0, 3, 6, 6],
            time: "15:00"
        },
        {
            date: "2026-06-27",
            draw: 271,
            numbers: [3, 0, 5, 8],
            time: "15:00"
        },
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
