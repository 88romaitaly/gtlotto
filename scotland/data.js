// SCOTLAND LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)

const scotlandLottoData = {
    results: [
        // Format: { date: "YYYY-MM-DD", draw: XXX, numbers: [X,X,X,X], time: "18:57" }

        
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
        },{
            date: "2026-03-12",
            draw: 299,
            numbers: [7, 4, 9, 3],
            time: "11:30"
        },{
            date: "2026-03-11",
            draw: 298,
            numbers: [1, 8, 7, 8],
            time: "11:30"
        },{
            date: "2026-03-10",
            draw: 297,
            numbers: [6, 4, 8, 8],
            time: "11:30"
        },{
            date: "2026-03-09",
            draw: 296,
            numbers: [9, 1, 1, 3],
            time: "11:30"
        },{
            date: "2026-03-08",
            draw: 295,
            numbers: [0, 9, 1, 2],
            time: "11:30"
        },{
            date: "2026-03-07",
            draw: 294,
            numbers: [3, 6, 4, 7],
            time: "11:30"
        },{
            date: "2026-03-06",
            draw: 293,
            numbers: [1, 5, 7, 7],
            time: "11:30"
        },{
            date: "2026-03-05",
            draw: 292,
            numbers: [4, 1, 6, 5],
            time: "11:30"
        },{
            date: "2026-03-04",
            draw: 291,
            numbers: [3, 3, 3, 8],
            time: "11:30"
        },{
            date: "2026-03-03",
            draw: 290,
            numbers: [6, 1, 9, 5],
            time: "11:30"
        },
        {
            date: "2026-03-02",
            draw: 289,
            numbers: [3, 0, 6, 7],
            time: "11:30"
        },
        {
            date: "2026-03-01",
            draw: 288,
            numbers: [2, 2, 9, 9],
            time: "11:30"
        },
        {
            date: "2026-02-28",
            draw: 287,
            numbers: [5, 7, 2, 4],
            time: "11:30"
        },
        {
            date: "2026-02-27",
            draw: 286,
            numbers: [9, 6, 3, 2],
            time: "11:30"
        },
        {
            date: "2026-02-26",
            draw: 285,
            numbers: [6, 7, 3, 8],
            time: "11:30"
        },
        {
            date: "2026-02-25",
            draw: 284,
            numbers: [9, 7, 8, 6],
            time: "11:30"
        },
        {
            date: "2026-02-24",
            draw: 283,
            numbers: [4, 5, 2, 7],
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
