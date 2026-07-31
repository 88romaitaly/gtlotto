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
        },
        {
            date: "2026-07-28",
            draw: 302,
            numbers: [8, 7, 2, 1],
            time: "15:00"
        },
        {
            date: "2026-07-27",
            draw: 301,
            numbers: [1, 6, 8, 3],
            time: "15:00"
        },
        {
            date: "2026-07-26",
            draw: 300,
            numbers: [0, 8, 2, 8],
            time: "15:00"
        },
        {
            date: "2026-07-25",
            draw: 299,
            numbers: [3, 6, 1, 2],
            time: "15:00"
        },
        {
            date: "2026-07-24",
            draw: 298,
            numbers: [0, 2, 0, 2],
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
