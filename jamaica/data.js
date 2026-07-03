// JAMAICA LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)
// Draw time: 17:00 EST (05:00 GMT+7)

const jamaicaLottoData = {
    // Array of results - MAX 30 ENTRIES
    results: [
        // New entries go at the TOP
        // Format: { date: "YYYY-MM-DD", draw: XXX, numbers: [X,X,X,X], time: "17:00" }
        
        // Jul 2026 - Example data
        {
            date: "2026-07-04",
            draw: 556,
            numbers: [5, 2, 2, 1],
            time: "17:00"
        },
        {
            date: "2026-07-03",
            draw: 555,
            numbers: [9, 0, 7, 4],
            time: "17:00"
        },
        {
            date: "2026-07-02",
            draw: 554,
            numbers: [3, 8, 6, 2],
            time: "17:00"
        },
        {
            date: "2026-07-01",
            draw: 553,
            numbers: [3, 6, 7, 0],
            time: "17:00"
        },
        {
            date: "2026-06-30",
            draw: 552,
            numbers: [5, 8, 8, 7],
            time: "17:00"
        },
        {
            date: "2026-06-29",
            draw: 551,
            numbers: [6, 9, 5, 1],
            time: "17:00"
        },
        {
            date: "2026-06-28",
            draw: 550,
            numbers: [4, 2, 3, 1],
            time: "17:00"
        },
        {
            date: "2026-06-27",
            draw: 549,
            numbers: [7, 0, 8, 9],
            time: "17:00"
        },
        {
            date: "2026-06-26",
            draw: 548,
            numbers: [5, 0, 4, 4],
            time: "17:00"
        },
        {
            date: "2026-06-25",
            draw: 547,
            numbers: [2, 8, 3, 6],
            time: "17:00"
        },
        {
            date: "2026-06-24",
            draw: 546,
            numbers: [6, 7, 4, 8],
            time: "17:00"
        },
        {
            date: "2026-06-23",
            draw: 545,
            numbers: [1, 4, 5, 9],
            time: "17:00"
        },
        {
            date: "2026-06-22",
            draw: 544,
            numbers: [8, 9, 6, 2],
            time: "17:00"
        },
        {
            date: "2026-06-21",
            draw: 543,
            numbers: [7, 4, 0, 5],
            time: "17:00"
        },
        {
            date: "2026-06-20",
            draw: 542,
            numbers: [3, 5, 1, 3],
            time: "17:00"
        },
        {
            date: "2026-06-19",
            draw: 541,
            numbers: [0, 2, 7, 8],
            time: "17:00"
        },
        {
            date: "2026-06-18",
            draw: 540,
            numbers: [9, 8, 0, 6],
            time: "17:00"
        },
        {
            date: "2026-06-17",
            draw: 539,
            numbers: [4, 5, 2, 7],
            time: "17:00"
        },
        {
            date: "2026-06-16",
            draw: 538,
            numbers: [8, 2, 9, 1],
            time: "17:00"
        },
        {
            date: "2026-06-15",
            draw: 537,
            numbers: [7, 0, 9, 6],
            time: "17:00"
        },
        {
            date: "2026-06-14",
            draw: 536,
            numbers: [6, 4, 4, 0],
            time: "17:00"
        },
        {
            date: "2026-06-13",
            draw: 535,
            numbers: [5, 1, 6, 3],
            time: "17:00"
        },
        {
            date: "2026-06-12",
            draw: 534,
            numbers: [2, 2, 6, 1],
            time: "17:00"
        },
        {
            date: "2026-06-11",
            draw: 533,
            numbers: [1, 6, 3, 4],
            time: "17:00"
        },
        {
            date: "2026-06-10",
            draw: 532,
            numbers: [8, 4, 7, 5],
            time: "17:00"
        },
        {
            date: "2026-06-09",
            draw: 531,
            numbers: [5, 1, 1, 9],
            time: "17:00"
        },
        {
            date: "2026-06-08",
            draw: 530,
            numbers: [0, 8, 2, 3],
            time: "17:00"
        },
        {
            date: "2026-06-07",
            draw: 529,
            numbers: [3, 6, 5, 7],
            time: "17:00"
        },
        {
            date: "2026-06-06",
            draw: 528,
            numbers: [1, 0, 7, 4],
            time: "17:00"
        },
        {
            date: "2026-06-05",
            draw: 527,
            numbers: [5, 3, 3, 2],
            time: "17:00"
        },
        {
            date: "2026-06-04",
            draw: 526,
            numbers: [1, 9, 8, 0],
            time: "17:00"
        },
        {
            date: "2026-06-03",
            draw: 525,
            numbers: [5, 0, 8, 4],
            time: "17:00"
        },
        {
            date: "2026-06-02",
            draw: 524,
            numbers: [7, 6, 4, 2],
            time: "17:00"
        },
        {
            date: "2026-06-01",
            draw: 523,
            numbers: [9, 7, 0, 8],
            time: "17:00"
        },
        },
        // December 2025 - Example continuation
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
