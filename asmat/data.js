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
            date: "2026-06-09",
            draw: 253,
            numbers: [9, 7, 2, 6],
            time: "15:00"
        },
        {
            date: "2026-06-08",
            draw: 252,
            numbers: [1, 1, 4, 1],
            time: "15:00"
        },
        {
            date: "2026-06-07",
            draw: 251,
            numbers: [9, 2, 2, 5],
            time: "15:00"
        },
        {
            date: "2026-06-06",
            draw: 250,
            numbers: [4, 1, 4, 9],
            time: "15:00"
        },
        {
            date: "2026-06-05",
            draw: 249,
            numbers: [3, 5, 3, 7],
            time: "15:00"
        },
        {
            date: "2026-06-04",
            draw: 248,
            numbers: [4, 9, 2, 3],
            time: "15:00"
        },
        {
            date: "2026-06-03",
            draw: 247,
            numbers: [6, 2, 4, 4],
            time: "15:00"
        },
        {
            date: "2026-06-02",
            draw: 246,
            numbers: [9, 0, 5, 8],
            time: "15:00"
        },
        {
            date: "2026-06-01",
            draw: 245,
            numbers: [6, 1, 0, 1],
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
