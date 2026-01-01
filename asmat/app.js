// ASMAT LOTTO - MAIN APPLICATION
// This file handles display logic, countdown timer, and Fortune Wheel feature
// Draw time: 15:00 WIB

class AsmatLottoApp {
    constructor() {
        this.drawTimeWIB = "15:00"; // Daily draw time in WIB
        this.nextDrawDate = null;
        this.countdownInterval = null;
        this.timeUpdateInterval = null;
        this.isSpinning = false;
        this.fortuneHistory = [];
        this.init();
    }

    init() {
        // Set current time in WIB
        this.updateCurrentTime();
        this.timeUpdateInterval = setInterval(() => this.updateCurrentTime(), 1000);
        
        // Calculate next draw time
        this.calculateNextDraw();
        
        // Start countdown
        this.startCountdown();
        
        // Display data
        this.displayData();
        
        // Initialize Fortune Wheel
        this.initFortuneWheel();
    }

    updateCurrentTime() {
        const now = new Date();
        // Convert to WIB (GMT+7)
        const wibTime = new Date(now.getTime() + (7 * 60 * 60 * 1000));
        const timeStr = wibTime.toLocaleTimeString('en-US', { 
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        
        document.getElementById('currentTime').textContent = timeStr;
        document.getElementById('serverTime').querySelector('span').textContent = timeStr + ' WIB';
    }

    calculateNextDraw() {
        const now = new Date();
        const today = new Date(now);
        const [drawHour, drawMinute] = this.drawTimeWIB.split(':').map(Number);
        
        // Set today's draw time in WIB (GMT+7)
        today.setUTCHours(drawHour - 7, drawMinute, 0, 0);
        
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
            if (!asmatLottoData || !asmatLottoData.results) {
                throw new Error('Invalid data format');
            }

            // Sort by draw number (descending)
            const sortedResults = [...asmatLottoData.results].sort((a, b) => 
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
        if (results.length === 0) {
            // Show message if no data
            document.getElementById('latestNumbers').innerHTML = `
                <div class="no-result">
                    <i class="fas fa-history"></i>
                    <p class="asmat-text">𐨒𐨩𐨯 𐨐𐨮𐨱𐨯 𐨠𐨩𐨮 𐨑𐨯𐨐𐨮</p>
                    <small class="asmat-text">𐨒𐨩𐨯 𐨐𐨮𐨱𐨯 15:00 𐨱𐨒𐨩</small>
                </div>
            `;
            return;
        }
        
        const latest = results[0];
        
        // Update draw info
        document.getElementById('drawNumber').textContent = latest.draw;
        document.getElementById('latestDraw').textContent = latest.draw;
        
        // Format date
        const date = new Date(latest.date);
        const dateStr = date.toLocaleDateString('en-US', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
        document.getElementById('latestDate').textContent = dateStr;
        
        // Update time
        document.getElementById('drawTime').textContent = `${latest.time} WIB`;
        
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
                        <p class="asmat-text">𐨒𐨩𐨯 𐨐𐨮𐨱𐨯 𐨠𐨩𐨮 𐨑𐨯𐨐𐨮</p>
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
            const formattedDate = date.toLocaleDateString('en-US', {
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
                    <td>${result.time} WIB</td>
                    <td><div class="table-balls">${ballsHTML}</div></td>
                    <td>${dayName}</td>
                </tr>
            `;
        });
        
        tableBody.innerHTML = tableHTML;
    }

    initFortuneWheel() {
        const wheel = document.getElementById('fortuneWheel');
        
        // Create 10 segments for the wheel (0-9)
        let segmentsHTML = '';
        const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        
        numbers.forEach((num, index) => {
            const rotation = index * 36; // 360/10 = 36 degrees per segment
            segmentsHTML += `
                <div class="wheel-segment" style="transform: rotate(${rotation}deg)">
                    <div class="wheel-number">${num}</div>
                </div>
            `;
        });
        
        wheel.innerHTML = segmentsHTML;
        
        // Initialize current fortune display
        this.updateCurrentFortune([0, 0, 0, 0]);
    }

    spinFortuneWheel() {
        if (this.isSpinning) return;
        
        this.isSpinning = true;
        const wheel = document.getElementById('fortuneWheel');
        const spinButton = document.getElementById('spinButton');
        const fortuneNumbers = document.querySelectorAll('.fortune-number');
        
        // Disable button during spin
        spinButton.disabled = true;
        spinButton.innerHTML = '<div class="btn-icon"><i class="fas fa-spinner fa-spin"></i></div><span class="asmat-text">𐨒𐨩𐨯 𐨐𐨮𐨱𐨯...</span>';
        
        // Add spinning animation
        wheel.classList.add('spinning');
        
        // Animate fortune numbers
        fortuneNumbers.forEach(num => {
            num.classList.add('rolling');
        });
        
        // Generate 4 random numbers
        const randomNumbers = [];
        for (let i = 0; i < 4; i++) {
            randomNumbers.push(Math.floor(Math.random() * 10));
        }
        
        // Calculate total rotation for dramatic effect
        const totalRotation = 360 * 5 + (randomNumbers[0] * 36); // 5 full spins + offset
        
        // Simulate spinning with CSS transition
        setTimeout(() => {
            wheel.style.transition = 'transform 3s cubic-bezier(0.17, 0.67, 0.83, 0.67)';
            wheel.style.transform = `rotate(${totalRotation}deg)`;
            
            // Stop spinning after animation completes
            setTimeout(() => {
                wheel.classList.remove('spinning');
                wheel.style.transition = 'none';
                
                // Reset transform for next spin
                const currentRotation = totalRotation % 360;
                wheel.style.transform = `rotate(${currentRotation}deg)`;
                
                // Update current fortune display
                this.updateCurrentFortune(randomNumbers);
                
                // Add to history
                this.addToFortuneHistory(randomNumbers);
                
                // Re-enable button
                spinButton.disabled = false;
                spinButton.innerHTML = '<div class="btn-icon"><i class="fas fa-play"></i></div><span class="asmat-text">𐨒𐨩𐨯 𐨐𐨮𐨱𐨯</span>';
                
                // Remove rolling animation
                fortuneNumbers.forEach(num => {
                    num.classList.remove('rolling');
                });
                
                this.isSpinning = false;
            }, 3000);
        }, 1000);
    }

    generateLuckyNumbers() {
        if (this.isSpinning) return;
        
        const luckyButton = document.getElementById('luckyButton');
        const fortuneNumbers = document.querySelectorAll('.fortune-number');
        
        // Disable button during generation
        luckyButton.disabled = true;
        luckyButton.innerHTML = '<div class="btn-icon"><i class="fas fa-spinner fa-spin"></i></div><span class="asmat-text">𐨒𐨩𐨯 𐨠𐨩𐨮...</span>';
        
        // Animate fortune numbers
        fortuneNumbers.forEach(num => {
            num.classList.add('rolling');
        });
        
        // Generate 4 random numbers
        const randomNumbers = [];
        for (let i = 0; i < 4; i++) {
            randomNumbers.push(Math.floor(Math.random() * 10));
        }
        
        // Simulate generation delay
        setTimeout(() => {
            // Update current fortune display
            this.updateCurrentFortune(randomNumbers);
            
            // Add to history
            this.addToFortuneHistory(randomNumbers);
            
            // Re-enable button
            luckyButton.disabled = false;
            luckyButton.innerHTML = '<div class="btn-icon"><i class="fas fa-dice"></i></div><span class="asmat-text">𐨒𐨩𐨯 𐨠𐨩𐨮</span>';
            
            // Remove rolling animation
            fortuneNumbers.forEach(num => {
                num.classList.remove('rolling');
            });
        }, 1500);
    }

    updateCurrentFortune(numbers) {
        const fortuneElements = document.querySelectorAll('.fortune-number');
        
        numbers.forEach((num, index) => {
            fortuneElements[index].textContent = num;
            fortuneElements[index].style.animation = 'none';
            
            // Force reflow to restart animation
            void fortuneElements[index].offsetWidth;
            
            fortuneElements[index].style.animation = 'numberRoll 0.2s 3';
        });
    }

    addToFortuneHistory(numbers) {
        const historyContainer = document.getElementById('fortuneHistory');
        
        // Create history item
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        historyItem.style.animation = 'fadeIn 0.5s ease';
        
        // Add timestamp
        const now = new Date();
        const timeStr = now.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
        });
        
        let numbersHTML = '';
        numbers.forEach(num => {
            numbersHTML += `<div class="history-number">${num}</div>`;
        });
        
        historyItem.innerHTML = numbersHTML;
        
        // Add to beginning of history
        historyContainer.insertBefore(historyItem, historyContainer.firstChild);
        
        // Remove empty message if present
        const emptyMessage = historyContainer.querySelector('.history-empty');
        if (emptyMessage) {
            emptyMessage.remove();
        }
        
        // Limit history to 10 items
        const historyItems = historyContainer.querySelectorAll('.history-item');
        if (historyItems.length > 10) {
            historyContainer.removeChild(historyItems[historyItems.length - 1]);
        }
        
        // Add to internal history array
        this.fortuneHistory.unshift({
            time: timeStr,
            numbers: numbers
        });
    }

    resetFortuneWheel() {
        const wheel = document.getElementById('fortuneWheel');
        const historyContainer = document.getElementById('fortuneHistory');
        
        // Reset wheel position
        wheel.style.transition = 'transform 1s ease';
        wheel.style.transform = 'rotate(0deg)';
        
        // Reset current fortune
        this.updateCurrentFortune([0, 0, 0, 0]);
        
        // Clear history
        historyContainer.innerHTML = `
            <div class="history-empty asmat-text">
                𐨒𐨩𐨯 𐨐𐨮𐨱𐨯 𐨠𐨩𐨮 𐨑𐨯𐨐𐨮 𐨒𐨩𐨯 𐨐𐨮𐨱𐨯
            </div>
        `;
        
        // Clear internal history
        this.fortuneHistory = [];
        
        // Reset after animation
        setTimeout(() => {
            wheel.style.transition = 'none';
        }, 1000);
    }

    showError() {
        const numbersContainer = document.getElementById('latestNumbers');
        numbersContainer.innerHTML = `
            <div class="error-message">
                <i class="fas fa-exclamation-triangle"></i>
                <p class="asmat-text">𐨒𐨩𐨯 𐨐𐨮𐨱𐨯 𐨠𐨩𐨮 𐨑𐨯𐨐𐨮 𐨒𐨩𐨯 𐨐𐨮𐨱𐨯</p>
            </div>
        `;
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.asmatLottoApp = new AsmatLottoApp();
});

// Global functions for button clicks
window.spinFortuneWheel = function() {
    if (window.asmatLottoApp) {
        window.asmatLottoApp.spinFortuneWheel();
    }
};

window.generateLuckyNumbers = function() {
    if (window.asmatLottoApp) {
        window.asmatLottoApp.generateLuckyNumbers();
    }
};

window.resetFortuneWheel = function() {
    if (window.asmatLottoApp) {
        window.asmatLottoApp.resetFortuneWheel();
    }
};

// Add CSS for animations
document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = `
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
        
        .wheel-segment:nth-child(odd) {
            background: rgba(45, 90, 39, 0.6);
        }
        
        .wheel-segment:nth-child(even) {
            background: rgba(26, 47, 26, 0.8);
        }
        
        .history-item {
            transition: all 0.3s ease;
        }
        
        .history-item:hover {
            transform: translateY(-2px);
            background: rgba(74, 124, 58, 0.6);
        }
    `;
    document.head.appendChild(style);
});
