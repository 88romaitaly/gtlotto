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
        },
        {
            date: "2026-01-04",
            draw: 189,
            numbers: [2, 4, 1, 8],
            time: "15:00"
        },
        {
            date: "2026-01-03",
            draw: 188,
            numbers: [7, 4, 3, 0],
            time: "15:00"
        },
        {
            date: "2026-01-02",
            draw: 187,
            numbers: [9, 4, 7, 7],
            time: "15:00"
        },
        {
            date: "2026-01-01",
            draw: 186,
            numbers: [5, 9, 3, 7],
            time: "15:00"
        },
        // December 2025 - Example continuation
        {
            date: "2025-12-31",
            draw: 185,
            numbers: [7, 0, 3, 8],
            time: "15:00"
        },
        {
            date: "2025-12-30",
            draw: 184,
            numbers: [2, 9, 1, 5],
            time: "15:00"
        },
        {
            date: "2025-12-29",
            draw: 183,
            numbers: [4, 6, 7, 3],
            time: "15:00"
        },
        {
            date: "2025-12-28",
            draw: 182,
            numbers: [8, 1, 2, 6],
            time: "15:00"
        },
        {
            date: "2025-12-27",
            draw: 181,
            numbers: [0, 5, 9, 2],
            time: "15:00"
        },
        {
            date: "2025-12-26",
            draw: 180,
            numbers: [7, 3, 1, 4],
            time: "15:00"
        },
        {
            date: "2025-12-25",
            draw: 179,
            numbers: [2, 6, 4, 9],
            time: "15:00"
        },
        {
            date: "2025-12-24",
            draw: 178,
            numbers: [8, 1, 5, 3],
            time: "15:00"
        },
        {
            date: "2025-12-23",
            draw: 177,
            numbers: [4, 7, 0, 2],
            time: "15:00"
        },
        {
            date: "2025-12-22",
            draw: 176,
            numbers: [9, 3, 6, 1],
            time: "15:00"
        },
        {
            date: "2025-12-21",
            draw: 175,
            numbers: [5, 8, 2, 7],
            time: "15:00"
        },
        {
            date: "2025-12-20",
            draw: 174,
            numbers: [1, 4, 9, 0],
            time: "15:00"
        },
        {
            date: "2025-12-19",
            draw: 173,
            numbers: [3, 6, 8, 2],
            time: "15:00"
        },
        {
            date: "2025-12-18",
            draw: 172,
            numbers: [7, 0, 4, 5],
            time: "15:00"
        },
        {
            date: "2025-12-17",
            draw: 171,
            numbers: [2, 9, 1, 6],
            time: "15:00"
        },
        {
            date: "2025-12-16",
            draw: 170,
            numbers: [8, 3, 7, 0],
            time: "15:00"
        }
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
