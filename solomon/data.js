// SOLOMON LOTTERY - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)

const lotteryData = {
    // Array of results - MAX 30 ENTRIES
    results: [
        // 2026
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
        {
            date: "2026-05-24",
            numbers: [3, 7, 5, 4]
        },
        {
            date: "2026-05-23",
            numbers: [4, 2, 1, 3]
        },
        {
            date: "2026-05-22",
            numbers: [6, 3, 8, 1]
        },
        {
            date: "2026-05-21",
            numbers: [0, 0, 4, 5]
        },
        {
            date: "2026-05-20",
            numbers: [1, 9, 5, 2]
        },
        {
            date: "2026-05-19",
            numbers: [6, 1, 0, 6]
        },
        {
            date: "2026-05-18",
            numbers: [0, 3, 7, 9]
        },
        {
            date: "2026-05-17",
            numbers: [4, 7, 1, 6]
        },
        {
            date: "2026-05-16",
            numbers: [3, 6, 0, 8]
        },
        {
            date: "2026-05-15",
            numbers: [0, 2, 4, 4]
        },
        {
            date: "2026-05-14",
            numbers: [7, 0, 8, 3]
        },
        {
            date: "2026-05-13",
            numbers: [7, 5, 1, 5]
        },
        {
            date: "2026-05-12",
            numbers: [4, 1, 5, 8]
        },
        {
            date: "2026-05-11",
            numbers: [2, 8, 6, 0]
        },
        {
            date: "2026-05-10",
            numbers: [5, 0, 2, 2]
        },
        {
            date: "2026-05-09",
            numbers: [8, 3, 3, 1]
        },
        {
            date: "2026-05-08",
            numbers: [6, 2, 9, 1]
        },
        {
            date: "2026-05-07",
            numbers: [5, 6, 2, 8]
        },
        {
            date: "2026-05-06",
            numbers: [0, 4, 5, 1]
        },
        {
            date: "2026-05-05",
            numbers: [0, 3, 5, 4]
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
