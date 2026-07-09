// SOLOMON LOTTERY - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)

const lotteryData = {
    // Array of results - MAX 30 ENTRIES
    results: [
        // 2026
        {
            date: "2026-07-10",
            numbers: [3, 0, 6, 5]
        },
        {
            date: "2026-07-09",
            numbers: [1, 6, 3, 4]
        },
        {
            date: "2026-07-08",
            numbers: [8, 2, 8, 9]
        },
        {
            date: "2026-07-07",
            numbers: [6, 5, 1, 9]
        },
        {
            date: "2026-07-06",
            numbers: [4, 7, 2, 4]
        },
        {
            date: "2026-07-05",
            numbers: [8, 0, 5, 9]
        },
        {
            date: "2026-07-04",
            numbers: [2, 9, 4, 3]
        },
        {
            date: "2026-07-03",
            numbers: [7, 3, 6, 1]
        },
        {
            date: "2026-07-02",
            numbers: [5, 0, 0, 1]
        },
        {
            date: "2026-07-01",
            numbers: [0, 7, 7, 8]
        },
        {
            date: "2026-06-30",
            numbers: [3, 7, 2, 2]
        },
        {
            date: "2026-06-29",
            numbers: [1, 4, 5, 6]
        },
        {
            date: "2026-06-28",
            numbers: [8, 0, 2, 9]
        },
        {
            date: "2026-06-27",
            numbers: [4, 4, 0, 7]
        },
        {
            date: "2026-06-26",
            numbers: [3, 6, 8, 7]
        },
        {
            date: "2026-06-25",
            numbers: [2, 4, 9, 0]
        },
        {
            date: "2026-06-24",
            numbers: [9, 4, 6, 5]
        },
        {
            date: "2026-06-23",
            numbers: [4, 0, 3, 4]
        },
        {
            date: "2026-06-22",
            numbers: [7, 1, 1, 9]
        },
        {
            date: "2026-06-21",
            numbers: [8, 4, 7, 1]
        },
        {
            date: "2026-06-20",
            numbers: [7, 8, 2, 1]
        },
        {
            date: "2026-06-19",
            numbers: [5, 4, 4, 2]
        },
        {
            date: "2026-06-18",
            numbers: [0, 5, 3, 6]
        },
        {
            date: "2026-06-17",
            numbers: [8, 3, 9, 9]
        },
        {
            date: "2026-06-16",
            numbers: [1, 0, 5, 3]
        },
        {
            date: "2026-06-15",
            numbers: [6, 8, 8, 9]
        },
        {
            date: "2026-06-14",
            numbers: [7, 9, 0, 6]
        },
        {
            date: "2026-06-13",
            numbers: [4, 0, 7, 9]
        },
        {
            date: "2026-06-12",
            numbers: [9, 2, 2, 7]
        },
        {
            date: "2026-06-11",
            numbers: [5, 7, 4, 8]
        },
        {
            date: "2026-06-10",
            numbers: [9, 3, 1, 5]
        },
        {
            date: "2026-06-09",
            numbers: [3, 2, 6, 0]
        },
        {
            date: "2026-06-08",
            numbers: [2, 6, 9, 4]
        },
        {
            date: "2026-06-07",
            numbers: [3, 6, 0, 5]
        },
        {
            date: "2026-06-06",
            numbers: [8, 1, 3, 5]
        },
        {
            date: "2026-06-05",
            numbers: [1, 4, 5, 7]
        },
        {
            date: "2026-06-04",
            numbers: [0, 6, 8, 6]
        },
        {
            date: "2026-06-03",
            numbers: [4, 7, 7, 9]
        },
        {
            date: "2026-06-02",
            numbers: [2, 6, 1, 1]
        },
        {
            date: "2026-06-01",
            numbers: [6, 7, 2, 4]
        },
        {
            date: "2026-05-31",
            numbers: [5, 6, 4, 2]
        },
        {
            date: "2026-05-30",
            numbers: [0, 4, 9, 4]
        },
        {
            date: "2026-05-29",
            numbers: [3, 8, 6, 0]
        },
        {
            date: "2026-05-28",
            numbers: [5, 1, 3, 7]
        },
        {
            date: "2026-05-27",
            numbers: [2, 3, 4, 9]
        },
        {
            date: "2026-05-26",
            numbers: [2, 0, 0, 6]
        },
        {
            date: "2026-05-25",
            numbers: [8, 5, 9, 7]
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
