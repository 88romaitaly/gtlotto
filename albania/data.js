// ALBANIA LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)
// Draw time: 14:00 GMT (21:00 WIB converted)

const albaniaLottoData = {
    // Array of results - MAX 30 ENTRIES
    results: [
        {
            date: "2026-02-16",
            draw: 289,
            numbers: [4, 2, 6, 3],
            time: "14:00"
        },
        {
            date: "2026-02-15",
            draw: 288,
            numbers: [3, 6, 7, 3],
            time: "14:00"
        },
        {
            date: "2026-02-14",
            draw: 287,
            numbers: [0, 2, 2, 8],
            time: "14:00"
        },
        {
            date: "2026-02-13",
            draw: 286,
            numbers: [5, 5, 3, 5],
            time: "14:00"
        },
        {
            date: "2026-02-12",
            draw: 285,
            numbers: [6, 3, 7, 9],
            time: "14:00"
        },
        {
            date: "2026-02-11",
            draw: 284,
            numbers: [8, 6, 6, 2],
            time: "14:00"
        },
        {
            date: "2026-02-10",
            draw: 283,
            numbers: [1, 0, 6, 1],
            time: "14:00"
        },
        {
            date: "2026-02-09",
            draw: 282,
            numbers: [4, 8, 1, 8],
            time: "14:00"
        },
        {
            date: "2026-02-08",
            draw: 281,
            numbers: [5, 1, 2, 3],
            time: "14:00"
        },
        {
            date: "2026-02-07",
            draw: 280,
            numbers: [9, 2, 1, 2],
            time: "14:00"
        },
        {
            date: "2026-02-06",
            draw: 279,
            numbers: [8, 4, 1, 3],
            time: "14:00"
        },
        {
            date: "2026-02-05",
            draw: 278,
            numbers: [8, 5, 1, 1],
            time: "14:00"
        },
        {
            date: "2026-02-04",
            draw: 277,
            numbers: [5, 9, 8, 3],
            time: "14:00"
        },
        {
            date: "2026-02-03",
            draw: 276,
            numbers: [0, 9, 2, 5],
            time: "14:00"
        },
        {
            date: "2026-02-02",
            draw: 275,
            numbers: [5, 3, 0, 4],
            time: "14:00"
        },
        {
            date: "2026-02-01",
            draw: 274,
            numbers: [8, 7, 4, 3],
            time: "14:00"
        },
        {
            date: "2026-01-31",
            draw: 273,
            numbers: [0, 1, 0, 8],
            time: "14:00"
        },
        {
            date: "2026-01-30",
            draw: 272,
            numbers: [2, 8, 2, 6],
            time: "14:00"
        },
        {
            date: "2026-01-29",
            draw: 271,
            numbers: [2, 0, 6, 4],
            time: "14:00"
        },
        {
            date: "2026-01-28",
            draw: 270,
            numbers: [6, 5, 9, 1],
            time: "14:00"
        },
        {
            date: "2026-01-27",
            draw: 269,
            numbers: [8, 2, 0, 1],
            time: "14:00"
        },
        {
            date: "2026-01-26",
            draw: 269,
            numbers: [0, 4, 9, 4],
            time: "14:00"
        },
        {
            date: "2026-01-25",
            draw: 268,
            numbers: [9, 0, 8, 5],
            time: "14:00"
        },
        {
            date: "2026-01-24",
            draw: 267,
            numbers: [9, 4, 3, 0],
            time: "14:00"
        },
        {
            date: "2026-01-23",
            draw: 266,
            numbers: [8, 0, 4, 5],
            time: "14:00"
        },
        {
            date: "2026-01-22",
            draw: 265,
            numbers: [5, 5, 2, 7],
            time: "14:00"
        }, 
        {
            date: "2026-01-21",
            draw: 264,
            numbers: [9, 3, 2, 4],
            time: "14:00"
        }, 
        {
            date: "2026-01-20",
            draw: 263,
            numbers: [9, 9, 2, 5],
            time: "14:00"
        }, 
        {
            date: "2026-01-19",
            draw: 262,
            numbers: [0, 1, 9, 2],
            time: "14:00"
        }, 
        {
            date: "2026-01-18",
            draw: 261,
            numbers: [8, 2, 3, 5],
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
