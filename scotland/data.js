// SCOTLAND LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)

const scotlandLottoData = {
    results: [
        // Format: { date: "YYYY-MM-DD", draw: XXX, numbers: [X,X,X,X], time: "18:57" }

        
        {
            date: "2026-02-09",
            draw: 268,
            numbers: [2, 2, 2, 8],
            time: "11:30"
        },
        {
            date: "2026-02-08",
            draw: 267,
            numbers: [7, 0, 6, 4],
            time: "11:30"
        },
        {
            date: "2026-02-07",
            draw: 266,
            numbers: [2, 0, 3, 4],
            time: "11:30"
        },
        {
            date: "2026-02-06",
            draw: 265,
            numbers: [2, 8, 1, 8],
            time: "11:30"
        },
        {
            date: "2026-02-05",
            draw: 264,
            numbers: [6, 1, 4, 6],
            time: "11:30"
        },
        {
            date: "2026-02-04",
            draw: 264,
            numbers: [5, 9, 8, 3],
            time: "11:30"
        },
        {
            date: "2026-02-03",
            draw: 264,
            numbers: [9, 2, 1, 5],
            time: "11:30"
        },
        {
            date: "2026-02-02",
            draw: 263,
            numbers: [0, 8, 2, 2],
            time: "11:30"
        },
        {
            date: "2026-02-01",
            draw: 262,
            numbers: [3, 2, 3, 3],
            time: "11:30"
        },
        {
            date: "2026-01-31",
            draw: 261,
            numbers: [7, 2, 4, 6],
            time: "11:30"
        },
        {
            date: "2026-01-30",
            draw: 260,
            numbers: [4, 1, 5, 6],
            time: "11:30"
        },
        {
            date: "2026-01-29",
            draw: 259,
            numbers: [3, 6, 2, 8],
            time: "11:30"
        },
        {
            date: "2026-01-28",
            draw: 258,
            numbers: [1, 5, 2, 8],
            time: "11:30"
        },
        {
            date: "2026-01-27",
            draw: 257,
            numbers: [5, 9, 0, 1],
            time: "11:30"
        },
        {
            date: "2026-01-26",
            draw: 256,
            numbers: [5, 3, 7, 1],
            time: "11:30"
        },
        {
            date: "2026-01-25",
            draw: 255,
            numbers: [9, 6, 1, 2],
            time: "11:30"
        },
        {
            date: "2026-01-24",
            draw: 254,
            numbers: [6, 0, 3, 4],
            time: "11:30"
        },
        {
            date: "2026-01-23",
            draw: 253,
            numbers: [4, 9, 3, 7],
            time: "11:30"
        },
        {
            date: "2026-01-22",
            draw: 252,
            numbers: [8, 7, 2, 0],
            time: "11:30"
        },
        {
            date: "2026-01-21",
            draw: 251,
            numbers: [2, 5, 5, 6],
            time: "11:30"
        },
        {
            date: "2026-01-20",
            draw: 250,
            numbers: [7, 7, 6, 5],
            time: "11:30"
        },
        {
            date: "2026-01-19",
            draw: 249,
            numbers: [5, 7, 3, 3],
            time: "11:30"
        },
        {
            date: "2026-01-18",
            draw: 248,
            numbers: [1, 9, 8, 2],
            time: "11:30"
        },
        {
            date: "2026-01-17",
            draw: 247,
            numbers: [6, 9, 5, 4],
            time: "11:30"
        },
        {
            date: "2026-01-16",
            draw: 246,
            numbers: [8, 0, 7, 4],
            time: "11:30"
        },
        {
            date: "2026-01-15",
            draw: 245,
            numbers: [1, 7, 4, 6],
            time: "11:30"
        },
        {
            date: "2026-01-14",
            draw: 244,
            numbers: [6, 8, 7, 4],
            time: "11:30"
        },
        {
            date: "2026-01-13",
            draw: 243,
            numbers: [4, 9, 4, 4],
            time: "11:30"
        },
        {
            date: "2026-01-12",
            draw: 242,
            numbers: [3, 8, 3, 7],
            time: "11:30"
        },
        {
            date: "2026-01-11",
            draw: 241,
            numbers: [4, 3, 1, 5],
            time: "11:30"
        },
        {
            date: "2026-01-10",
            draw: 240,
            numbers: [2, 8, 0, 1],
            time: "11:30"
        },
        {
            date: "2025-01-09",
            draw: 239,
            numbers: [2, 2, 9, 5],
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
