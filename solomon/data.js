// SOLOMON LOTTERY - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)

const lotteryData = {
    // Array of results - MAX 30 ENTRIES
    results: [
        // 2026
        {
            date: "2026-01-06",
            numbers: [5, 4, 2, 8]
        },
        {
            date: "2026-01-05",
            numbers: [6, 6, 1, 3]
        },
        {
            date: "2026-01-04",
            numbers: [7, 2, 6, 7]
        },
        {
            date: "2026-01-03",
            numbers: [6, 9, 2, 3]
        },
        {
            date: "2026-01-02",
            numbers: [5, 5, 4, 0]
        },
        {
            date: "2026-01-01",
            numbers: [3, 0, 4, 7]
        },
        // Desember 2025
        {
            date: "2025-12-31",
            numbers: [8, 8, 2, 7]
        },
        {
            date: "2025-12-30",
            numbers: [7, 7, 9, 7]
        },
        {
            date: "2025-12-29",
            numbers: [1, 7, 3, 1]
        },
        {
            date: "2025-12-28",
            numbers: [5, 5, 8, 3]
        },
        {
            date: "2025-12-27",
            numbers: [9, 2, 7, 8]
        },
        {
            date: "2025-12-26",
            numbers: [9, 8, 7, 0]
        },
        {
            date: "2025-12-25",
            numbers: [8, 1, 0, 9]
        },
        {
            date: "2025-12-24",
            numbers: [8, 5, 1, 7]
        },
        {
            date: "2025-12-23",
            numbers: [5, 0, 4, 2]
        },
        {
            date: "2025-12-22",
            numbers: [2, 1, 3, 5]
        },
        {
            date: "2025-12-21",
            numbers: [3, 6, 1, 8]
        },
        {
            date: "2025-12-20",
            numbers: [5, 4, 2, 6]
        },
        {
            date: "2025-12-19",
            numbers: [2, 6, 1, 3]
        },
        {
            date: "2025-12-18",
            numbers: [7, 8, 0, 1]
        },
        {
            date: "2025-12-17",
            numbers: [9, 7, 2, 4]
        },
        {
            date: "2025-12-16",
            numbers: [2, 7, 3, 6]
        },
        {
            date: "2025-12-15",
            numbers: [1, 6, 7, 2]
        },
        {
            date: "2025-12-14",
            numbers: [3, 9, 6, 5]
        },
        {
            date: "2025-12-13",
            numbers: [2, 6, 5, 8]
        },
        {
            date: "2025-12-12",
            numbers: [8, 6, 2, 1]
        },
        {
            date: "2025-12-11",
            numbers: [4, 3, 6, 7]
        },
        {
            date: "2025-12-10",
            numbers: [9, 7, 4, 6]
        },
        {
            date: "2025-12-09",
            numbers: [7, 1, 5, 4]
        },
        {
            date: "2025-12-08",
            numbers: [7, 0, 6, 9]
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
