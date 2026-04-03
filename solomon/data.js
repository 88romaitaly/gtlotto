// SOLOMON LOTTERY - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)

const lotteryData = {
    // Array of results - MAX 30 ENTRIES
    results: [
        // 2026
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
        {
            date: "2026-03-23",
            numbers: [4, 6, 9, 2]
        },
        {
            date: "2026-03-22",
            numbers: [2, 1, 9, 7]
        },
        {
            date: "2026-03-21",
            numbers: [3, 0, 4, 4]
        },
        {
            date: "2026-03-20",
            numbers: [0, 2, 5, 1]
        },
        {
            date: "2026-03-19",
            numbers: [1, 9, 1, 1]
        },
        {
            date: "2026-03-18",
            numbers: [4, 1, 5, 8]
        },
        {
            date: "2026-03-17",
            numbers: [8, 6, 8, 1]
        },
        {
            date: "2026-03-16",
            numbers: [8, 4, 0, 1]
        },
        {
            date: "2026-03-15",
            numbers: [9, 4, 6, 0]
        },
        {
            date: "2026-03-14",
            numbers: [1, 6, 5, 6]
        },
        {
            date: "2026-03-13",
            numbers: [9, 1, 1, 8]
        },
        {
            date: "2026-03-12",
            numbers: [1, 8, 9, 2]
        },
        {
            date: "2026-03-11",
            numbers: [2, 2, 5, 1]
        },
        {
            date: "2026-03-10",
            numbers: [3, 6, 7, 7]
        },
        {
            date: "2026-03-09",
            numbers: [2, 2, 1, 1]
        },
        {
            date: "2026-03-08",
            numbers: [6, 1, 5, 5]
        },
        {
            date: "2026-03-07",
            numbers: [2, 3, 2, 6]
        },
        {
            date: "2026-03-06",
            numbers: [1, 0, 0, 1]
        },
        {
            date: "2026-03-05",
            numbers: [1, 9, 4, 6]
        },
        {
            date: "2026-03-04",
            numbers: [0, 1, 6, 8]
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
