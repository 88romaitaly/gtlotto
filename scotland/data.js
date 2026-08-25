// SCOTLAND LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)

const scotlandLottoData = {
    results: [
        // Format: { date: "YYYY-MM-DD", draw: XXX, numbers: [X,X,X,X], time: "18:57" }

        
        {
            date: "2026-08-25",
            draw: 465,
            numbers: [2, 1, 3, 9],
            time: "11:30"
        },
        {
            date: "2026-08-24",
            draw: 464,
            numbers: [7, 5, 2, 3],
            time: "11:30"
        },
        {
            date: "2026-08-23",
            draw: 463,
            numbers: [7, 5, 6, 5],
            time: "11:30"
        },
        {
            date: "2026-08-22",
            draw: 462,
            numbers: [2, 6, 1, 3],
            time: "11:30"
        },
        {
            date: "2026-08-21",
            draw: 461,
            numbers: [4, 6, 7, 0],
            time: "11:30"
        },
        {
            date: "2026-08-20",
            draw: 460,
            numbers: [7, 8, 1, 3],
            time: "11:30"
        },
        {
            date: "2026-08-19",
            draw: 459,
            numbers: [9, 3, 2, 8],
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
