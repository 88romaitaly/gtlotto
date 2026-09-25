// SCOTLAND LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)

const scotlandLottoData = {
    results: [
        // Format: { date: "YYYY-MM-DD", draw: XXX, numbers: [X,X,X,X], time: "18:57" }

        {
            date: "2026-09-25",
            draw: 496,
            numbers: [1, 4, 0, 8],
            time: "11:30"
        },
        {
            date: "2026-09-24",
            draw: 495,
            numbers: [9, 3, 5, 1],
            time: "11:30"
        },
        {
            date: "2026-09-23",
            draw: 494,
            numbers: [8, 2, 4, 9],
            time: "11:30"
        },
        {
            date: "2026-09-22",
            draw: 493,
            numbers: [0, 3, 6, 6],
            time: "11:30"
        },
        {
            date: "2026-09-21",
            draw: 492,
            numbers: [2, 0, 5, 8],
            time: "11:30"
        },
        {
            date: "2026-09-20",
            draw: 491,
            numbers: [4, 1, 9, 6],
            time: "11:30"
        },
        {
            date: "2026-09-19",
            draw: 490,
            numbers: [3, 9, 8, 5],
            time: "11:30"
        },
        {
            date: "2026-09-18",
            draw: 489,
            numbers: [2, 8, 7, 4],
            time: "11:30"
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
