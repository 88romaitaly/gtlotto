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
            date: "2026-09-12",
            draw: 348,
            numbers: [9, 3, 7, 8],
            time: "15:00"
        },
        {
            date: "2026-09-11",
            draw: 347,
            numbers: [8, 2, 6, 9],
            time: "15:00"
        },
        {
            date: "2026-09-10",
            draw: 346,
            numbers: [9, 3, 8, 1],
            time: "15:00"
        },
        {
            date: "2026-09-09",
            draw: 345,
            numbers: [1, 3, 8, 8],
            time: "15:00"
        },
        {
            date: "2026-09-08",
            draw: 344,
            numbers: [8, 1, 3, 6],
            time: "15:00"
        },
        {
            date: "2026-09-07",
            draw: 343,
            numbers: [4, 7, 2, 6],
            time: "15:00"
        },
        {
            date: "2026-09-06",
            draw: 342,
            numbers: [5, 7, 3, 5],
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
