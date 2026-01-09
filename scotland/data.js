// SCOTLAND LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)

const scotlandLottoData = {
    results: [
        // Format: { date: "YYYY-MM-DD", draw: XXX, numbers: [X,X,X,X], time: "18:57" }

        
        {
            date: "2025-01-09",
            draw: 239,
            numbers: [2, 2, 9, 5],
            time: "11:30"
        },
        {
            date: "2025-01-08",
            draw: 238,
            numbers: [4, 8, 0, 5],
            time: "11:30"
        },
        {
            date: "2025-01-07",
            draw: 237,
            numbers: [8, 7, 3, 6],
            time: "11:30"
        },
        {
            date: "2025-01-06",
            draw: 236,
            numbers: [1, 3, 9, 0],
            time: "11:30"
        },
        {
            date: "2025-01-05",
            draw: 235,
            numbers: [5, 1, 0, 6],
            time: "11:30"
        },
        {
            date: "2025-01-04",
            draw: 234,
            numbers: [7, 8, 1, 0],
            time: "11:30"
        },
        {
            date: "2025-01-03",
            draw: 233,
            numbers: [9, 6, 1, 8],
            time: "11:30"
        },
        {
            date: "2025-01-02",
            draw: 232,
            numbers: [8, 5, 7, 4],
            time: "11:30"
        },
        {
            date: "2025-01-01",
            draw: 231,
            numbers: [2, 9, 4, 6],
            time: "11:30"
        },{
            date: "2025-12-31",
            draw: 230,
            numbers: [1, 8, 0, 8],
            time: "11:57"
        },
        {
            date: "2025-12-30",
            draw: 229,
            numbers: [3, 2, 8, 1],
            time: "11:08"
        },
        {
            date: "2025-12-29",
            draw: 228,
            numbers: [7, 9, 6, 2],
            time: "18:48"
        },
        {
            date: "2025-12-28",
            draw: 227,
            numbers: [9, 6, 1, 2],
            time: "19:08"
        },
        {
            date: "2025-12-27",
            draw: 226,
            numbers: [6, 1, 2, 3],
            time: "18:52"
        },
        {
            date: "2025-12-26",
            draw: 225,
            numbers: [3, 1, 8, 7],
            time: "18:36"
        },
        {
            date: "2025-12-25",
            draw: 224,
            numbers: [5, 8, 6, 1],
            time: "18:33"
        },
        {
            date: "2025-12-24",
            draw: 223,
            numbers: [4, 3, 7, 9],
            time: "18:35"
        },
        {
            date: "2025-12-23",
            draw: 222,
            numbers: [5, 2, 6, 0],
            time: "18:33"
        },
        {
            date: "2025-12-22",
            draw: 221,
            numbers: [4, 2, 0, 5],
            time: "18:30"
        },
        {
            date: "2025-12-21",
            draw: 220,
            numbers: [5, 0, 7, 2],
            time: "18:43"
        },
        {
            date: "2025-12-20",
            draw: 219,
            numbers: [6, 1, 5, 0],
            time: "18:32"
        },
        {
            date: "2025-12-19",
            draw: 218,
            numbers: [4, 7, 8, 6],
            time: "18:45"
        },
        {
            date: "2025-12-18",
            draw: 217,
            numbers: [0, 5, 4, 8],
            time: "18:30"
        },
        {
            date: "2025-12-17",
            draw: 216,
            numbers: [1, 0, 3, 4],
            time: "18:32"
        },
        {
            date: "2025-12-16",
            draw: 215,
            numbers: [2, 7, 3, 6],
            time: "18:30"
        },
        {
            date: "2025-12-15",
            draw: 214,
            numbers: [1, 6, 7, 2],
            time: "18:30"
        },
        {
            date: "2025-12-14",
            draw: 213,
            numbers: [3, 9, 6, 5],
            time: "18:30"
        },
        {
            date: "2025-12-13",
            draw: 212,
            numbers: [2, 6, 5, 8],
            time: "18:30"
        },
        {
            date: "2025-12-12",
            draw: 211,
            numbers: [8, 6, 2, 1],
            time: "18:30"
        },
        {
            date: "2025-12-11",
            draw: 210,
            numbers: [4, 3, 6, 7],
            time: "18:30"
        },
        {
            date: "2025-12-10",
            draw: 209,
            numbers: [9, 7, 4, 6],
            time: "18:30"
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
