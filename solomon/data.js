// SOLOMON LOTTERY - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)

const lotteryData = {
    // Array of results - MAX 30 ENTRIES
    results: [
        // 2026
        {
            date: "2026-04-24",
            numbers: [8, 4, 9, 5]
        },
        {
            date: "2026-04-23",
            numbers: [5, 7, 7, 2]
        },
        {
            date: "2026-04-22",
            numbers: [6, 9, 1, 8]
        },
        {
            date: "2026-04-21",
            numbers: [5, 8, 3, 4]
        },
        {
            date: "2026-04-20",
            numbers: [9, 0, 8, 8]
        },
        {
            date: "2026-04-19",
            numbers: [9, 2, 4, 5]
        },
        {
            date: "2026-04-18",
            numbers: [5, 3, 6, 7]
        },
        {
            date: "2026-04-17",
            numbers: [9, 3, 5, 0]
        },
        {
            date: "2026-04-16",
            numbers: [4, 1, 2, 0]
        },
        {
            date: "2026-04-15",
            numbers: [4, 9, 2, 6]
        },
        {
            date: "2026-04-14",
            numbers: [5, 9, 8, 5]
        },
        {
            date: "2026-04-13",
            numbers: [2, 0, 6, 6]
        },
        {
            date: "2026-04-12",
            numbers: [1, 6, 8, 7]
        },
        {
            date: "2026-04-11",
            numbers: [0, 4, 4, 3]
        },
        {
            date: "2026-04-10",
            numbers: [8, 3, 6, 8]
        },
        {
            date: "2026-04-09",
            numbers: [8, 6, 4, 4]
        },
        {
            date: "2026-04-08",
            numbers: [8, 0, 5, 0]
        },
        {
            date: "2026-04-07",
            numbers: [4, 9, 3, 2]
        },
            date: "2026-04-06",
            numbers: [3, 7, 0, 7]
        },
        {
            date: "2026-04-05",
            numbers: [7, 4, 5, 9]
        },
        {
            date: "2026-04-04",
            numbers: [5, 6, 3, 0]
        },
        {
            date: "2026-04-03",
            numbers: [7, 7, 7, 2]
        },
        {
            date: "2026-04-02",
            numbers: [3, 4, 7, 4]
        },
        {
            date: "2026-04-01",
            numbers: [2, 9, 2, 4]
        },
        {
            date: "2026-03-31",
            numbers: [9, 9, 1, 1]
        },
        {
            date: "2026-03-30",
            numbers: [7, 2, 3, 4]
        },
        {
            date: "2026-03-29",
            numbers: [3, 6, 3, 5]
        },
        {
            date: "2026-03-28",
            numbers: [5, 0, 6, 7]
        },
        {
            date: "2026-03-27",
            numbers: [5, 4, 7, 7]
        },
        {
            date: "2026-03-26",
            numbers: [3, 4, 5, 6]
        },
        {
            date: "2026-03-25",
            numbers: [4, 7, 5, 1]
        },
        {
            date: "2026-03-24",
            numbers: [6, 6, 9, 7]
        }, 
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
