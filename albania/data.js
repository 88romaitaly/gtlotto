// ALBANIA LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)
// Draw time: 14:00 GMT (21:00 WIB converted)

const albaniaLottoData = {
    // Array of results - MAX 30 ENTRIES
    results: [

        {
            date: "2026-05-27",
            draw: 388,
            numbers: [3, 0, 6, 2],
            time: "14:00"
        },
        {
            date: "2026-05-26",
            draw: 387,
            numbers: [2, 9, 0, 8],
            time: "14:00"
        },
        {
            date: "2026-05-25",
            draw: 386,
            numbers: [3, 1, 4, 2],
            time: "14:00"
        },
        {
            date: "2026-05-24",
            draw: 385,
            numbers: [4, 5, 8, 3],
            time: "14:00"
        },
        {
            date: "2026-05-23",
            draw: 384,
            numbers: [2, 7, 8, 6],
            time: "14:00"
        },
        {
            date: "2026-05-22",
            draw: 383,
            numbers: [1, 3, 7, 2],
            time: "14:00"
        },
        {
            date: "2026-05-21",
            draw: 382,
            numbers: [4, 0, 5, 1],
            time: "14:00"
        },
        {
            date: "2026-05-20",
            draw: 381,
            numbers: [4, 4, 2, 6],
            time: "14:00"
        },
        {
            date: "2026-05-19",
            draw: 380,
            numbers: [4, 1, 7, 8],
            time: "14:00"
        },
        {
            date: "2026-05-18",
            draw: 379,
            numbers: [9, 3, 8, 6],
            time: "14:00"
        },
        {
            date: "2026-05-17",
            draw: 378,
            numbers: [5, 7, 2, 3],
            time: "14:00"
        },
        {
            date: "2026-05-16",
            draw: 377,
            numbers: [6, 0, 1, 9],
            time: "14:00"
        },
        {
            date: "2026-05-15",
            draw: 376,
            numbers: [5, 3, 0, 2],
            time: "14:00"
        },
        {
            date: "2026-05-14",
            draw: 375,
            numbers: [1, 4, 9, 7],
            time: "14:00"
        },
        {
            date: "2026-05-13",
            draw: 374,
            numbers: [7, 2, 4, 7],
            time: "14:00"
        },
        {
            date: "2026-05-12",
            draw: 373,
            numbers: [5, 1, 7, 2],
            time: "14:00"
        },
        {
            date: "2026-05-11",
            draw: 372,
            numbers: [1, 3, 8, 6],
            time: "14:00"
        },
        {
            date: "2026-05-10",
            draw: 371,
            numbers: [2, 6, 6, 1],
            time: "14:00"
        },
        {
            date: "2026-05-09",
            draw: 370,
            numbers: [3, 8, 5, 5],
            time: "14:00"
        },
        {
            date: "2026-05-08",
            draw: 369,
            numbers: [9, 4, 1, 1],
            time: "14:00"
        },
        {
            date: "2026-05-07",
            draw: 368,
            numbers: [, 5, 3, 4],
            time: "14:00"
        },
        {
            date: "2026-05-06",
            draw: 367,
            numbers: [0, 1, 2, 4],
            time: "14:00"
        },
        {
            date: "2026-05-05",
            draw: 366,
            numbers: [8, 5, 4, 9],
            time: "14:00"
        },
        {
            date: "2026-05-04",
            draw: 365,
            numbers: [0, 7, 1, 4],
            time: "14:00"
        },
        {
            date: "2026-05-03",
            draw: 364,
            numbers: [6, 2, 0, 6],
            time: "14:00"
        },
        {
            date: "2026-05-02",
            draw: 363,
            numbers: [1, 3, 2, 2],
            time: "14:00"
        }, 
        {
            date: "2026-05-01",
            draw: 362,
            numbers: [1, 1, 9, 7],
            time: "14:00"
        }
        // IMPORTANT: Keep only 30 entries maximum
        // Add new results at the TOP, remove from bottom if needed
    ]
};

// Helper function to ensure we only keep last 30 entries
function maintainDataLimit() {
    if (albaniaLottoData.results.length > 30) {
        albaniaLottoData.results = albaniaLottoData.results.slice(0, 30);
    }
}

// Call this initially
maintainDataLimit();
