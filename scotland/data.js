// SCOTLAND LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)

const scotlandLottoData = {
    results: [
        // Format: { date: "YYYY-MM-DD", draw: XXX, numbers: [X,X,X,X], time: "18:57" }

        
        {
            date: "2026-07-01",
            draw: 410,
            numbers: [1, 9, 5, 5],
            time: "11:30"
        },
        {
            date: "2026-06-30",
            draw: 409,
            numbers: [9, 0, 4, 1],
            time: "11:30"
        },
        {
            date: "2026-06-29",
            draw: 408,
            numbers: [0, 3, 2, 6],
            time: "11:30"
        },
        {
            date: "2026-06-28",
            draw: 407,
            numbers: [7, 4, 5, 0],
            time: "11:30"
        },
        {
            date: "2026-06-27",
            draw: 406,
            numbers: [1, 8, 5, 9],
            time: "11:30"
        },
        {
            date: "2026-06-26",
            draw: 405,
            numbers: [0, 8, 5, 8],
            time: "11:30"
        },
        {
            date: "2026-06-25",
            draw: 404,
            numbers: [9, 8, 2, 2],
            time: "11:30"
        },
        {
            date: "2026-06-24",
            draw: 403,
            numbers: [1, 8, 4, 2],
            time: "11:30"
        },
        {
            date: "2026-06-23",
            draw: 402,
            numbers: [9, 4, 7, 4],
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
