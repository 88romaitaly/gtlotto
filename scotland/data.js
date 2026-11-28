// SCOTLAND LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)

const scotlandLottoData = {
    results: [
        // Format: { date: "YYYY-MM-DD", draw: XXX, numbers: [X,X,X,X], time: "18:57" }

        {
            date: "2026-11-27",
            draw: 559,
            numbers: [2, 0, 4, 0],
            time: "11:30"
        },
        {
            date: "2026-11-26",
            draw: 558,
            numbers: [7, 8, 0, 8],
            time: "11:30"
        },
        {
            date: "2026-11-25",
            draw: 557,
            numbers: [4, 2, 2, 7],
            time: "11:30"
        },
        {
            date: "2026-11-24",
            draw: 556,
            numbers: [3, 1, 0, 7],
            time: "11:30"
        },
        {
            date: "2026-11-23",
            draw: 555,
            numbers: [6, 2, 4, 9],
            time: "11:30"
        },
        {
            date: "2026-11-22",
            draw: 554,
            numbers: [1, 9, 8, 9],
            time: "11:30"
        },
        {
            date: "2026-11-21",
            draw: 553,
            numbers: [0, 0, 1, 9],
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
