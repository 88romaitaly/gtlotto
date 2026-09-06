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
            date: "2026-09-06",
            draw: 342,
            numbers: [5, 7, 3, 5],
            time: "15:00"
        },
        {
            date: "2026-09-05",
            draw: 341,
            numbers: [8, 9, 5, 9],
            time: "15:00"
        },
        {
            date: "2026-09-04",
            draw: 340,
            numbers: [8, 1, 2, 7],
            time: "15:00"
        },
        {
            date: "2026-09-03",
            draw: 339,
            numbers: [4, 5, 7, 2],
            time: "15:00"
        },
        {
            date: "2026-09-02",
            draw: 338,
            numbers: [3, 2, 4, 0],
            time: "15:00"
        },
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
