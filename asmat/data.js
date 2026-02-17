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
            date: "2026-02-17",
            draw: 233,
            numbers: [0, 5, 9, 0],
            time: "15:00"
        },
        {
            date: "2026-02-16",
            draw: 232,
            numbers: [4, 7, 7, 6],
            time: "15:00"
        },
        {
            date: "2026-02-15",
            draw: 231,
            numbers: [9, 3, 7, 5],
            time: "15:00"
        },
        {
            date: "2026-02-14",
            draw: 230,
            numbers: [3, 9, 6, 9],
            time: "15:00"
        },
        {
            date: "2026-02-13",
            draw: 229,
            numbers: [7, 8, 3, 1],
            time: "15:00"
        },
        {
            date: "2026-02-12",
            draw: 228,
            numbers: [2, 5, 8, 3],
            time: "15:00"
        },
        {
            date: "2026-02-11",
            draw: 227,
            numbers: [8, 6, 6, 2],
            time: "15:00"
        },
        {
            date: "2026-02-10",
            draw: 226,
            numbers: [1, 0, 6, 1],
            time: "15:00"
        },
        {
            date: "2026-02-08",
            draw: 224,
            numbers: [7, 0, 6, 4],
            time: "15:00"
        },
        {
            date: "2026-02-07",
            draw: 223,
            numbers: [2, 4, 0, 9],
            time: "15:00"
        },
        {
            date: "2026-02-06",
            draw: 222,
            numbers: [7, 9, 0, 1],
            time: "15:00"
        },
        {
            date: "2026-02-05",
            draw: 221,
            numbers: [8, 5, 1, 1],
            time: "15:00"
        },
        {
            date: "2026-02-04",
            draw: 220,
            numbers: [6, 6, 4, 4],
            time: "15:00"
        },
        {
            date: "2026-02-03",
            draw: 219,
            numbers: [8, 9, 7, 8],
            time: "15:00"
        },
        {
            date: "2026-02-02",
            draw: 218,
            numbers: [6, 5, 1, 6],
            time: "15:00"
        },
        {
            date: "2026-02-01",
            draw: 217,
            numbers: [3, 2, 3, 3],
            time: "15:00"
        },
        {
            date: "2026-01-31",
            draw: 216,
            numbers: [5, 0, 0, 3],
            time: "15:00"
        },
        {
            date: "2026-01-30",
            draw: 215,
            numbers: [6, 3, 5, 0],
            time: "15:00"
        },
        {
            date: "2026-01-29",
            draw: 214,
            numbers: [2, 5, 5, 0],
            time: "15:00"
        },
        {
            date: "2026-01-28",
            draw: 213,
            numbers: [0, 6, 2, 1],
            time: "15:00"
        },
        {
            date: "2026-01-27",
            draw: 212,
            numbers: [4, 0, 0, 6],
            time: "15:00"
        },
        {
            date: "2026-01-26",
            draw: 211,
            numbers: [0, 4, 9, 4],
            time: "15:00"
        },
        {
            date: "2026-01-25",
            draw: 210,
            numbers: [9, 7, 5, 5],
            time: "15:00"
        },
        {
            date: "2026-01-24",
            draw: 209,
            numbers: [5, 9, 7, 6],
            time: "15:00"
        },
        {
            date: "2026-01-23",
            draw: 208,
            numbers: [2, 1, 8, 7],
            time: "15:00"
        },
        {
            date: "2026-01-22",
            draw: 207,
            numbers: [9, 4, 2, 1],
            time: "15:00"
        },
        {
            date: "2026-01-21",
            draw: 206,
            numbers: [5, 6, 5, 7],
            time: "15:00"
        },
        {
            date: "2026-01-20",
            draw: 205,
            numbers: [8, 5, 6, 7],
            time: "15:00"
        },
        {
            date: "2026-01-19",
            draw: 204,
            numbers: [9, 9, 9, 0],
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
