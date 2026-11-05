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
            date: "2026-11-05",
            draw: 401,
            numbers: [4, 4, 2, 1],
            time: "15:00"
        },
        {
            date: "2026-11-04",
            draw: 400,
            numbers: [9, 2, 5, 6],
            time: "15:00"
        },
        {
            date: "2026-11-03",
            draw: 399,
            numbers: [8, 3, 0, 4],
            time: "15:00"
        },
        {
            date: "2026-11-02",
            draw: 398,
            numbers: [7, 4, 6, 1],
            time: "15:00"
        },
        {
            date: "2026-11-01",
            draw: 397,
            numbers: [1, 3, 6, 8],
            time: "15:00"
        },
        {
            date: "2026-10-31",
            draw: 396,
            numbers: [0, 9, 1, 4],
            time: "15:00"
        },
        {
            date: "2026-10-30",
            draw: 395,
            numbers: [2, 6, 5, 1],
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
