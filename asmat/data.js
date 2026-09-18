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
            date: "2026-09-18",
            draw: 354,
            numbers: [0, 1, 2, 1],
            time: "15:00"
        },
        {
            date: "2026-09-17",
            draw: 353,
            numbers: [2, 1, 4, 8],
            time: "15:00"
        },
        {
            date: "2026-09-16",
            draw: 352,
            numbers: [1, 9, 3, 7],
            time: "15:00"
        },
        {
            date: "2026-09-15",
            draw: 351,
            numbers: [9, 8, 2, 0],
            time: "15:00"
        },
        {
            date: "2026-09-14",
            draw: 350,
            numbers: [2, 1, 6, 0],
            time: "15:00"
        },
        {
            date: "2026-09-13",
            draw: 349,
            numbers: [3, 6, 5, 8],
            time: "15:00"
        },
        {
            date: "2026-09-12",
            draw: 348,
            numbers: [9, 3, 7, 8],
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
