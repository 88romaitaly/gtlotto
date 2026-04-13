// ALBANIA LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)
// Draw time: 14:00 GMT (21:00 WIB converted)

const albaniaLottoData = {
    // Array of results - MAX 30 ENTRIES
    results: [

        {
            date: "2026-04-13",
            draw: 344,
            numbers: [8, 5, 1, 1],
            time: "14:00"
        },
        {
            date: "2026-04-12",
            draw: 343,
            numbers: [7, 7, 8, 7],
            time: "14:00"
        },
        {
            date: "2026-04-11",
            draw: 342,
            numbers: [0, 8, 4, 3],
            time: "14:00"
        }, 
        {
            date: "2026-04-10",
            draw: 341,
            numbers: [6, 9, 5, 1],
            time: "14:00"
        }, 
        {
            date: "2026-04-09",
            draw: 340,
            numbers: [1, 3, 2, 7],
            time: "14:00"
        }, 
       {
            date: "2026-04-08",
            draw: 339,
            numbers: [5, 8, 9, 0],
            time: "14:00"
        }, 
        {
            date: "2026-04-07",
            draw: 338,
            numbers: [9, 4, 8, 6],
            time: "14:00"
        },
        {
            date: "2026-04-06",
            draw: 337,
            numbers: [3, 0, 0, 6],
            time: "14:00"
        },
        {
            date: "2026-04-05",
            draw: 336,
            numbers: [7, 7, 3, 2],
            time: "14:00"
        },
        {
            date: "2026-04-04",
            draw: 335,
            numbers: [9, 2, 8, 0],
            time: "14:00"
        },
        {
            date: "2026-04-03",
            draw: 334,
            numbers: [9, 0, 1, 1],
            time: "14:00"
        },
        {
            date: "2026-04-02",
            draw: 333,
            numbers: [3, 1, 6, 4],
            time: "14:00"
        },
        {
            date: "2026-04-01",
            draw: 332,
            numbers: [5, 3, 1, 4],
            time: "14:00"
        },
        {
            date: "2026-03-31",
            draw: 331,
            numbers: [0, 2, 3, 7],
            time: "14:00"
        },
        {
            date: "2026-03-30",
            draw: 330,
            numbers: [8, 1, 9, 8],
            time: "14:00"
        },
        {
            date: "2026-03-29",
            draw: 329,
            numbers: [5, 6, 3, 1],
            time: "14:00"
        },
        {
            date: "2026-03-28",
            draw: 328,
            numbers: [6, 1, 4, 9],
            time: "14:00"
        },
        {
            date: "2026-03-27",
            draw: 327,
            numbers: [5, 3, 8, 7],
            time: "14:00"
        },
        {
            date: "2026-03-26",
            draw: 326,
            numbers: [1, 8, 6, 4],
            time: "14:00"
        },
        {
            date: "2026-03-25",
            draw: 325,
            numbers: [1, 5, 2, 1],
            time: "14:00"
        },{
            date: "2026-03-24",
            draw: 324,
            numbers: [8, 3, 1, 2],
            time: "14:00"
        },{
            date: "2026-03-23",
            draw: 323,
            numbers: [8, 0, 0, 7],
            time: "14:00"
        },{
            date: "2026-03-22",
            draw: 322,
            numbers: [2, 8, 4, 0],
            time: "14:00"
        },{
            date: "2026-03-21",
            draw: 321,
            numbers: [4, 1, 3, 0],
            time: "14:00"
        },{
            date: "2026-03-20",
            draw: 320,
            numbers: [0, 2, 5, 7],
            time: "14:00"
        },{
            date: "2026-03-19",
            draw: 319,
            numbers: [9, 4, 1, 0],
            time: "14:00"
        },{
            date: "2026-03-18",
            draw: 318,
            numbers: [1, 1, 6, 2],
            time: "14:00"
        },{
            date: "2026-03-17",
            draw: 317,
            numbers: [6, 8, 1, 0],
            time: "14:00"
        },{
            date: "2026-03-16",
            draw: 316,
            numbers: [2, 8, 1, 0],
            time: "14:00"
        },{
            date: "2026-03-15",
            draw: 315,
            numbers: [4, 4, 3, 8],
            time: "14:00"
        },{
            date: "2026-03-14",
            draw: 314,
            numbers: [9, 4, 6, 0],
            time: "14:00"
        },{
            date: "2026-03-13",
            draw: 313,
            numbers: [3, 2, 6, 4],
            time: "14:00"
        },{
            date: "2026-03-12",
            draw: 312,
            numbers: [6, 9, 7, 4],
            time: "14:00"
        },
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
