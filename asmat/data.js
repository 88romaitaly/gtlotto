// ASMAT LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)
// Draw time: 15:00 WIB (08:00 GMT)

const asmatLottoData = {
    // Array of results - MAX 30 ENTRIES
    results: [
        // New entries go at the TOP
        // Format: { date: "YYYY-MM-DD", draw: XXX, numbers: [X,X,X,X], time: "15:00" }
        
        // January 2026 - Example data

        {
            date: "2026-04-13",
            draw: 288,
            numbers: [7, 1, 9, 4],
            time: "15:00"
        },
        {
            date: "2026-04-13",
            draw: 287,
            numbers: [1, 2, 5, 0],
            time: "15:00"
        },
        {
            date: "2026-04-12",
            draw: 286,
            numbers: [3, 3, 2, 0],
            time: "15:00"
        },
        {
            date: "2026-04-11",
            draw: 285,
            numbers: [9, 2, 3, 7],
            time: "15:00"
        },
        {
            date: "2026-04-10",
            draw: 284,
            numbers: [1, 3, 8, 1],
            time: "15:00"
        },
        {
            date: "2026-04-09",
            draw: 283,
            numbers: [2, 0, 2, 7],
            time: "15:00"
        },
        {
            date: "2026-04-08",
            draw: 282,
            numbers: [1, 7, 7, 5],
            time: "15:00"
        },
        {
            date: "2026-04-07",
            draw: 281,
            numbers: [0, 3, 2, 8],
            time: "15:00"
        },
        {
            date: "2026-04-06",
            draw: 280,
            numbers: [8, 4, 6, 0],
            time: "15:00"
        },
        {
            date: "2026-04-05",
            draw: 279,
            numbers: [9, 1, 2, 7],
            time: "15:00"
        },
        {
            date: "2026-04-04",
            draw: 278,
            numbers: [4, 1, 3, 7],
            time: "15:00"
        },
        {
            date: "2026-04-03",
            draw: 277,
            numbers: [0, 2, 3, 0],
            time: "15:00"
        },
        {
            date: "2026-04-02",
            draw: 276,
            numbers: [4, 4, 0, 5],
            time: "15:00"
        },
        {
            date: "2026-04-01",
            draw: 275,
            numbers: [6, 7, 2, 0],
            time: "15:00"
        },
        {
            date: "2026-03-31",
            draw: 274,
            numbers: [9, 5, 3, 7],
            time: "15:00"
        },
        {
            date: "2026-03-30",
            draw: 273,
            numbers: [0, 3, 2, 6],
            time: "15:00"
        },
        {
            date: "2026-03-29",
            draw: 272,
            numbers: [0, 7, 5, 2],
            time: "15:00"
        },
        {
            date: "2026-03-28",
            draw: 271,
            numbers: [7, 3, 1, 6],
            time: "15:00"
        },
        {
            date: "2026-03-27",
            draw: 270,
            numbers: [8, 5, 5, 3],
            time: "15:00"
        },
        {
            date: "2026-03-26",
            draw: 269,
            numbers: [1, 6, 3, 7],
            time: "15:00"
        }, 
        {
            date: "2026-03-25",
            draw: 268,
            numbers: [2, 8, 4, 1],
            time: "15:00"
        },{
            date: "2026-03-24",
            draw: 267,
            numbers: [9, 0, 3, 3],
            time: "15:00"
        },{
            date: "2026-03-23",
            draw: 266,
            numbers: [4, 8, 8, 4],
            time: "15:00"
        },{
            date: "2026-03-22",
            draw: 265,
            numbers: [6, 3, 7, 5],
            time: "15:00"
        },{
            date: "2026-03-21",
            draw: 264,
            numbers: [5, 6, 4, 0],
            time: "15:00"
        },{
            date: "2026-03-20",
            draw: 263,
            numbers: [3, 1, 3, 8],
            time: "15:00"
        },{
            date: "2026-03-19",
            draw: 262,
            numbers: [0, 7, 7, 8],
            time: "15:00"
        },{
            date: "2026-03-18",
            draw: 261,
            numbers: [8, 8, 6, 0],
            time: "15:00"
        },{
            date: "2026-03-17",
            draw: 260,
            numbers: [1, 7, 0, 2],
            time: "15:00"
        },{
            date: "2026-03-16",
            draw: 259,
            numbers: [6, 8, 5, 5],
            time: "15:00"
        },{
            date: "2026-03-15",
            draw: 258,
            numbers: [9, 1, 1, 3],
            time: "15:00"
        }
        // December 2025 - Example continuation
        // IMPORTANT: Keep only 30 entries maximum
        // Add new results at the TOP, remove from bottom if needed
    ]
};

// Helper function to ensure we only keep last 30 entries
function maintainDataLimit() {
    if (asmatLottoData.results.length > 30) {
        asmatLottoData.results = asmatLottoData.results.slice(0, 30);
    }
}

// Call this initially
maintainDataLimit();
