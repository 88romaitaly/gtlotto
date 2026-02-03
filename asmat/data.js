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
        },
        {
            date: "2026-01-18",
            draw: 203,
            numbers: [4, 0, 2, 8],
            time: "15:00"
        },
        {
            date: "2026-01-17",
            draw: 202,
            numbers: [0, 3, 4, 7],
            time: "15:00"
        },
        {
            date: "2026-01-16",
            draw: 201,
            numbers: [2, 3, 8, 4],
            time: "15:00"
        },
        {
            date: "2026-01-15",
            draw: 200,
            numbers: [5, 6, 8, 8],
            time: "15:00"
        },
        {
            date: "2026-01-14",
            draw: 199,
            numbers: [2, 4, 6, 1],
            time: "15:00"
        },
        {
            date: "2026-01-13",
            draw: 198,
            numbers: [5, 0, 1, 4],
            time: "15:00"
        },
        {
            date: "2026-01-12",
            draw: 197,
            numbers: [9, 7, 3, 6],
            time: "15:00"
        },
        {
            date: "2026-01-11",
            draw: 196,
            numbers: [0, 7, 9, 4],
            time: "15:00"
        },
        {
            date: "2026-01-10",
            draw: 195,
            numbers: [9, 8, 9, 6],
            time: "15:00"
        },
        {
            date: "2026-01-09",
            draw: 194,
            numbers: [8, 5, 2, 8],
            time: "15:00"
        },
        {
            date: "2026-01-08",
            draw: 193,
            numbers: [2, 6, 4, 3],
            time: "15:00"
        },
        {
            date: "2026-01-07",
            draw: 192,
            numbers: [6, 2, 4, 3],
            time: "15:00"
        },
        {
            date: "2026-01-06",
            draw: 191,
            numbers: [6, 3, 0, 1],
            time: "15:00"
        },
        {
            date: "2026-01-05",
            draw: 190,
            numbers: [7, 2, 4, 7],
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
