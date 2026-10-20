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
            date: "2026-10-20",
            draw: 386,
            numbers: [8, 6, 9, 5],
            time: "15:00"
        },
        {
            date: "2026-10-19",
            draw: 385,
            numbers: [6, 5, 9, 3],
            time: "15:00"
        },
        {
            date: "2026-10-18",
            draw: 384,
            numbers: [5, 4, 9, 1],
            time: "15:00"
        },
        {
            date: "2026-10-17",
            draw: 383,
            numbers: [4, 3, 8, 9],
            time: "15:00"
        },
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
