// ALBANIA LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)
// Draw time: 14:00 GMT (21:00 WIB converted)

const albaniaLottoData = {
    // Array of results - MAX 30 ENTRIES
    results: [
        
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
        },{
            date: "2026-03-11",
            draw: 311,
            numbers: [6, 4, 7, 8],
            time: "14:00"
        },{
            date: "2026-03-10",
            draw: 310,
            numbers: [0, 2, 7, 5],
            time: "14:00"
        },{
            date: "2026-03-09",
            draw: 309,
            numbers: [9, 2, 3, 5],
            time: "14:00"
        },{
            date: "2026-03-08",
            draw: 308,
            numbers: [4, 9, 0, 5],
            time: "14:00"
        },{
            date: "2026-03-07",
            draw: 307,
            numbers: [5, 0, 6, 2],
            time: "14:00"
        },{
            date: "2026-03-06",
            draw: 306,
            numbers: [6, 6, 4, 1],
            time: "14:00"
        },{
            date: "2026-03-05",
            draw: 305,
            numbers: [8, 0, 5, 0],
            time: "14:00"
        },{
            date: "2026-03-04",
            draw: 304,
            numbers: [1, 5, 8, 1],
            time: "14:00"
        },{
            date: "2026-03-03",
            draw: 303,
            numbers: [0, 1, 6, 8],
            time: "14:00"
        },{
            date: "2026-03-02",
            draw: 302,
            numbers: [2, 0, 4, 8],
            time: "14:00"
        },{
            date: "2026-03-01",
            draw: 301,
            numbers: [9, 6, 3, 2],
            time: "14:00"
        },
        {
            date: "2026-02-28",
            draw: 300,
            numbers: [9, 1, 7, 6],
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
