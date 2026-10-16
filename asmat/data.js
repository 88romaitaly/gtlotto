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
            date: "2026-10-16",
            draw: 382,
            numbers: [3, 2, 9, 2],
            time: "15:00"
        },
        {
            date: "2026-10-15",
            draw: 381,
            numbers: [2, 1, 8, 9],
            time: "15:00"
        },
        {
            date: "2026-10-14",
            draw: 380,
            numbers: [1, 9, 7, 5],
            time: "15:00"
        },
        {
            date: "2026-10-13",
            draw: 379,
            numbers: [9, 6, 8, 5],
            time: "15:00"
        },
        {
            date: "2026-10-12",
            draw: 378,
            numbers: [8, 3, 8, 3],
            time: "15:00"
        },
        {
            date: "2026-10-11",
            draw: 377,
            numbers: [2, 1, 9, 6],
            time: "15:00"
        },
        {
            date: "2026-10-10",
            draw: 376,
            numbers: [7, 5, 3, 5],
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
