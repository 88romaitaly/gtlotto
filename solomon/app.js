class LotteryApp {
    constructor() {
        this.today = new Date().toISOString().split('T')[0];
        this.init();
    }

    init() {
        this.setCurrentDate();
        this.displayData();
    }

    setCurrentDate() {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dateStr = new Date().toLocaleDateString('en-US', options);
        document.getElementById('currentDate').textContent = dateStr;
    }

    displayData() {
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
            
        } catch (error) {
            console.error('Error loading data:', error);
            this.showError();
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

    formatDate(dateStr) {
        if (!dateStr || dateStr === 'Never') return dateStr;
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric' 
        });
    }

    showError() {
        const statusEl = document.getElementById('resultStatus');
        statusEl.innerHTML = `
            <i class="fas fa-exclamation-triangle" style="color: #f59e0b"></i>
            <span>Unable to load data. Please refresh the page.</span>
        `;
    }
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    new LotteryApp();
});
