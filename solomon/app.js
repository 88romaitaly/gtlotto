// SOLOMON LOTTERY - MAIN APPLICATION
// This file handles display logic - DO NOT EDIT

class LotteryApp {
    constructor() {
        this.today = new Date().toISOString().split('T')[0];
        this.refreshInterval = 300; // 5 minutes in seconds
        this.countdown = this.refreshInterval;
        this.init();
    }

    init() {
        // Set current date
        this.setCurrentDate();
        
        // Load and display data
        this.loadData();
        
        // Start auto-refresh countdown
        this.startCountdown();
        
        // Update every 5 minutes
        setInterval(() => this.loadData(), this.refreshInterval * 1000);
    }

    setCurrentDate() {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dateStr = new Date().toLocaleDateString('en-US', options);
        document.getElementById('currentDate').textContent = dateStr;
    }

    loadData() {
        try {
            // Ensure data is valid
            if (!lotteryData || !lotteryData.results) {
                throw new Error('Invalid data format');
            }

            // Sort by date (newest first)
            const sortedResults = [...lotteryData.results].sort((a, b) => 
                new Date(b.date) - new Date(a.date)
            );

            // Display today's result
            this.displayTodayResult(sortedResults);
            
            // Display history
            this.displayHistory(sortedResults);
            
            // Update statistics
            this.updateStatistics(sortedResults);
            
            // Update UI status
            this.updateStatus(true);
            
        } catch (error) {
            console.error('Error loading data:', error);
            this.updateStatus(false);
        }
    }

    displayTodayResult(results) {
        const todayResult = results.find(r => r.date === this.today);
        const todayDate = document.getElementById('todayDate');
        const todayNumbers = document.getElementById('todayNumbers');
        
        // Format date
        const dateObj = new Date(this.today);
        const formattedDate = dateObj.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        
        todayDate.textContent = formattedDate;
        
        // Display numbers or "No result yet"
        if (todayResult) {
            todayNumbers.innerHTML = todayResult.numbers.map(num => 
                `<div class="number-ball">${num}</div>`
            ).join('');
        } else {
            todayNumbers.innerHTML = `
                <div class="no-result">
                    <i class="fas fa-clock"></i>
                    <h3>Today's result will be announced at 18:00 GMT</h3>
                    <p>Check back later for the winning numbers</p>
                </div>
            `;
        }
    }

    displayHistory(results) {
        const history = results.filter(r => r.date !== this.today);
        const tableBody = document.getElementById('historyTable');
        const historyCount = document.getElementById('historyCount');
        
        // Update count
        historyCount.textContent = Math.min(history.length, 30);
        
        if (history.length === 0) {
            tableBody.innerHTML = `
                <tr>
                    <td colspan="6" class="no-history">
                        <i class="fas fa-history"></i>
                        <p>No history available yet</p>
                    </td>
                </tr>
            `;
            return;
        }
        
        // Create table rows
        let tableHTML = '';
        history.slice(0, 30).forEach(result => {
            const date = new Date(result.date);
            const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
            const formattedDate = date.toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric',
                year: 'numeric'
            });
            
            tableHTML += `
                <tr>
                    <td>${formattedDate}</td>
                    <td><div class="number-cell">${result.numbers[0]}</div></td>
                    <td><div class="number-cell">${result.numbers[1]}</div></td>
                    <td><div class="number-cell">${result.numbers[2]}</div></td>
                    <td><div class="number-cell">${result.numbers[3]}</div></td>
                    <td class="day-cell">${dayName}</td>
                </tr>
            `;
        });
        
        tableBody.innerHTML = tableHTML;
        
        // Add number cell styling
        const style = document.createElement('style');
        style.textContent = `
            .number-cell {
                display: inline-block;
                width: 36px;
                height: 36px;
                line-height: 36px;
                border-radius: 50%;
                background: #334155;
                font-weight: 600;
                color: #f8fafc;
            }
            .no-result {
                text-align: center;
                padding: 40px;
                color: #94a3b8;
            }
            .no-result i {
                font-size: 48px;
                margin-bottom: 15px;
                color: #475569;
            }
            .no-history {
                text-align: center;
                padding: 40px;
                color: #94a3b8;
            }
            .no-history i {
                font-size: 36px;
                margin-bottom: 10px;
                color: #475569;
            }
        `;
        document.head.appendChild(style);
    }

    updateStatistics(results) {
        // Total draws this month
        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();
        const monthDraws = results.filter(r => {
            const date = new Date(r.date);
            return date.getMonth() === currentMonth && date.getFullYear() === currentYear;
        }).length;
        
        document.getElementById('totalDraws').textContent = monthDraws;
        
        // Most frequent number
        const allNumbers = results.flatMap(r => r.numbers);
        const frequency = {};
        allNumbers.forEach(num => {
            frequency[num] = (frequency[num] || 0) + 1;
        });
        
        let mostFrequent = '-';
        let maxCount = 0;
        Object.entries(frequency).forEach(([num, count]) => {
            if (count > maxCount) {
                maxCount = count;
                mostFrequent = num;
            }
        });
        
        document.getElementById('mostFrequent').textContent = mostFrequent;
        
        // Last update time
        const lastUpdate = results.length > 0 ? results[0].date : 'Never';
        document.getElementById('lastUpdate').textContent = this.formatDate(lastUpdate);
    }

    updateStatus(success) {
        const statusEl = document.getElementById('resultStatus');
        if (success) {
            const now = new Date().toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit',
                second: '2-digit'
            });
            statusEl.innerHTML = `
                <i class="fas fa-check-circle" style="color: #10b981"></i>
                <span>Last updated: ${now}</span>
            `;
        } else {
            statusEl.innerHTML = `
                <i class="fas fa-exclamation-triangle" style="color: #f59e0b"></i>
                <span>Update failed. Please refresh the page.</span>
            `;
        }
    }

    formatDate(dateStr) {
        if (!dateStr || dateStr === 'Never') return dateStr;
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric' 
        });
    }

    startCountdown() {
        setInterval(() => {
            this.countdown--;
            if (this.countdown <= 0) {
                this.countdown = this.refreshInterval;
            }
            document.getElementById('refreshCountdown').textContent = this.countdown;
        }, 1000);
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.lotteryApp = new LotteryApp();
});

// Global function for manual refresh
window.loadData = function() {
    if (window.lotteryApp) {
        window.lotteryApp.loadData();
        window.lotteryApp.countdown = window.lotteryApp.refreshInterval;
        
        // Show refresh feedback
        const btn = document.querySelector('.refresh-btn');
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Refreshed!';
        btn.style.background = '#10b981';
        
        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.style.background = '';
        }, 2000);
    }
};

// Add animation for number balls
document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ballAppear {
            0% { transform: scale(0) rotate(-180deg); opacity: 0; }
            70% { transform: scale(1.1) rotate(10deg); }
            100% { transform: scale(1) rotate(0); opacity: 1; }
        }
        
        .number-ball {
            animation: ballAppear 0.6s ease-out;
        }
        
        .number-ball:nth-child(1) { animation-delay: 0.1s; }
        .number-ball:nth-child(2) { animation-delay: 0.2s; }
        .number-ball:nth-child(3) { animation-delay: 0.3s; }
        .number-ball:nth-child(4) { animation-delay: 0.4s; }
    `;
    document.head.appendChild(style);
});
