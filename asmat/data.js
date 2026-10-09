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
            date: "2026-10-09",
            draw: 375,
            numbers: [6, 4, 8, 9],
            time: "15:00"
        },
        {
            date: "2026-10-08",
            draw: 374,
            numbers: [5, 3, 7, 8],
            time: "15:00"
        },
        {
            date: "2026-10-07",
            draw: 373,
            numbers: [4, 2, 2, 7],
            time: "15:00"
        },
        {
            date: "2026-10-06",
            draw: 372,
            numbers: [2, 0, 2, 6],
            time: "15:00"
        },
        {
            date: "2026-10-05",
            draw: 371,
            numbers: [7, 8, 5, 6],
            time: "15:00"
        },
        {
            date: "2026-10-04",
            draw: 370,
            numbers: [6, 7, 4, 5],
            time: "15:00"
        },
        {
            date: "2026-10-03",
            draw: 369,
            numbers: [4, 5, 2, 3],
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
