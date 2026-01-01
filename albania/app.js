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
            const dayName = date.toLocaleDateString('sq-AL', { weekday: 'short' });
            const formattedDate = date.toLocaleDateString('sq-AL', {
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

    updateAdvancedStatistics() {
        if (!albaniaLottoData.results || albaniaLottoData.results.length === 0) return;
        
        const results = albaniaLottoData.results;
        
        // 1. Calculate frequency of each number (0-9)
        const frequency = {};
        const allNumbers = results.flatMap(r => r.numbers);
        
        allNumbers.forEach(num => {
            frequency[num] = (frequency[num] || 0) + 1;
        });
        
        // 2. Get hot numbers (most frequent)
        const hotNumbers = Object.entries(frequency)
            .map(([num, count]) => ({ num: parseInt(num), count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 5);
        
        // 3. Get cold numbers (least frequent)
        const coldNumbers = Object.entries(frequency)
            .map(([num, count]) => ({ num: parseInt(num), count }))
            .sort((a, b) => a.count - b.count)
            .slice(0, 5);
        
        // 4. Update hot numbers display
        const hotNumbersHTML = hotNumbers.map(item => 
            `<div class="number-badge">
                <span class="num">${item.num}</span>
                <span class="count">(${item.count})</span>
            </div>`
        ).join('');
        document.getElementById('topNumbers').innerHTML = hotNumbersHTML || '<p>Nuk ka të dhëna</p>';
        
        // 5. Update cold numbers display
        const coldNumbersHTML = coldNumbers.map(item => 
            `<div class="number-badge cold">
                <span class="num">${item.num}</span>
                <span class="count">(${item.count})</span>
            </div>`
        ).join('');
        document.getElementById('coldNumbers').innerHTML = coldNumbersHTML || '<p>Nuk ka të dhëna</p>';
        
        // 6. Update total statistics
        const totalDraws = results.length;
        const currentMonth = new Date().getMonth();
        const monthDraws = results.filter(r => {
            const date = new Date(r.date);
            return date.getMonth() === currentMonth;
        }).length;
        
        document.getElementById('totalDraws').textContent = totalDraws;
        document.getElementById('monthDraws').textContent = monthDraws;
        
        // 7. Calculate most active day
        const dayCount = {};
        results.forEach(result => {
            const date = new Date(result.date);
            const day = date.toLocaleDateString('sq-AL', { weekday: 'long' });
            dayCount[day] = (dayCount[day] || 0) + 1;
        });
        
        let mostActiveDay = '-';
        let maxDayCount = 0;
        Object.entries(dayCount).forEach(([day, count]) => {
            if (count > maxDayCount) {
                maxDayCount = count;
                mostActiveDay = day;
            }
        });
        document.getElementById('activeDay').textContent = mostActiveDay;
        
        // 8. Calculate average number
        const sum = allNumbers.reduce((a, b) => a + b, 0);
        const avg = (sum / allNumbers.length).toFixed(1);
        document.getElementById('avgNumber').textContent = avg;
        
        // 9. Create frequency charts
        this.createFrequencyChart(frequency, 'hotNumbersChart', true);
        this.createFrequencyChart(frequency, 'coldNumbersChart', false);
        
        // 10. Create frequency bars for pattern analysis
        this.createFrequencyBars(frequency);
        
        // 11. Calculate repetition statistics
        this.calculateRepetitionStats(results);
    }

    createFrequencyChart(frequency, containerId, isHot) {
        const container = document.getElementById(containerId);
        const maxCount = Math.max(...Object.values(frequency));
        
        let chartHTML = '';
        for (let num = 0; num <= 9; num++) {
            const count = frequency[num] || 0;
            const height = maxCount > 0 ? (count / maxCount * 80) : 0;
            
            chartHTML += `
                <div class="chart-bar ${isHot ? '' : 'cold'}" 
                     style="height: ${height}px"
                     data-value="${count}">
                </div>
            `;
        }
        
        container.innerHTML = chartHTML;
    }

    createFrequencyBars(frequency) {
        const container = document.getElementById('frequencyBars');
        const maxCount = Math.max(...Object.values(frequency));
        
        let barsHTML = '';
        for (let num = 0; num <= 9; num++) {
            const count = frequency[num] || 0;
            const height = maxCount > 0 ? (count / maxCount * 100) : 0;
            
            barsHTML += `
                <div class="frequency-bar" 
                     style="height: ${height}%"
                     data-number="${num}">
                </div>
            `;
        }
        
        container.innerHTML = barsHTML;
    }

    calculateRepetitionStats(results) {
        if (results.length < 2) return;
        
        // Calculate intervals between number repetitions
        const numberLastSeen = {};
        const intervals = [];
        
        // Sort by date ascending
        const sortedByDate = [...results].sort((a, b) => 
            new Date(a.date) - new Date(b.date)
        );
        
        sortedByDate.forEach((result, index) => {
            result.numbers.forEach(num => {
                if (numberLastSeen[num] !== undefined) {
                    const daysDiff = index - numberLastSeen[num];
                    intervals.push(daysDiff);
                }
                numberLastSeen[num] = index;
            });
        });
        
        if (intervals.length > 0) {
            const fastest = Math.min(...intervals);
            const average = (intervals.reduce((a, b) => a + b, 0) / intervals.length).toFixed(1);
            
            document.getElementById('fastestRepeat').textContent = `${fastest} ditë`;
            document.getElementById('avgRepeat').textContent = `${average} ditë`;
        }
    }

    showError() {
        const numbersContainer = document.getElementById('latestNumbers');
        numbersContainer.innerHTML = `
            <div class="error-message">
                <i class="fas fa-exclamation-triangle"></i>
                <p>Nuk mund të ngarkohen rezultatet. Ju lutemi rifreskoni faqen.</p>
            </div>
        `;
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.albaniaLottoApp = new AlbaniaLottoApp();
});

// Global function for exporting data
window.exportData = function() {
    try {
        const dataStr = JSON.stringify(albaniaLottoData, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
        
        const exportFileDefaultName = `albania-lotto-data-${new Date().toISOString().split('T')[0]}.json`;
        
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
        
        // Show confirmation
        const btn = document.querySelector('.export-btn');
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Eksportuar!';
        btn.style.background = 'rgba(68, 255, 68, 0.2)';
        btn.style.borderColor = 'rgba(68, 255, 68, 0.5)';
        
        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.style.background = '';
            btn.style.borderColor = '';
        }, 2000);
        
    } catch (error) {
        alert('Gabim gjatë eksportimit të të dhënave: ' + error.message);
    }
};

// Add CSS for charts and patterns
document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = `
        .chart-bar, .frequency-bar {
            transition: height 0.5s ease;
        }
        
        .chart-bar:hover, .frequency-bar:hover {
            opacity: 0.8;
        }
        
        .number-badge {
            animation: fadeIn 0.5s ease;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes ballAppear {
            0% {
                transform: scale(0) rotate(-180deg);
                opacity: 0;
            }
            70% {
                transform: scale(1.1) rotate(10deg);
            }
            100% {
                transform: scale(1) rotate(0);
                opacity: 1;
            }
        }
        
        .ball {
            animation: ballAppear 0.6s ease-out;
        }
        
        .ball:nth-child(1) { animation-delay: 0.1s; }
        .ball:nth-child(2) { animation-delay: 0.2s; }
        .ball:nth-child(3) { animation-delay: 0.3s; }
        .ball:nth-child(4) { animation-delay: 0.4s; }
    `;
    document.head.appendChild(style);
});
