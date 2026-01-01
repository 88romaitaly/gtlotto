// SOLOMON LOTTERY - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)

const lotteryData = {
    // Array of results - MAX 30 ENTRIES
    results: [
        {
            date: "2024-01-20",
            numbers: [7, 2, 9, 4]
        },
        {
            date: "2024-01-19",
            numbers: [1, 8, 3, 6]
        },
        {
            date: "2024-01-18",
            numbers: [5, 0, 7, 2]
        },
        {
            date: "2024-01-17",
            numbers: [3, 9, 1, 8]
        },
        {
            date: "2024-01-16",
            numbers: [4, 2, 6, 0]
        },
        {
            date: "2024-01-15",
            numbers: [8, 3, 5, 1]
        },
        {
            date: "2024-01-14",
            numbers: [9, 0, 2, 7]
        },
        {
            date: "2024-01-13",
            numbers: [6, 1, 4, 9]
        },
        {
            date: "2024-01-12",
            numbers: [2, 7, 0, 5]
        },
        {
            date: "2024-01-11",
            numbers: [1, 4, 8, 3]
        },
        {
            date: "2024-01-10",
            numbers: [5, 9, 2, 6]
        },
        {
            date: "2024-01-09",
            numbers: [0, 3, 7, 4]
        },
        {
            date: "2024-01-08",
            numbers: [8, 1, 5, 2]
        },
        {
            date: "2024-01-07",
            numbers: [3, 6, 9, 0]
        },
        {
            date: "2024-01-06",
            numbers: [7, 4, 1, 8]
        },
        {
            date: "2024-01-05",
            numbers: [2, 5, 0, 9]
        },
        {
            date: "2024-01-04",
            numbers: [4, 8, 3, 7]
        },
        {
            date: "2024-01-03",
            numbers: [9, 2, 6, 1]
        },
        {
            date: "2024-01-02",
            numbers: [0, 7, 4, 3]
        },
        {
            date: "2024-01-01",
            numbers: [5, 1, 8, 2]
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
