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
            date: "2026-06-14",
            draw: 258,
            numbers: [4, 4, 4, 4],
            time: "15:00"
        },
        {
            date: "2026-06-13",
            draw: 257,
            numbers: [4, 2, 3, 9],
            time: "15:00"
        },
        {
            date: "2026-06-12",
            draw: 256,
            numbers: [6, 5, 0, 3],
            time: "15:00"
        },
        {
            date: "2026-06-11",
            draw: 255,
            numbers: [8, 0, 0, 6],
            time: "15:00"
        },
        {
            date: "2026-06-10",
            draw: 254,
            numbers: [9, 8, 5, 6],
            time: "15:00"
        },
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
