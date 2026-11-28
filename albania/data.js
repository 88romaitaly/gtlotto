// ALBANIA LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)
// Draw time: 14:00 GMT (21:00 WIB converted)

const albaniaLottoData = {
    // Array of results - MAX 30 ENTRIES
    results: [

        {
            date: "2026-11-27",
            draw: 662,
            numbers: 2, 9, 0, 3],
            time: "14:00"
        },
        {
            date: "2026-11-26",
            draw: 661,
            numbers: 4, 0, 4, 2],
            time: "14:00"
        },
        {
            date: "2026-11-25",
            draw: 660,
            numbers: 1, 3, 2, 2],
            time: "14:00"
        },
        {
            date: "2026-11-24",
            draw: 659,
            numbers: 9, 3, 9, 4],
            time: "14:00"
        },
        {
            date: "2026-11-23",
            draw: 658,
            numbers: 0, 5, 3, 1],
            time: "14:00"
        },
        {
            date: "2026-11-22",
            draw: 657,
            numbers: 9, 1, 6, 2],
            time: "14:00"
        },
        {
            date: "2026-11-21",
            draw: 656,
            numbers: 7, 2, 8, 7],
            time: "14:00"
        },
        {
            date: "2026-11-20",
            draw: 655,
            numbers: 5, 2, 6, 8],
            time: "14:00"
        },
        {
            date: "2026-11-19",
            draw: 654,
            numbers: 2, 4, 1, 4],
            time: "14:00"
        },
        {
            date: "2026-11-18",
            draw: 653,
            numbers: 3, 0, 6, 4],
            time: "14:00"
        },
        {
            date: "2026-11-17",
            draw: 652,
            numbers: 0, 3, 2, 3],
            time: "14:00"
        },
        {
            date: "2026-11-16",
            draw: 651,
            numbers: 7, 4, 5, 0],
            time: "14:00"
        },
        {
            date: "2026-11-15",
            draw: 650,
            numbers: 3, 2, 2, 5],
            time: "14:00"
        }
        // IMPORTANT: Keep only 30 entries maximum
        // Add new results at the TOP, remove from bottom if needed
    ]
};

// Helper function to ensure we only keep last 30 entries
function maintainDataLimit() {
    if (albaniaLottoData.results.length > 30) {
        albaniaLottoData.results = albaniaLottoData.results.slice(0, 30);
    }
}

// Call this initially
maintainDataLimit();
