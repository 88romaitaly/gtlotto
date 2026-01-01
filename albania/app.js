// ALBANIA LOTTO - MAIN APPLICATION
// This file handles display logic, countdown timer, and advanced statistics
// Draw time: 14:00 GMT (21:00 WIB)

class AlbaniaLottoApp {
    constructor() {
        this.drawTimeGMT = "14:00"; // Daily draw time in GMT (21:00 WIB)
        this.nextDrawDate = null;
        this.countdownInterval = null;
        this.timeUpdateInterval = null;
        this.init();
    }

    init() {
        // Set current time
        this.updateCurrentTime();
        this.timeUpdateInterval = setInterval(() => this.updateCurrentTime(), 1000);
        
        // Calculate next draw time
        this.calculateNextDraw();
        
        // Start countdown
        this.startCountdown();
        
        // Display data
        this.displayData();
        
        // Update advanced statistics
        this.updateAdvancedStatistics();
    }

    updateCurrentTime() {
        const now = new Date();
        const timeStr = now.toLocaleTimeString('sq-AL', { 
            timeZone: 'GMT',
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        
        document.getElementById('currentTime').textContent = timeStr;
        document.getElementById('serverTime').querySelector('span').textContent = timeStr + ' GMT';
    }

    calculateNextDraw() {
        const now = new Date();
        const today = new Date(now);
        const [drawHour, drawMinute] = this.drawTimeGMT.split(':').map(Number);
        
        // Set today's draw time in GMT
        today.setUTCHours(drawHour, drawMinute, 0, 0);
        
        // If today's draw has passed, schedule for tomorrow
        if (now > today) {
            today.setUTCDate(today.getUTCDate() + 1);
        }
        
        this.nextDrawDate = today;
        
        // Update next draw display in Albanian format
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dateStr = today.toLocaleDateString('sq-AL', options);
        document.getElementById('nextDrawDate').textContent = dateStr;
    }

    startCountdown() {
        this.updateCountdown(); // Initial update
        this.countdownInterval = setInterval(() => this.updateCountdown(), 1000);
    }

    updateCountdown() {
        const now = new Date();
        const diff = this.nextDrawDate - now;
        
        if (diff <= 0) {
            // Draw time reached, recalculate next draw
            this.calculateNextDraw();
            return;
        }
        
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        // Update display
        document.getElementById('countdown-hours').textContent = 
            hours.toString().padStart(2, '0');
        document.getElementById('countdown-minutes').textContent = 
            minutes.toString().padStart(2, '0');
        document.getElementById('countdown-seconds').textContent = 
            seconds.toString().padStart(2, '0');
    }

    displayData() {
        try {
            // Ensure data is valid
            if (!albaniaLottoData || !albaniaLottoData.results) {
                throw new Error('Format i pavlefshëm i të dhënave');
            }

            // Sort by draw number (descending)
            const sortedResults = [...albaniaLottoData.results].sort((a, b) => 
                b.draw - a.draw
            );

            // Display latest result
            this.displayLatestResult(sortedResults);
            
            // Display recent results table
            this.displayRecentResults(sortedResults);
            
        } catch (error) {
            console.error('Gabim gjatë ngarkimit të të dhënave:', error);
            this.showError();
        }
    }

    displayLatestResult(results) {
        if (results.length === 0) {
            // Show message if no data
            document.getElementById('latestNumbers').innerHTML = `
                <div class="no-result">
                    <i class="fas fa-history"></i>
                    <p>Asnjë rezultat i nxjerrjes ende</p>
                    <small>Kontrolloni përsëri pas orës 14:00 GMT</small>
                </div>
            `;
            return;
        }
        
        const latest = results[0];
        
        // Update draw info
        document.getElementById('drawNumber').textContent = `Ndryshimi #${latest.draw}`;
        document.getElementById('latestDraw').textContent = latest.draw;
        
        // Format date in Albanian
        const date = new Date(latest.date);
        const dateStr = date.toLocaleDateString('sq-AL', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
        document.getElementById('latestDate').textContent = dateStr;
        
        // Update time
        document.getElementById('drawTime').textContent = `${latest.time} GMT`;
        
        // Display numbers
        const numbersContainer = document.getElementById('latestNumbers');
        numbersContainer.innerHTML = latest.numbers.map(num => 
            `<div class="ball">${num}</div>`
        ).join('');
    }

    displayRecentResults(results) {
        const tableBody = document.getElementById('resultsTable');
        const showCount = document.getElementById('showCount');
        
        // Update count
        const displayCount = Math.min(results.length, 30);
        showCount.textContent = displayCount;
        
        if (results.length === 0) {
            tableBody.innerHTML = `
                <tr>
                    <td colspan="5" class="no-results">
                        <i class="fas fa-history"></i>
                        <p>Asnjë rezultat i disponueshëm</p>
                    </td>
                </tr>
            `;
            return;
        }
        
        // Create table rows (show last 30)
        let tableHTML = '';
        results.slice(0, 30).forEach(result => {
            const date = new Date(result.date);
            const dayName = date.toLocaleDateString('sq-AL', { weekday: 'short
