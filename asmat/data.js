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
        },
        {
            date: "2026-05-31",
            draw: 244,
            numbers: [8, 8, 9, 8],
            time: "15:00"
        },
        {
            date: "2026-05-30",
            draw: 243,
            numbers: [1, 3, 2, 0],
            time: "15:00"
        },
        {
            date: "2026-05-29",
            draw: 242,
            numbers: [5, 1, 5, 4],
            time: "15:00"
        },
        {
            date: "2026-05-28",
            draw: 241,
            numbers: [4, 3, 9, 1],
            time: "15:00"
        },
        {
            date: "2026-05-27",
            draw: 240,
            numbers: [1, 1, 6, 9],
            time: "15:00"
        },
        {
            date: "2026-05-26",
            draw: 239,
            numbers: [0, 8, 4, 4],
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
