// SOLOMON LOTTERY - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)

const lotteryData = {
    // Array of results - MAX 30 ENTRIES
    results: [
        // 2026
        {
            date: "2026-02-21",
            numbers: [9, 6, 4, 1]
        },{
            date: "2026-02-20",
            numbers: [3, 1, 8, 5]
        },{
            date: "2026-02-19",
            numbers: [7, 9, 7, 1]
        },{
            date: "2026-02-18",
            numbers: [1, 0, 0, 5]
        },{
            date: "2026-02-17",
            numbers: [8, 0, 5, 1]
        },{
            date: "2026-02-16",
            numbers: [2, 5, 8, 7]
        },{
            date: "2026-02-15",
            numbers: [1, 7, 7, 9]
        },{
            date: "2026-02-14",
            numbers: [7, 2, 2, 1]
        },
        {
            date: "2026-02-13",
            numbers: [6, 9, 2, 3]
        },
        {
            date: "2026-02-12",
            numbers: [2, 0, 8, 8]
        },
        {
            date: "2026-02-11",
            numbers: [9, 1, 6, 1]
        },
        {
            date: "2026-02-10",
            numbers: [2, 5, 3, 9]
        },
        {
            date: "2026-02-09",
            numbers: [7, 6, 8, 8]
        },
        {
            date: "2026-02-08",
            numbers: [1, 2, 0, 6]
        },
        {
            date: "2026-02-07",
            numbers: [1, 7, 3, 6]
        },
        {
            date: "2026-02-06",
            numbers: [2, 2, 4, 0]
        },
        {
            date: "2026-02-05",
            numbers: [4, 7, 2, 8]
        },
        {
            date: "2026-02-04",
            numbers: [8, 7, 4, 3]
        },
        {
            date: "2026-02-03",
            numbers: [9, 5, 5, 8]
        },
        {
            date: "2026-02-02",
            numbers: [0, 6, 5, 0]
        },
        {
            date: "2026-02-01",
            numbers: [8, 3, 0, 0]
        },
        {
            date: "2026-01-31",
            numbers: [7, 8, 8, 4]
        },
        {
            date: "2026-01-30",
            numbers: [0, 5, 1, 3]
        },
        {
            date: "2026-01-29",
            numbers: [5, 6, 9, 1]
        },
        {
            date: "2026-01-28",
            numbers: [1, 9, 4, 6]
        },
        {
            date: "2026-01-27",
            numbers: [9, 0, 9, 1]
        },
        {
            date: "2026-01-26",
            numbers: [8, 7, 6, 9]
        },
        {
            date: "2026-01-25",
            numbers: [1, 1, 0, 9]
        },
        {
            date: "2026-01-24",
            numbers: [8, 4, 1, 6]
        }
        // Add new results here at the TOP of the array
        // Format: { date: "YYYY-MM-DD", numbers: [X, X, X, X] }
        // IMPORTANT: Keep only 30 entries maximum
    ]
};

// Helper function to ensure we only keep last 30 entries
function maintainDataLimit() {
    if (lotteryData.results.length > 30) {
        lotteryData.results = lotteryData.results.slice(0, 30);
    }
}

// Call this initially
maintainDataLimit();
