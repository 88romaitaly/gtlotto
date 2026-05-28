// SCOTLAND LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)

const scotlandLottoData = {
    results: [
        // Format: { date: "YYYY-MM-DD", draw: XXX, numbers: [X,X,X,X], time: "18:57" }

        
        {
            date: "2026-05-28,
            draw: 376,
            numbers: [9, 7, 2, 7],
            time: "11:30"
        },
        {
            date: "2026-05-27,
            draw: 375,
            numbers: [3, 9, 1, 9],
            time: "11:30"
        },
        {
            date: "2026-05-26,
            draw: 374,
            numbers: [5, 1, 7, 7],
            time: "11:30"
        },
        {
            date: "2026-05-25,
            draw: 373,
            numbers: [8, 3, 5, 5],
            time: "11:30"
        },
        {
            date: "2026-05-24,
            draw: 372,
            numbers: [1, 6, 2, 7],
            time: "11:30"
        },
        {
            date: "2026-05-23,
            draw: 371,
            numbers: [9, 2, 6, 6],
            time: "11:30"
        },
        {
            date: "2026-05-22,
            draw: 370,
            numbers: [9, 3, 5, 5],
            time: "11:30"
        },
        {
            date: "2026-05-21,
            draw: 369,
            numbers: [0, 4, 3, 7],
            time: "11:30"
        },
        {
            date: "2026-05-20,
            draw: 368,
            numbers: [7, 8, 9, 7],
            time: "11:30"
        },
        {
            date: "2026-05-19,
            draw: 367,
            numbers: [3, 1, 3, 6],
            time: "11:30"
        },
        {
            date: "2026-05-18,
            draw: 366,
            numbers: [9, 6, 9, 3],
            time: "11:30"
        },
        {
            date: "2026-05-17,
            draw: 365,
            numbers: [0, 8, 4, 4],
            time: "11:30"
        },
        {
            date: "2026-05-16,
            draw: 364,
            numbers: [8, 3, 1, 6],
            time: "11:30"
        },
        {
            date: "2026-05-15,
            draw: 363,
            numbers: [1, 7, 8, 3],
            time: "11:30"
        },
        {
            date: "2026-05-14,
            draw: 363,
            numbers: [1, 0, 8, 3],
            time: "11:30"
        },
        {
            date: "2026-05-13,
            draw: 362,
            numbers: [5, 8, 3, 2],
            time: "11:30"
        },
        {
            date: "2026-05-12,
            draw: 361,
            numbers: [8, 8, 0, 6],
            time: "11:30"
        },
        {
            date: "2026-05-11,
            draw: 360,
            numbers: [4, 5, 1, 8],
            time: "11:30"
        },
        {
            date: "2026-05-10,
            draw: 359,
            numbers: [1, 0, 1, 2],
            time: "11:30"
        },
        {
            date: "2026-05-09,
            draw: 358,
            numbers: [6, 6, 8, 5],
            time: "11:30"
        },
        {
            date: "2026-05-08,
            draw: 357,
            numbers: [9, 1, 2, 9],
            time: "11:30"
        },
        {
            date: "2026-05-07,
            draw: 356,
            numbers: [5, 6, 1, 2],
            time: "11:30"
        },
        {
            date: "2026-05-06,
            draw: 355,
            numbers: [0, 7, 2, 9],
            time: "11:30"
        },
        {
            date: "2026-05-05,
            draw: 354,
            numbers: [6, 1, 0, 6],
            time: "11:30"
        },
        {
            date: "2026-05-04,
            draw: 353,
            numbers: [2, 9, 4, 4],
            time: "11:30"
        },
        {
            date: "2026-05-03,
            draw: 352,
            numbers: [7, 2, 8, 1],
            time: "11:30"
        },
        {
            date: "2026-05-02",
            draw: 351,
            numbers: [8, 2, 5, 6],
            time: "11:30"
        },
        {
            date: "2026-05-01",
            draw: 350,
            numbers: [6, 3, 9, 8],
            time: "11:30"
        }
        // IMPORTANT: Keep only 30 entries maximum
        // Add new results at the TOP, remove from bottom if needed
    ]
};

// Helper function to ensure we only keep last 30 entries
function maintainDataLimit() {
    if (scotlandLottoData.results.length > 30) {
        scotlandLottoData.results = scotlandLottoData.results.slice(0, 30);
    }
}

// Call this initially
maintainDataLimit();
