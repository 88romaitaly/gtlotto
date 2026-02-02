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
            date: "2026-02-03",
            draw: 407,
            numbers: [5, 8, 7, 8],
            time: "17:00"
        },
        {
            date: "2026-02-02",
            draw: 406,
            numbers: [3, 3, 9, 2],
            time: "17:00"
        },
        {
            date: "2026-02-01",
            draw: 405,
            numbers: [4, 9, 9, 3],
            time: "17:00"
        },
        {
            date: "2026-01-31",
            draw: 404,
            numbers: [8, 9, 1, 0],
            time: "17:00"
        },
        {
            date: "2026-01-30",
            draw: 403,
            numbers: [0, 4, 8, 7],
            time: "17:00"
        },
        {
            date: "2026-01-29",
            draw: 402,
            numbers: [6, 5, 9, 9],
            time: "17:00"
        },
        {
            date: "2026-01-28",
            draw: 401,
            numbers: [4, 8, 3, 4],
            time: "17:00"
        },
        {
            date: "2026-01-27",
            draw: 400,
            numbers: [3, 5, 2, 0],
            time: "17:00"
        },
        {
            date: "2026-01-26",
            draw: 399,
            numbers: [6, 4, 3, 2],
            time: "17:00"
        },
        {
            date: "2026-01-25",
            draw: 398,
            numbers: [6, 7, 5, 5],
            time: "17:00"
        },
        {
            date: "2026-01-24",
            draw: 397,
            numbers: [0, 4, 1, 4],
            time: "17:00"
        },
        {
            date: "2026-01-23",
            draw: 396,
            numbers: [5, 1, 8, 3],
            time: "17:00"
        },
        {
            date: "2026-01-22",
            draw: 395,
            numbers: [5, 4, 7, 9],
            time: "17:00"
        },
        {
            date: "2026-01-21",
            draw: 394,
            numbers: [5, 0, 2, 0],
            time: "17:00"
        },
        {
            date: "2026-01-20",
            draw: 393,
            numbers: [3, 2, 7, 3],
            time: "17:00"
        },
        {
            date: "2026-01-19",
            draw: 392,
            numbers: [8, 8, 5, 1],
            time: "17:00"
        },
        {
            date: "2026-01-18",
            draw: 391,
            numbers: [0, 8, 5, 0],
            time: "17:00"
        },
        {
            date: "2026-01-17",
            draw: 390,
            numbers: [1, 1, 1, 5],
            time: "17:00"
        },
        {
            date: "2026-01-16",
            draw: 389,
            numbers: [3, 0, 0, 5],
            time: "17:00"
        },
        {
            date: "2026-01-15",
            draw: 388,
            numbers: [8, 7, 3, 6],
            time: "17:00"
        },
        {
            date: "2026-01-14",
            draw: 387,
            numbers: [1, 6, 0, 4],
            time: "17:00"
        },
        {
            date: "2026-01-13",
            draw: 386,
            numbers: [3, 0, 7, 6],
            time: "17:00"
        },
        {
            date: "2026-01-12",
            draw: 385,
            numbers: [1, 1, 4, 4],
            time: "17:00"
        },
        {
            date: "2026-01-11",
            draw: 384,
            numbers: [9, 3, 3, 1],
            time: "17:00"
        },
        {
            date: "2026-01-10",
            draw: 383,
            numbers: [7, 8, 3, 4],
            time: "17:00"
        },
        {
            date: "2026-01-09",
            draw: 382,
            numbers: [7, 6, 9, 1],
            time: "17:00"
        },
        {
            date: "2026-01-08",
            draw: 381,
            numbers: [5, 1, 4, 3],
            time: "17:00"
        },
        {
            date: "2026-01-07",
            draw: 380,
            numbers: [2, 1, 9, 9],
            time: "17:00"
        },
        {
            date: "2026-01-06",
            draw: 378,
            numbers: [3, 2, 1, 8],
            time: "17:00"
        },
        {
            date: "2026-01-05",
            draw: 377,
            numbers: [7, 4, 9, 0],
            time: "17:00"
        },
        {
            date: "2026-01-04",
            draw: 376,
            numbers: [9, 3, 2, 6],
            time: "17:00"
        },
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
