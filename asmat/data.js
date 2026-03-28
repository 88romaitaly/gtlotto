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
        },{
            date: "2026-03-14",
            draw: 257,
            numbers: [7, 5, 5, 1],
            time: "15:00"
        },{
            date: "2026-03-13",
            draw: 256,
            numbers: [7, 2, 7, 0],
            time: "15:00"
        },{
            date: "2026-03-12",
            draw: 255,
            numbers: [1, 2, 1, 1],
            time: "15:00"
        },{
            date: "2026-03-11",
            draw: 254,
            numbers: [9, 3, 1, 6],
            time: "15:00"
        },{
            date: "2026-03-10",
            draw: 253,
            numbers: [3, 0, 5, 0],
            time: "15:00"
        },{
            date: "2026-03-09",
            draw: 252,
            numbers: [4, 3, 7, 7],
            time: "15:00"
        },{
            date: "2026-03-08",
            draw: 251,
            numbers: [5, 6, 2, 3],
            time: "15:00"
        },{
            date: "2026-03-07",
            draw: 250,
            numbers: [0, 6, 9, 0],
            time: "15:00"
        },{
            date: "2026-03-06",
            draw: 249,
            numbers: [9, 2, 7, 0],
            time: "15:00"
        },{
            date: "2026-03-05",
            draw: 248,
            numbers: [5, 5, 0, 6],
            time: "15:00"
        },{
            date: "2026-03-04",
            draw: 247,
            numbers: [4, 9, 3, 1],
            time: "15:00"
        },{
            date: "2026-03-03",
            draw: 246,
            numbers: [0, 0, 9, 9],
            time: "15:00"
        },{
            date: "2026-03-02",
            draw: 245,
            numbers: [9, 5, 8, 2],
            time: "15:00"
        },{
            date: "2026-03-01",
            draw: 244,
            numbers: [1, 2, 4, 4],
            time: "15:00"
        },
        {
            date: "2026-02-27",
            draw: 243,
            numbers: [2, 2, 6, 5],
            time: "15:00"
        },
        {
            date: "2026-02-26",
            draw: 242,
            numbers: [7, 6, 4, 6],
            time: "15:00"
        },
        {
            date: "2026-02-25",
            draw: 241,
            numbers: [1, 6, 1, 7],
            time: "15:00"
        },
        {
            date: "2026-02-24",
            draw: 240,
            numbers: [6, 2, 2, 1],
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
