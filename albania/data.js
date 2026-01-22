// ALBANIA LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)
// Draw time: 14:00 GMT (21:00 WIB converted)

const albaniaLottoData = {
    // Array of results - MAX 30 ENTRIES
    results: [
        {
            date: "2025-01-22",
            draw: 265,
            numbers: [5, 5, 2, 7],
            time: "14:00"
        }, 
        {
            date: "2025-01-21",
            draw: 264,
            numbers: [9, 3, 2, 4],
            time: "14:00"
        }, 
        {
            date: "2025-01-20",
            draw: 263,
            numbers: [9, 9, 2, 5],
            time: "14:00"
        }, 
        {
            date: "2025-01-19",
            draw: 262,
            numbers: [0, 1, 9, 2],
            time: "14:00"
        }, 
        {
            date: "2025-01-18",
            draw: 261,
            numbers: [8, 2, 3, 5],
            time: "14:00"
        }, 
        {
            date: "2025-01-17",
            draw: 260,
            numbers: [5, 9, 6, 5],
            time: "14:00"
        }, 
        {
            date: "2025-01-16",
            draw: 259,
            numbers: [6, 4, 3, 4],
            time: "14:00"
        }, 
        {
        {
            date: "2025-01-15",
            draw: 258,
            numbers: [5, 1, 1, 6],
            time: "14:00"
        }, 
        {
            date: "2025-01-14",
            draw: 257,
            numbers: [6, 9, 8, 5],
            time: "14:00"
        }, 
        {
            date: "2025-01-13",
            draw: 256,
            numbers: [3, 6, 1, 0],
            time: "14:00"
        }, 
        {
            date: "2025-01-12",
            draw: 255,
            numbers: [6, 0, 4, 4],
            time: "14:00"
        }, 
        {
            date: "2025-01-11",
            draw: 254,
            numbers: [6, 9, 3, 1],
            time: "14:00"
        }, 
        {
            date: "2025-01-10",
            draw: 253,
            numbers: [9, 8, 9, 6],
            time: "14:00"
        }, 
        {
            date: "2025-01-09",
            draw: 252,
            numbers: [0, 4, 7, 6],
            time: "14:00"
        }, 
        {
            date: "2025-01-08",
            draw: 251,
            numbers: [6, 4, 1, 9],
            time: "14:00"
        }, 
        {
            date: "2025-01-07",
            draw: 250,
            numbers: [5, 1, 4, 3],
            time: "14:00"
        }, 
        {
            date: "2025-01-06",
            draw: 249,
            numbers: [2, 0, 4, 6],
            time: "14:00"
        }, 
        {
            date: "2025-01-05",
            draw: 248,
            numbers: [1, 2, 9, 0],
            time: "14:00"
        }, 
        {
            date: "2025-01-04",
            draw: 247,
            numbers: [5, 7, 0, 1],
            time: "14:00"
        }, 
        {
            date: "2025-01-03",
            draw: 246,
            numbers: [4, 3, 1, 5],
            time: "14:00"
        }, 
        {
            date: "2025-01-02",
            draw: 245,
            numbers: [0, 9, 7, 2],
            time: "14:00"
        }, 
        {
            date: "2025-01-01",
            draw: 244,
            numbers: [8, 6, 1, 7],
            time: "14:00"
        },
        {
            date: "2025-12-31",
            draw: 243,
            numbers: [3, 7, 2, 8],
            time: "14:00"
        },
        {
            date: "2025-12-30",
            draw: 242,
            numbers: [9, 0, 1, 5],
            time: "14:00"
        },
        {
            date: "2025-12-29",
            draw: 241,
            numbers: [4, 2, 7, 3],
            time: "14:00"
        },
        {
            date: "2025-12-28",
            draw: 240,
            numbers: [6, 8, 2, 1],
            time: "14:00"
        },
        {
            date: "2025-12-27",
            draw: 239,
            numbers: [0, 5, 9, 2],
            time: "14:00"
        },
        {
            date: "2025-12-26",
            draw: 238,
            numbers: [7, 3, 1, 8],
            time: "14:00"
        },
        {
            date: "2025-12-25",
            draw: 237,
            numbers: [2, 6, 4, 9],
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
