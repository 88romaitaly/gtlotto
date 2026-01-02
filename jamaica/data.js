// JAMAICA LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)
// Draw time: 17:00 EST (05:00 GMT+7)

const jamaicaLottoData = {
    // Array of results - MAX 30 ENTRIES
    results: [
        // New entries go at the TOP
        // Format: { date: "YYYY-MM-DD", draw: XXX, numbers: [X,X,X,X], time: "17:00" }
        
        // January 2026 - Example data
        
        {
            date: "2026-01-03",
            draw: 316,
            numbers: [4, 0, 7, 2],
            time: "17:00"
        },
        {
            date: "2026-01-02",
            draw: 315,
            numbers: [6, 5, 4, 8],
            time: "17:00"
        },
        {
            date: "2026-01-01",
            draw: 314,
            numbers: [5, 5, 4, 8],
            time: "17:00"
        },
        // December 2025 - Example continuation
        {
            date: "2025-12-31",
            draw: 313,
            numbers: [7, 0, 3, 8],
            time: "17:00"
        },
        {
            date: "2025-12-30",
            draw: 312,
            numbers: [2, 9, 1, 5],
            time: "17:00"
        },
        {
            date: "2025-12-29",
            draw: 311,
            numbers: [4, 6, 7, 3],
            time: "17:00"
        },
        {
            date: "2025-12-28",
            draw: 310,
            numbers: [8, 1, 2, 6],
            time: "17:00"
        },
        {
            date: "2025-12-27",
            draw: 309,
            numbers: [0, 5, 9, 2],
            time: "17:00"
        },
        {
            date: "2025-12-26",
            draw: 308,
            numbers: [7, 3, 1, 4],
            time: "17:00"
        },
        {
            date: "2025-12-25",
            draw: 307,
            numbers: [2, 6, 4, 9],
            time: "17:00"
        },
        {
            date: "2025-12-24",
            draw: 306,
            numbers: [8, 1, 5, 3],
            time: "17:00"
        },
        {
            date: "2025-12-23",
            draw: 305,
            numbers: [4, 7, 0, 2],
            time: "17:00"
        },
        {
            date: "2025-12-22",
            draw: 304,
            numbers: [9, 3, 6, 1],
            time: "17:00"
        },
        {
            date: "2025-12-21",
            draw: 303,
            numbers: [5, 8, 2, 7],
            time: "17:00"
        },
        {
            date: "2025-12-20",
            draw: 302,
            numbers: [1, 4, 9, 0],
            time: "17:00"
        },
        {
            date: "2025-12-19",
            draw: 301,
            numbers: [3, 6, 8, 2],
            time: "17:00"
        },
        {
            date: "2025-12-18",
            draw: 300,
            numbers: [7, 0, 4, 5],
            time: "17:00"
        },
        {
            date: "2025-12-17",
            draw: 299,
            numbers: [2, 9, 1, 6],
            time: "17:00"
        },
        {
            date: "2025-12-16",
            draw: 298,
            numbers: [8, 3, 7, 0],
            time: "17:00"
        },
        {
            date: "2025-12-15",
            draw: 297,
            numbers: [4, 1, 5, 9],
            time: "17:00"
        },
        {
            date: "2025-12-14",
            draw: 296,
            numbers: [6, 2, 8, 3],
            time: "17:00"
        },
        {
            date: "2025-12-13",
            draw: 295,
            numbers: [0, 7, 1, 4],
            time: "17:00"
        },
        {
            date: "2025-12-12",
            draw: 294,
            numbers: [9, 5, 3, 8],
            time: "17:00"
        },
        {
            date: "2025-12-11",
            draw: 293,
            numbers: [2, 6, 0, 7],
            time: "17:00"
        },
        {
            date: "2025-12-10",
            draw: 292,
            numbers: [1, 8, 4, 9],
            time: "17:00"
        },
        {
            date: "2025-12-09",
            draw: 291,
            numbers: [5, 3, 7, 2],
            time: "17:00"
        },
        {
            date: "2025-12-08",
            draw: 290,
            numbers: [8, 0, 6, 1],
            time: "17:00"
        },
        {
            date: "2025-12-07",
            draw: 289,
            numbers: [3, 9, 2, 4],
            time: "17:00"
        },
        {
            date: "2025-12-06",
            draw: 288,
            numbers: [7, 1, 5, 0],
            time: "17:00"
        }
        // IMPORTANT: Keep only 30 entries maximum
        // Add new results at the TOP, remove from bottom if needed
    ]
};

// Helper function to ensure we only keep last 30 entries
function maintainDataLimit() {
    if (jamaicaLottoData.results.length > 30) {
        jamaicaLottoData.results = jamaicaLottoData.results.slice(0, 30);
    }
}

// Call this initially
maintainDataLimit();
