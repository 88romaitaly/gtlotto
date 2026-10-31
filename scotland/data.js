// SCOTLAND LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)

const scotlandLottoData = {
    results: [
        // Format: { date: "YYYY-MM-DD", draw: XXX, numbers: [X,X,X,X], time: "18:57" }

        {
            date: "2026-10-31",
            draw: 532,
            numbers: [9, 1, 8, 3],
            time: "11:30"
        },
        {
            date: "2026-10-30",
            draw: 531,
            numbers: [4, 0, 6, 9],
            time: "11:30"
        },
        {
            date: "2026-10-29",
            draw: 530,
            numbers: [2, 6, 3, 5],
            time: "11:30"
        },
        {
            date: "2026-10-28",
            draw: 529,
            numbers: [9, 4, 1, 2],
            time: "11:30"
        },
        {
            date: "2026-10-27",
            draw: 528,
            numbers: [7, 8, 9, 5],
            time: "11:30"
        },
        {
            date: "2026-10-26",
            draw: 527,
            numbers: [5, 7, 1, 3],
            time: "11:30"
        },
        {
            date: "2026-10-25",
            draw: 526,
            numbers: [3, 5, 9, 0],
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
