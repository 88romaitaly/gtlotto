// ALBANIA LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)
// Draw time: 14:00 GMT (21:00 WIB converted)

const albaniaLottoData = {
    // Array of results - MAX 30 ENTRIES
    results: [
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
        },
        {
            date: "2025-12-24",
            draw: 236,
            numbers: [8, 1, 5, 3],
            time: "14:00"
        },
        {
            date: "2025-12-23",
            draw: 235,
            numbers: [4, 7, 0, 2],
            time: "14:00"
        },
        {
            date: "2025-12-22",
            draw: 234,
            numbers: [9, 3, 6, 1],
            time: "14:00"
        },
        {
            date: "2025-12-21",
            draw: 233,
            numbers: [5, 8, 2, 7],
            time: "14:00"
        },
        {
            date: "2025-12-20",
            draw: 232,
            numbers: [1, 4, 9, 0],
            time: "14:00"
        },
        {
            date: "2025-12-19",
            draw: 231,
            numbers: [3, 6, 8, 2],
            time: "14:00"
        },
        {
            date: "2025-12-18",
            draw: 230,
            numbers: [7, 0, 4, 5],
            time: "14:00"
        },
        {
            date: "2025-12-17",
            draw: 229,
            numbers: [2, 9, 1, 6],
            time: "14:00"
        },
        {
            date: "2025-12-16",
            draw: 228,
            numbers: [8, 3, 7, 0],
            time: "14:00"
        },
        {
            date: "2025-12-15",
            draw: 227,
            numbers: [4, 1, 5, 9],
            time: "14:00"
        },
        {
            date: "2025-12-14",
            draw: 226,
            numbers: [6, 2, 8, 3],
            time: "14:00"
        },
        {
            date: "2025-12-13",
            draw: 225,
            numbers: [0, 7, 1, 4],
            time: "14:00"
        },
        {
            date: "2025-12-12",
            draw: 224,
            numbers: [9, 5, 3, 8],
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
