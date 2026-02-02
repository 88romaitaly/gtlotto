// ALBANIA LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)
// Draw time: 14:00 GMT (21:00 WIB converted)

const albaniaLottoData = {
    // Array of results - MAX 30 ENTRIES
    results: [
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
        }, 
        {
            date: "2026-01-17",
            draw: 260,
            numbers: [5, 9, 6, 5],
            time: "14:00"
        }, 
        {
            date: "2026-01-16",
            draw: 259,
            numbers: [6, 4, 3, 4],
            time: "14:00"
        }, 
        {
        {
            date: "2026-01-15",
            draw: 258,
            numbers: [5, 1, 1, 6],
            time: "14:00"
        }, 
        {
            date: "2026-01-14",
            draw: 257,
            numbers: [6, 9, 8, 5],
            time: "14:00"
        }, 
        {
            date: "2026-01-13",
            draw: 256,
            numbers: [3, 6, 1, 0],
            time: "14:00"
        }, 
        {
            date: "2026-01-12",
            draw: 255,
            numbers: [6, 0, 4, 4],
            time: "14:00"
        }, 
        {
            date: "2026-01-11",
            draw: 254,
            numbers: [6, 9, 3, 1],
            time: "14:00"
        }, 
        {
            date: "2026-01-10",
            draw: 253,
            numbers: [9, 8, 9, 6],
            time: "14:00"
        }, 
        {
            date: "2026-01-09",
            draw: 252,
            numbers: [0, 4, 7, 6],
            time: "14:00"
        }, 
        {
            date: "2026-01-08",
            draw: 251,
            numbers: [6, 4, 1, 9],
            time: "14:00"
        }, 
        {
            date: "2026-01-07",
            draw: 250,
            numbers: [5, 1, 4, 3],
            time: "14:00"
        }, 
        {
            date: "2026-01-06",
            draw: 249,
            numbers: [2, 0, 4, 6],
            time: "14:00"
        }, 
        {
            date: "2026-01-05",
            draw: 248,
            numbers: [1, 2, 9, 0],
            time: "14:00"
        }, 
        {
            date: "2026-01-04",
            draw: 247,
            numbers: [5, 7, 0, 1],
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
