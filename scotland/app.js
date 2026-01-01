// SCOTLAND LOTTO - MAIN APPLICATION
// This file handles display logic and countdown timer

class ScotlandLottoApp {
    constructor() {
        this.drawTimeGMT = "11:30"; // Daily draw time in GMT
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
        
        // Update statistics
        this.updateStatistics();
    }

    updateCurrentTime() {
        const now = new Date();
        const timeStr = now.toLocaleTimeString('en-GB', { 
            timeZone: 'GMT',
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        
        document.getElementById('currentTime').textContent = timeStr;
        document.getElementById('serverTime').textContent = timeStr + ' GMT';
    }

    calculateNextDraw() {
        const now = new Date();
        const today = new Date(now);
        const [drawHour, drawMinute] = this.drawTimeGMT.split(':').map(Number);
        
        // Set today's draw time
        today.setUTCHours(drawHour, drawMinute, 0, 0);
        
        // If today's draw has passed, schedule for tomorrow
        if (now > today) {
            today.setUTCDate(today.getUTCDate() + 1);
        }
        
        this.nextDrawDate = today;
        
        // Update next draw display
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dateStr = today.toLocaleDateString('en-US', options);
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
            if (!scotlandLottoData || !scotlandLottoData.results) {
                throw new Error('Invalid data format');
            }

            // Sort by draw number (descending)
            const sortedResults = [...scotlandLottoData.results].sort((a, b) => 
                b.draw - a.draw
            );

            // Display latest result
            this.displayLatestResult(sortedResults);
            
            // Display recent results table
            this.displayRecentResults(sortedResults);
            
        } catch (error) {
            console.error('Error loading data:', error);
            this.showError();
        }
    }

    displayLatestResult(results) {
        if (results.length === 0) return;
        
        const latest = results[0];
        
        // Update draw info
        document.getElementById('drawNumber').textContent = `Draw #${latest.draw}`;
        document.getElementById('latestDraw').textContent = latest.draw;
        
        // Format date
        const date = new Date(latest.date);
        const dateStr = date.toLocaleDateString('en-GB', {
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
                        <p>No draw results available yet</p>
                    </td>
                </tr>
            `;
            return;
        }
        
        // Create table rows (show last 30)
        let tableHTML = '';
        results.slice(0, 30).forEach(result => {
            const date = new Date(result.date);
            const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
            const formattedDate = date.toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'short',
                year: 'numeric'
            });
            
            // Create balls for table display
            const ballsHTML = result.numbers.map(num => 
                `<div class="table-ball">${num}</div>`
            ).join('');
            
            tableHTML += `
                <tr>
                    <td>${formattedDate}</td>
                    <td><strong>#${result.draw}</strong></td>
                    <td>${result.time} GMT</td>
                    <td><div class="table-balls">${ballsHTML}</div></td>
                    <td>${dayName}</td>
                </tr>
            `;
        });
        
        tableBody.innerHTML = tableHTML;
    }

    updateStatistics() {
        if (!scotlandLottoData.results || scotlandLottoData.results.length === 0) return;
        
        // Calculate frequency of each number (0-9)
        const frequency = {};
        const allNumbers = scotlandLottoData.results.flatMap(r => r.numbers);
        
        allNumbers.forEach(num => {
            frequency[num] = (frequency[num] || 0) + 1;
        });
        
        // Convert to array and sort by frequency
        const sortedFrequency = Object.entries(frequency)
            .map(([num, count]) => ({ num: parseInt(num), count }))
            .sort((a, b) => b.count - a.count);
        
        // Get hot numbers (most frequent)
        const hotNumbers = sortedFrequency.slice(0, 5);
        const hotNumbersHTML = hotNumbers.map(item => 
            `<div class="hot-ball">${item.num}</div>`
        ).join('');
        
        // Get cold numbers (least frequent)
        const coldNumbers = sortedFrequency.slice(-5).reverse();
        const coldNumbersHTML = coldNumbers.map(item => 
            `<div class="cold-ball">${item.num}</div>`
        ).join('');
        
        // Update display
        document.getElementById('hotNumbers').innerHTML = hotNumbersHTML || '<p>No data</p>';
        document.getElementById('coldNumbers').innerHTML = coldNumbersHTML || '<p>No data</p>';
        
        // Update draw counts
        const totalDraws = scotlandLottoData.results.length;
        const currentMonth = new Date().getMonth();
        const monthDraws = scotlandLottoData.results.filter(r => {
            const date = new Date(r.date);
            return date.getMonth() === currentMonth;
        }).length;
        
        document.getElementById('totalDraws').textContent = totalDraws;
        document.getElementById('monthDraws').textContent = monthDraws;
    }

    showError() {
        const numbersContainer = document.getElementById('latestNumbers');
        numbersContainer.innerHTML = `
            <div class="error-message">
                <i class="fas fa-exclamation-triangle"></i>
                <p>Unable to load draw results. Please refresh the page.</p>
            </div>
        `;
        
        // Add error styling
        const style = document.createElement('style');
        style.textContent = `
            .error-message {
                text-align: center;
                padding: 20px;
                color: #FF5555;
            }
            .error-message i {
                font-size: 48px;
                margin-bottom: 15px;
            }
            .no-results {
                text-align: center;
                padding: 40px;
                color: #AAAAAA;
            }
            .no-results i {
                font-size: 36px;
                margin-bottom: 15px;
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.scotlandLottoApp = new ScotlandLottoApp();
});

// Global function for view all toggle
window.toggleViewAll = function() {
    const table = document.querySelector('.results-table');
    const button = document.querySelector('.view-all');
    
    if (table.classList.contains('expanded')) {
        table.classList.remove('expanded');
        button.innerHTML = '<i class="fas fa-expand"></i><span>VIEW ALL 30 DRAWS</span>';
    } else {
        table.classList.add('expanded');
        button.innerHTML = '<i class="fas fa-compress"></i><span>SHOW LESS</span>';
    }
};

// Add table expansion styling
document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = `
        .results-table.expanded tbody {
            display: table-row-group;
        }
        @media (max-width: 768px) {
            .results-table tbody {
                display: none;
            }
            .results-table.expanded tbody {
                display: table-row-group;
            }
        }
    `;
    document.head.appendChild(style);
});
