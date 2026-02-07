// SOLOMON LOTTERY - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)

const lotteryData = {
    // Array of results - MAX 30 ENTRIES
    results: [
        // 2026
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
        },
        {
            date: "2026-01-23",
            numbers: [7, 3, 4, 0]
        },
        {
            date: "2026-01-22",
            numbers: [1, 5, 4, 1]
        },
        {
            date: "2026-01-21",
            numbers: [3, 6, 4, 6]
        },
        {
            date: "2026-01-20",
            numbers: [1, 0, 5, 3]
        },
        {
            date: "2026-01-19",
            numbers: [4, 4, 1, 6]
        },
        {
            date: "2026-01-18",
            numbers: [3, 0, 0, 2]
        },
        {
            date: "2026-01-17",
            numbers: [5, 2, 5, 5]
        },
        {
            date: "2026-01-16",
            numbers: [6, 3, 9, 6]
        },
        {
            date: "2026-01-15",
            numbers: [9, 0, 0, 5]
        },
        {
            date: "2026-01-14",
            numbers: [9, 7, 6, 0]
        },
        {
            date: "2026-01-13",
            numbers: [8, 5, 3, 8]
        },
        {
            date: "2026-01-12",
            numbers: [2, 4, 4, 0]
        },
        {
            date: "2026-01-11",
            numbers: [4, 9, 2, 3]
        },
        {
            date: "2026-01-10",
            numbers: [5, 1, 7, 6]
        },
        {
            date: "2026-01-09",
            numbers: [3, 0, 8, 4]
        },
        {
            date: "2026-01-08",
            numbers: [2, 5, 2, 4]
        },
        {
            date: "2026-01-07",
            numbers: [3, 0, 4, 6]
        },
        {
            date: "2026-01-06",
            numbers: [5, 4, 2, 8]
        },
        {
            date: "2026-01-05",
            numbers: [6, 6, 1, 3]
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
