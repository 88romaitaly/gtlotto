// SCOTLAND LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)

const scotlandLottoData = {
    results: [
        // Format: { date: "YYYY-MM-DD", draw: XXX, numbers: [X,X,X,X], time: "18:57" }

        
        {
            date: "2026-07-05",
            draw: 414,
            numbers: [8, 7, 4, 1],
            time: "11:30"
        },
        {
            date: "2026-07-04",
            draw: 413,
            numbers: [1, 7, 8, 8],
            time: "11:30"
        },
        {
            date: "2026-07-03",
            draw: 412,
            numbers: [6, 5, 1, 8],
            time: "11:30"
        },
        {
            date: "2026-07-02",
            draw: 411,
            numbers: [0, 1, 5, 0],
            time: "11:30"
        },
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
