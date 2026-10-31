// ALBANIA LOTTO - DATA FILE
// ADMIN: Edit this file daily with new results
// Format: Keep only last 30 entries (oldest auto-removed)
// Draw time: 14:00 GMT (21:00 WIB converted)

const albaniaLottoData = {
    // Array of results - MAX 30 ENTRIES
    results: [

        {
            date: "2026-10-31",
            draw: 635,
            numbers: 7, 9, 0, 4],
            time: "14:00"
        },
        {
            date: "2026-10-30",
            draw: 634,
            numbers: 4, 5, 1, 5],
            time: "14:00"
        },
        {
            date: "2026-10-29",
            draw: 633,
            numbers: 2, 4, 9, 3],
            time: "14:00"
        },
        {
            date: "2026-10-28",
            draw: 632,
            numbers: 9, 3, 8, 2],
            time: "14:00"
        },
        {
            date: "2026-10-27",
            draw: 631,
            numbers: 8, 2, 7, 1],
            time: "14:00"
        },
        {
            date: "2026-10-26",
            draw: 630,
            numbers: 6, 9, 6, 8],
            time: "14:00"
        },
        {
            date: "2026-10-25",
            draw: 629,
            numbers: 4, 8, 5, 7],
            time: "14:00"
        },
        {
            date: "2026-10-24",
            draw: 628,
            numbers: 2, 7, 3, 5],
            time: "14:00"
        },
        {
            date: "2026-10-23",
            draw: 627,
            numbers: 0, 6, 1, 4],
            time: "14:00"
        },
        {
            date: "2026-10-22",
            draw: 626,
            numbers: 4, 5, 9, 3],
            time: "14:00"
        },
        {
            date: "2026-10-21",
            draw: 625,
            numbers: 2, 3, 8, 1],
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
