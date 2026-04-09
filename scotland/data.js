// SCOTLAND LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)

const scotlandLottoData = {
    results: [
        // Format: { date: "YYYY-MM-DD", draw: XXX, numbers: [X,X,X,X], time: "18:57" }

       {
            date: "2026-04-09",
            draw: 327,
            numbers: [3, 2, 4, 4],
            time: "11:30"
       },
       {
            date: "2026-04-08",
            draw: 326,
            numbers: [5, 6, 5, 0],
            time: "11:30"
        },
        {
            date: "2026-04-07",
            draw: 325,
            numbers: [7, 0, 1, 0],
            time: "11:30"
        },
        {
            date: "2026-04-06",
            draw: 324,
            numbers: [6, 2, 1, 3],
            time: "11:30"
        },
        {
            date: "2026-04-05",
            draw: 323,
            numbers: [7, 1, 0, 2],
            time: "11:30"
        },
        {
            date: "2026-04-04",
            draw: 322,
            numbers: [4, 6, 2, 1],
            time: "11:30"
        },
        {
            date: "2026-04-03",
            draw: 321,
            numbers: [7, 3, 6, 0],
            time: "11:30"
        },
        {
            date: "2026-04-02",
            draw: 320,
            numbers: [2, 2, 6, 7],
            time: "11:30"
        },
        {
            date: "2026-04-01",
            draw: 319,
            numbers: [6, 3, 3, 9],
            time: "11:30"
        },
        {
            date: "2026-03-31",
            draw: 318,
            numbers: [1, 4, 9, 7],
            time: "11:30"
        },
        {
            date: "2026-03-30",
            draw: 317,
            numbers: [7, 2, 9, 3],
            time: "11:30"
        },
        {
            date: "2026-03-29",
            draw: 316,
            numbers: [0, 2, 5, 9],
            time: "11:30"
        },
        {
            date: "2026-03-28",
            draw: 315,
            numbers: [5, 0, 8, 7],
            time: "11:30"
        },
        {
            date: "2026-03-27",
            draw: 314,
            numbers: [4, 8, 5, 1],
            time: "11:30"
        },
        {
            date: "2026-03-26",
            draw: 313,
            numbers: [4, 1, 6, 2],
            time: "11:30"
        },
        {
            date: "2026-03-25",
            draw: 312,
            numbers: [0, 3, 6, 4],
            time: "11:30"
        },{
            date: "2026-03-24",
            draw: 311,
            numbers: [6, 0, 8, 9],
            time: "11:30"
        },{
            date: "2026-03-23",
            draw: 310,
            numbers: [4, 2, 0, 3],
            time: "11:30"
        },{
            date: "2026-03-22",
            draw: 309,
            numbers: [2, 9, 4, 7],
            time: "11:30"
        },{
            date: "2026-03-21",
            draw: 308,
            numbers: [9, 6, 5, 7],
            time: "11:30"
        },{
            date: "2026-03-20",
            draw: 307,
            numbers: [2, 8, 6, 0],
            time: "11:30"
        },{
            date: "2026-03-19",
            draw: 306,
            numbers: [7, 1, 1, 2],
            time: "11:30"
        },{
            date: "2026-03-18",
            draw: 305,
            numbers: [9, 7, 4, 5],
            time: "11:30"
        },{
            date: "2026-03-17",
            draw: 304,
            numbers: [1, 0, 8, 1],
            time: "11:30"
        },{
            date: "2026-03-16",
            draw: 303,
            numbers: [9, 2, 4, 9],
            time: "11:30"
        },{
            date: "2026-03-15",
            draw: 302,
            numbers: [8, 1, 4, 1],
            time: "11:30"
        },{
            date: "2026-03-14",
            draw: 301,
            numbers: [7, 8, 9, 5],
            time: "11:30"
        },{
            date: "2026-03-13",
            draw: 300,
            numbers: [9, 7, 8, 0],
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
