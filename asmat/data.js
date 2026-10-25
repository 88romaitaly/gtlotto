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
            date: "2026-10-25",
            draw: 391,
            numbers: [1, 2, 3, 6],
            time: "15:00"
        },
        {
            date: "2026-10-24",
            draw: 390,
            numbers: [0, 5, 0, 3],
            time: "15:00"
        },
        {
            date: "2026-10-23",
            draw: 389,
            numbers: [4, 0, 9, 8],
            time: "15:00"
        },
        {
            date: "2026-10-22",
            draw: 388,
            numbers: [2, 1, 4, 7],
            time: "15:00"
        },
        {
            date: "2026-10-21",
            draw: 387,
            numbers: [0, 0, 3, 6],
            time: "15:00"
        },
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
