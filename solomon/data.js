// SOLOMON LOTTERY - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)

const lotteryData = {
    // Array of results - MAX 30 ENTRIES
    results: [
        // 2026
        {
            date: "2026-10-04",
            numbers: [5, 8, 7, 4]
        },
        {
            date: "2026-10-03",
            numbers: [2, 9, 9, 4]
        },
        {
            date: "2026-10-02",
            numbers: [6, 2, 0, 1]
        },
        {
            date: "2026-10-01",
            numbers: [3, 6, 7, 5]
        },
        {
            date: "2026-09-30",
            numbers: [6, 8, 8, 7]
        },
        {
            date: "2026-09-29",
            numbers: [0, 1, 2, 8]
        },
        {
            date: "2026-09-28",
            numbers: [5, 3, 4, 9]
        },
        {
            date: "2026-09-27",
            numbers: [7, 7, 1, 2]
        },
        {
            date: "2026-09-26",
            numbers: [4, 5, 2, 6]
        }, 
        {
            date: "2026-09-25",
            numbers: [3, 7, 8, 5]
        }, 
        {
            date: "2026-09-24",
            numbers: [8, 3, 3, 9]
        }, 
        {
            date: "2026-09-23",
            numbers: [2, 9, 4, 0]
        }, 
        {
            date: "2026-09-22",
            numbers: [1, 5, 6, 2]
        },
        {
            date: "2026-09-21",
            numbers: [5, 1, 1, 3]
        },
        {
            date: "2026-09-20",
            numbers: [8, 6, 0, 7]
        },
        {
            date: "2026-09-19",
            numbers: [9, 3, 5, 2]
        },
        {
            date: "2026-09-18",
            numbers: [0, 4, 6, 9]
        },
        {
            date: "2026-09-17",
            numbers: [8, 7, 7, 2]
        },
        {
            date: "2026-09-16",
            numbers: [1, 0, 3, 5]
        },
        {
            date: "2026-09-15",
            numbers: [7, 3, 2, 4]
        },
        {
            date: "2026-09-14",
            numbers: [6, 0, 9, 8]
        },
        {
            date: "2026-09-13",
            numbers: [1, 2, 4, 5]
        },
        {
            date: "2026-09-12",
            numbers: [3, 6, 0, 1]
        },
        {
            date: "2026-09-11",
            numbers: [8, 5, 8, 0]
        },
        {
            date: "2026-09-10",
            numbers: [4, 2, 3, 1]
        },
        {
            date: "2026-09-09",
            numbers: [2, 1, 6, 3]
        },
        {
            date: "2026-09-08",
            numbers: [3, 9, 1, 8]
        },
        {
            date: "2026-09-07",
            numbers: [5, 4, 9, 2]
        },
        {
            date: "2026-09-06",
            numbers: [1, 3, 7, 7]
        },
        {
            date: "2026-09-05",
            numbers: [7, 6, 6, 1]
        },
        {
            date: "2026-09-04",
            numbers: [6, 4, 0, 3]
        },
        {
            date: "2026-09-03",
            numbers: [9, 1, 5, 5]
        },
        {
            date: "2026-09-02",
            numbers: [8, 7, 5, 2]
        },
        {
            date: "2026-09-01",
            numbers: [3, 5, 8, 4]
        },
        {
            date: "2026-08-31",
            numbers: [7, 0, 4, 9]
        },
        {
            date: "2026-08-30",
            numbers: [2, 7, 8, 1]
        },
        {
            date: "2026-08-29",
            numbers: [0, 6, 5, 2]
        },
        {
            date: "2026-08-28",
            numbers: [3, 6, 9, 7]
        },
        {
            date: "2026-08-27",
            numbers: [1, 0, 2, 4]
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
