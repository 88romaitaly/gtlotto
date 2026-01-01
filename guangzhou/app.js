// DOM 元素
const fortuneWheel = document.getElementById('fortune-wheel');
const spinButton = document.getElementById('spin-button');
const autoSpinButton = document.getElementById('auto-spin-button');
const resultNumbers = document.getElementById('result-numbers');
const currentTimeElement = document.getElementById('current-time');
const nextDrawTimeElement = document.getElementById('next-draw-time');
const latestNumbersElement = document.getElementById('latest-numbers');
const latestDrawTimeElement = document.getElementById('latest-draw-time');
const frequencyChartElement = document.getElementById('frequency-chart');
const topNumbersListElement = document.getElementById('top-numbers-list');
const totalDrawsElement = document.getElementById('total-draws');
const lastUpdateElement = document.getElementById('last-update');

// Variabel untuk history section
let currentHistoryPage = 1;
const historyPageSize = 10;
let currentFilterDays = 7;

// Variabel umum
let isSpinning = false;
let isAutoSpinning = false;
let spinCount = 0;
let autoSpinInterval = null;

// 初始化应用
function initApp() {
    createWheelNumbers();
    updateCurrentTime();
    updateNextDrawTime();
    displayLatestDraw();
    updateStatsDisplay();
    
    // TAMBAHAN BARU
    updateTodayResult();
    initCountdown();
    loadHistoryData();
    initHistoryControls();
    
    // Panggil fungsi adjust layout
    adjustLayoutForScreenSize();
    
    // 检查并生成今日开奖结果
    checkAndGenerateDailyResult();
    
    // 设置定时器更新时间
    setInterval(updateCurrentTime, 1000);
    
    // 设置定时器检查开奖时间
    setInterval(checkDrawTime, 1000);
    
    // 事件监听器
    spinButton.addEventListener('click', spinWheel);
    autoSpinButton.addEventListener('click', toggleAutoSpin);
    
    // 初始显示
    displayPlaceholderNumbers();
}

// ===== FORTUNE WHEEL FUNCTIONS =====

// 创建转盘数字
function createWheelNumbers() {
    fortuneWheel.innerHTML = '';
    
    // 创建中心点
    const wheelCenter = document.createElement('div');
    wheelCenter.className = 'wheel-center';
    wheelCenter.innerHTML = '<div class="wheel-center-circle"><i class="fas fa-gem"></i></div>';
    fortuneWheel.appendChild(wheelCenter);
    
    // 创建8个数字 (0-7) 均匀分布在转盘上
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7];
    const radius = 120;
    
    numbers.forEach((num, index) => {
        const wheelNumber = document.createElement('div');
        wheelNumber.className = 'wheel-number';
        wheelNumber.textContent = num;
        
        const angle = (index * 45) * (Math.PI / 180);
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        wheelNumber.style.left = `calc(50% + ${x}px)`;
        wheelNumber.style.top = `calc(50% - ${y}px)`;
        wheelNumber.style.transform = `translate(-50%, -50%)`;
        
        fortuneWheel.appendChild(wheelNumber);
    });
    
    // Tambahkan 2 angka lagi (8, 9)
    const extraNumbers = [8, 9];
    extraNumbers.forEach((num, index) => {
        const wheelNumber = document.createElement('div');
        wheelNumber.className = 'wheel-number';
        wheelNumber.textContent = num;
        
        const angle = (index * 180 + 22.5) * (Math.PI / 180);
        const x = Math.cos(angle) * (radius - 30);
        const y = Math.sin(angle) * (radius - 30);
        
        wheelNumber.style.left = `calc(50% + ${x}px)`;
        wheelNumber.style.top = `calc(50% - ${y}px)`;
        wheelNumber.style.transform = `translate(-50%, -50%)`;
        wheelNumber.style.backgroundColor = '#ffeb3b';
        wheelNumber.style.borderColor = '#ff9800';
        
        fortuneWheel.appendChild(wheelNumber);
    });
}

// 旋转转盘
function spinWheel() {
    if (isSpinning) return;
    
    isSpinning = true;
    spinButton.disabled = true;
    
    const spinDegrees = 1800 + Math.floor(Math.random() * 1800);
    
    fortuneWheel.style.transition = 'none';
    fortuneWheel.style.transform = 'rotate(0deg)';
    
    fortuneWheel.offsetHeight;
    
    fortuneWheel.style.transition = 'transform 3s cubic-bezier(0.17, 0.67, 0.83, 0.67)';
    fortuneWheel.style.transform = `rotate(${spinDegrees}deg)`;
    
    setTimeout(() => {
        const randomNumbers = generateRandomNumbers();
        displayResultNumbers(randomNumbers);
        
        spinCount++;
        
        setTimeout(() => {
            isSpinning = false;
            spinButton.disabled = false;
        }, 500);
        
        if (isAutoSpinning) {
            setTimeout(spinWheel, 1500);
        }
    }, 3000);
}

// 显示结果号码
function displayResultNumbers(numbers) {
    resultNumbers.innerHTML = '';
    
    numbers.forEach((number, index) => {
        setTimeout(() => {
            const numberElement = document.createElement('div');
            numberElement.className = 'result-number';
            numberElement.textContent = number;
            resultNumbers.appendChild(numberElement);
            
            numberElement.style.animation = 'popIn 0.5s ease';
        }, index * 200);
    });
}

// 切换自动旋转
function toggleAutoSpin() {
    if (isAutoSpinning) {
        clearInterval(autoSpinInterval);
        isAutoSpinning = false;
        autoSpinButton.innerHTML = '<i class="fas fa-robot"></i> 自动旋转';
        autoSpinButton.style.background = 'linear-gradient(to right, #4CAF50, #2E7D32)';
    } else {
        isAutoSpinning = true;
        autoSpinButton.innerHTML = '<i class="fas fa-stop"></i> 停止自动旋转';
        autoSpinButton.style.background = 'linear-gradient(to right, #f44336, #d32f2f)';
        
        if (!isSpinning) {
            spinWheel();
        }
    }
}

// 显示占位符号码
function displayPlaceholderNumbers() {
    resultNumbers.innerHTML = '';
    
    for (let i = 0; i < 4; i++) {
        const placeholder = document.createElement('div');
        placeholder.className = 'number-placeholder';
        placeholder.textContent = '?';
        resultNumbers.appendChild(placeholder);
    }
}

// ===== TIME & DRAW FUNCTIONS =====

// 更新当前时间
function updateCurrentTime() {
    const now = new Date();
    
    const guangzhouTime = new Date(now.getTime() + 8 * 60 * 60 * 1000);
    
    const timeString = guangzhouTime.toLocaleString('zh-CN', {
        timeZone: 'Asia/Shanghai',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    
    currentTimeElement.textContent = `广州时间: ${timeString}`;
}

// 更新下次开奖时间 - DIPERBAIKI untuk 00:30 GMT+8
function updateNextDrawTime() {
    const now = new Date();
    const guangzhouTime = new Date(now.getTime() + 8 * 60 * 60 * 1000);
    const guangzhouDateStr = guangzhouTime.toISOString().split('T')[0];
    
    // Waktu draw hari ini 00:30 GMT+8
    const drawTimeToday = new Date(`${guangzhouDateStr}T00:30:00+08:00`);
    
    let nextDrawTime;
    let nextDrawText;
    
    // Jika sekarang sudah melewati draw hari ini
    if (guangzhouTime >= drawTimeToday) {
        // Draw berikutnya adalah besok
        const tomorrow = new Date(drawTimeToday);
        tomorrow.setDate(tomorrow.getDate() + 1);
        nextDrawTime = tomorrow;
        nextDrawText = "明天 (明日)";
    } else {
        // Draw berikutnya adalah hari ini
        nextDrawTime = drawTimeToday;
        nextDrawText = "今天 (今日)";
    }
    
    // Format waktu untuk display
    const drawTimeFormatted = nextDrawTime.toLocaleString('zh-CN', {
        timeZone: 'Asia/Shanghai',
        month: '2-digit',
        day: '2-digit',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit'
    }).split(' ')[1];
    
    // Update element dengan styling yang lebih baik
    nextDrawTimeElement.innerHTML = `
        <span style="color: #e65100; font-weight: bold;">下次开奖:</span>
        <span style="color: #ff9800; font-weight: bold;">${drawTimeFormatted} (GMT+8)</span>
        <span style="color: #4CAF50; font-weight: bold;">${nextDrawText}</span>
    `;
}

// 检查开奖时间
function checkDrawTime() {
    updateCountdown();
    
    const now = new Date();
    const guangzhouTime = new Date(now.getTime() + 8 * 60 * 60 * 1000);
    
    // 如果当前时间是开奖时间 (00:30 GMT+8)
    if (guangzhouTime.getHours() === 0 && guangzhouTime.getMinutes() === 30) {
        const todayNumbers = checkAndGenerateDailyResult();
        
        if (todayNumbers) {
            displayLatestDraw();
            updateStatsDisplay();
            updateTodayResult();
            showNotification(`今日开奖结果已生成: ${todayNumbers.join(', ')}`);
            
            loadHistoryData();
        }
    }
}

// 显示最新开奖结果
function displayLatestDraw() {
    const latestDraw = getLatestDraw();
    
    if (latestDraw) {
        latestNumbersElement.innerHTML = '';
        
        latestDraw.numbers.forEach(number => {
            const numberElement = document.createElement('div');
            numberElement.className = 'latest-number';
            numberElement.textContent = number;
            latestNumbersElement.appendChild(numberElement);
        });
        
        const drawDate = new Date(latestDraw.date);
        const drawTimeString = drawDate.toLocaleDateString('zh-CN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
        
        latestDrawTimeElement.textContent = `开奖时间: ${drawTimeString} 00:30`;
    }
}

// ===== STATISTICS FUNCTIONS =====

// 更新统计显示
function updateStatsDisplay() {
    totalDrawsElement.textContent = guangzhouLottoData.drawHistory.length;
    lastUpdateElement.textContent = guangzhouLottoData.lastUpdated;
    updateFrequencyChart();
    updateTopNumbers();
}

// 更新频率图表
function updateFrequencyChart() {
    frequencyChartElement.innerHTML = '';
    
    const maxCount = Math.max(...Object.values(guangzhouLottoData.numberStats));
    
    for (let i = 0; i <= 9; i++) {
        const count = guangzhouLottoData.numberStats[i] || 0;
        const barHeight = maxCount > 0 ? (count / maxCount) * 100 : 0;
        
        const barContainer = document.createElement('div');
        barContainer.className = 'bar-container';
        
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = `${barHeight}%`;
        bar.title = `数字 ${i}: 出现 ${count} 次`;
        
        const barLabel = document.createElement('div');
        barLabel.className = 'bar-label';
        barLabel.textContent = i;
        
        barContainer.appendChild(bar);
        barContainer.appendChild(barLabel);
        frequencyChartElement.appendChild(barContainer);
    }
}

// 更新热门号码
function updateTopNumbers() {
    topNumbersListElement.innerHTML = '';
    
    const topNumbers = getTopNumbers(4);
    
    topNumbers.forEach((item, index) => {
        const topNumberElement = document.createElement('div');
        topNumberElement.className = 'top-number';
        
        if (index === 0) {
            topNumberElement.classList.add('first');
        } else if (index === 1) {
            topNumberElement.classList.add('second');
        } else if (index === 2) {
            topNumberElement.classList.add('third');
        }
        
        topNumberElement.innerHTML = `
            <div class="top-number-value">${item.number}</div>
            <div class="top-number-count">出现 ${item.count} 次</div>
        `;
        
        topNumbersListElement.appendChild(topNumberElement);
    });
}

// ===== DAILY RESULT FUNCTIONS =====

function updateTodayResult() {
    const todayDateElement = document.getElementById('today-date');
    const todayNumbersElement = document.getElementById('today-numbers');
    const resultStatusElement = document.getElementById('result-status');
    
    const now = new Date();
    const guangzhouTime = new Date(now.getTime() + 8 * 60 * 60 * 1000);
    const guangzhouDateStr = guangzhouTime.toISOString().split('T')[0];
    
    let targetDateStr;
    if (guangzhouTime.getHours() >= 0 && guangzhouTime.getMinutes() >= 30) {
        targetDateStr = guangzhouDateStr;
    } else {
        const yesterday = new Date(guangzhouTime);
        yesterday.setDate(yesterday.getDate() - 1);
        targetDateStr = yesterday.toISOString().split('T')[0];
    }
    
    todayDateElement.textContent = targetDateStr;
    
    const todayResult = guangzhouLottoData.todayResult;
    const todayDraw = guangzhouLottoData.drawHistory.find(draw => draw.date === targetDateStr);
    
    if (todayResult || todayDraw) {
        const numbers = todayResult || todayDraw.numbers;
        
        todayNumbersElement.innerHTML = '';
        numbers.forEach(number => {
            const numberElement = document.createElement('div');
            numberElement.className = 'today-number';
            numberElement.textContent = number;
            todayNumbersElement.appendChild(numberElement);
        });
        
        resultStatusElement.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>已开奖 - ${targetDateStr} 00:30</span>
        `;
        resultStatusElement.style.color = '#4CAF50';
    } else {
        todayNumbersElement.innerHTML = `
            <div class="loading-numbers">
                <div class="loading-dot"></div>
                <div class="loading-dot"></div>
                <div class="loading-dot"></div>
                <div class="loading-dot"></div>
            </div>
            <p class="loading-text">等待开奖中...</p>
        `;
        
        resultStatusElement.innerHTML = `
            <i class="fas fa-clock"></i>
            <span>开奖时间: 00:30 (GMT+8)</span>
        `;
        resultStatusElement.style.color = '#e65100';
    }
}

// ===== COUNTDOWN FUNCTIONS =====

function initCountdown() {
    updateCountdownSimple();
    setInterval(updateCountdownSimple, 1000);
}

function updateCountdownSimple() {
    const now = new Date();
    
    // Konversi ke waktu Guangzhou (GMT+8)
    const guangzhouOffset = 8 * 60 * 60 * 1000; // 8 jam dalam milidetik
    const guangzhouTime = new Date(now.getTime() + guangzhouOffset);
    
    // Dapatkan jam dan menit Guangzhou
    const guangzhouHours = guangzhouTime.getUTCHours();
    const guangzhouMinutes = guangzhouTime.getUTCMinutes();
    const guangzhouSeconds = guangzhouTime.getUTCSeconds();
    
    // Hitung waktu hingga 00:30 berikutnya
    let hoursToNextDraw, minutesToNextDraw, secondsToNextDraw;
    
    if (guangzhouHours < 0 || (guangzhouHours === 0 && guangzhouMinutes < 30)) {
        // Jika sebelum 00:30, countdown ke 00:30 hari ini
        hoursToNextDraw = 0 - guangzhouHours;
        minutesToNextDraw = 30 - guangzhouMinutes;
    } else {
        // Jika setelah 00:30, countdown ke 00:30 besok
        hoursToNextDraw = 24 - guangzhouHours;
        minutesToNextDraw = 30 - guangzhouMinutes;
        
        // Adjust jika minutes negatif
        if (minutesToNextDraw < 0) {
            hoursToNextDraw -= 1;
            minutesToNextDraw += 60;
        }
    }
    
    // Adjust seconds
    secondsToNextDraw = 60 - guangzhouSeconds;
    if (secondsToNextDraw === 60) {
        secondsToNextDraw = 0;
        minutesToNextDraw += 1;
    }
    
    // Adjust jika minutes menjadi 60
    if (minutesToNextDraw === 60) {
        hoursToNextDraw += 1;
        minutesToNextDraw = 0;
    }
    
    // Update display
    document.getElementById('hours').textContent = hoursToNextDraw.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutesToNextDraw.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = secondsToNextDraw.toString().padStart(2, '0');
    
    // Jika countdown mencapai 00:00:00, generate result
    if (hoursToNextDraw === 0 && minutesToNextDraw === 0 && secondsToNextDraw === 0) {
        const todayNumbers = checkAndGenerateDailyResult();
        if (todayNumbers) {
            updateTodayResult();
            displayLatestDraw();
            updateStatsDisplay();
            showNotification(`今日开奖结果已生成: ${todayNumbers.join(', ')}`);
            loadHistoryData();
        }
    }
    
    // Update next draw time text
    updateNextDrawTimeSimple();
}

function updateNextDrawTimeSimple() {
    const now = new Date();
    const guangzhouOffset = 8 * 60 * 60 * 1000;
    const guangzhouTime = new Date(now.getTime() + guangzhouOffset);
    
    const guangzhouHours = guangzhouTime.getUTCHours();
    const guangzhouMinutes = guangzhouTime.getUTCMinutes();
    
    let nextDrawDay;
    if (guangzhouHours < 0 || (guangzhouHours === 0 && guangzhouMinutes < 30)) {
        nextDrawDay = "今天";
    } else {
        nextDrawDay = "明天";
    }
    
    nextDrawTimeElement.innerHTML = `
        <span style="color: #e65100;">下一次开奖: </span>
        <span style="color: #ff9800; font-weight: bold;">00:30 (GMT+8)</span>
        <span style="color: #4CAF50; font-weight: bold;"> ${nextDrawDay}</span>
    `;
}


// ===== HISTORY FUNCTIONS =====

function initHistoryControls() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilterDays = parseInt(this.dataset.days);
            currentHistoryPage = 1;
            loadHistoryData();
        });
    });
    
    document.getElementById('search-btn').addEventListener('click', searchHistory);
    document.getElementById('history-search').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') searchHistory();
    });
    
    document.getElementById('prev-page').addEventListener('click', () => {
        if (currentHistoryPage > 1) {
            currentHistoryPage--;
            loadHistoryData();
        }
    });
    
    document.getElementById('next-page').addEventListener('click', () => {
        const totalPages = Math.ceil(getFilteredHistory().length / historyPageSize);
        if (currentHistoryPage < totalPages) {
            currentHistoryPage++;
            loadHistoryData();
        }
    });
}

function getFilteredHistory() {
    let filtered = [...guangzhouLottoData.drawHistory];
    
    if (currentFilterDays > 0) {
        const cutoffDate = new Date();
        cutoffDate.setDate(cutoffDate.getDate() - currentFilterDays);
        filtered = filtered.filter(draw => new Date(draw.date) >= cutoffDate);
    }
    
    const searchTerm = document.getElementById('history-search').value.trim();
    if (searchTerm) {
        filtered = filtered.filter(draw => draw.date.includes(searchTerm));
    }
    
    return filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
}

function loadHistoryData() {
    const filteredHistory = getFilteredHistory();
    const totalPages = Math.ceil(filteredHistory.length / historyPageSize);
    
    document.getElementById('current-page').textContent = currentHistoryPage;
    document.getElementById('total-pages').textContent = totalPages || 1;
    
    document.getElementById('prev-page').disabled = currentHistoryPage <= 1;
    document.getElementById('next-page').disabled = currentHistoryPage >= totalPages;
    
    const startIndex = (currentHistoryPage - 1) * historyPageSize;
    const endIndex = startIndex + historyPageSize;
    const pageData = filteredHistory.slice(startIndex, endIndex);
    
    renderHistoryTable(pageData, startIndex);
    updateHistorySummary(filteredHistory);
}

function renderHistoryTable(data, startIndex) {
    const tbody = document.getElementById('history-table-body');
    tbody.innerHTML = '';
    
    if (data.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="5" style="text-align: center; padding: 40px;">
                    <i class="fas fa-inbox" style="font-size: 48px; color: #ffc107; margin-bottom: 15px;"></i>
                    <p style="font-size: 18px; color: #666;">没有找到开奖记录</p>
                </td>
            </tr>
        `;
        return;
    }
    
    data.forEach((draw, index) => {
        const row = document.createElement('tr');
        const globalIndex = startIndex + index + 1;
        
        const numberCounts = {};
        draw.numbers.forEach(num => {
            numberCounts[num] = (numberCounts[num] || 0) + 1;
        });
        const maxCount = Math.max(...Object.values(numberCounts));
        const luckyNumbers = Object.keys(numberCounts).filter(num => numberCounts[num] === maxCount);
        
        row.innerHTML = `
            <td>${globalIndex}</td>
            <td><strong>${draw.date}</strong></td>
            <td>
                ${draw.numbers.map(num => `<span class="history-number">${num}</span>`).join('')}
            </td>
            <td>
                ${luckyNumbers.map(num => `<i class="fas fa-star lucky-star" title="幸运数字: ${num}"></i>`).join('')}
            </td>
            <td>
                <button class="view-btn" onclick="viewDrawDetail('${draw.date}')">
                    <i class="fas fa-eye"></i> 查看详情
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function searchHistory() {
    currentHistoryPage = 1;
    loadHistoryData();
}

function updateHistorySummary(data) {
    if (data.length === 0) {
        document.getElementById('total-draw-count').textContent = '0';
        document.getElementById('earliest-draw').textContent = '--';
        document.getElementById('latest-draw').textContent = '--';
        document.getElementById('hottest-number').textContent = '--';
        document.getElementById('hottest-count').textContent = '0';
        document.getElementById('avg-frequency').textContent = '0%';
        document.getElementById('odd-percentage').textContent = '0%';
        document.getElementById('even-percentage').textContent = '0%';
        document.getElementById('repeat-count').textContent = '0';
        return;
    }
    
    document.getElementById('total-draw-count').textContent = data.length;
    document.getElementById('earliest-draw').textContent = data[data.length - 1].date;
    document.getElementById('latest-draw').textContent = data[0].date;
    
    const numberStats = {};
    data.forEach(draw => {
        draw.numbers.forEach(num => {
            numberStats[num] = (numberStats[num] || 0) + 1;
        });
    });
    
    const hottestNumber = Object.keys(numberStats).reduce((a, b) => 
        numberStats[a] > numberStats[b] ? a : b
    );
    const hottestCount = numberStats[hottestNumber];
    const avgFrequency = ((hottestCount / (data.length * 4)) * 100).toFixed(1);
    
    document.getElementById('hottest-number').textContent = hottestNumber;
    document.getElementById('hottest-count').textContent = hottestCount;
    document.getElementById('avg-frequency').textContent = `${avgFrequency}%`;
    
    let oddCount = 0, evenCount = 0;
    data.forEach(draw => {
        draw.numbers.forEach(num => {
            if (num % 2 === 0) evenCount++;
            else oddCount++;
        });
    });
    
    const totalNumbers = data.length * 4;
    const oddPercentage = ((oddCount / totalNumbers) * 100).toFixed(1);
    const evenPercentage = ((evenCount / totalNumbers) * 100).toFixed(1);
    
    document.getElementById('odd-percentage').textContent = `${oddPercentage}%`;
    document.getElementById('even-percentage').textContent = `${evenPercentage}%`;
    
    let repeatCount = 0;
    data.forEach(draw => {
        const uniqueNumbers = new Set(draw.numbers);
        if (uniqueNumbers.size < 4) {
            repeatCount++;
        }
    });
    
    document.getElementById('repeat-count').textContent = repeatCount;
}

function viewDrawDetail(date) {
    const draw = guangzhouLottoData.drawHistory.find(d => d.date === date);
    if (!draw) return;
    
    const detailHtml = `
        <div style="text-align: center; padding: 20px;">
            <h3 style="color: #e65100; margin-bottom: 20px;">开奖详情 - ${draw.date}</h3>
            <div style="display: flex; justify-content: center; gap: 15px; margin: 25px 0;">
                ${draw.numbers.map(num => `
                    <div style="width: 60px; height: 60px; border-radius: 50%; background: linear-gradient(45deg, #ffc107, #ff9800); 
                         display: flex; align-items: center; justify-content: center; color: white; font-size: 28px; font-weight: bold;">
                        ${num}
                    </div>
                `).join('')}
            </div>
            <p style="color: #666; margin-bottom: 15px;"><strong>开奖时间:</strong> 00:30 (GMT+8)</p>
            <p style="color: #666; margin-bottom: 15px;"><strong>开奖类型:</strong> 日常开奖</p>
            <p style="color: #666; margin-bottom: 25px;"><strong>开奖状态:</strong> 已完成</p>
            <button onclick="this.parentElement.parentElement.remove()" 
                    style="padding: 10px 25px; background: #ff9800; color: white; border: none; border-radius: 25px; cursor: pointer;">
                关闭
            </button>
        </div>
    `;
    
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    `;
    
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: white;
        padding: 0;
        border-radius: 15px;
        max-width: 500px;
        width: 90%;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        border: 3px solid #ffc107;
    `;
    
    modalContent.innerHTML = detailHtml;
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

// ===== HELPER FUNCTIONS =====

// Fungsi untuk menyesuaikan layout berdasarkan ukuran layar
function adjustLayoutForScreenSize() {
    const todayNumbersContainer = document.querySelector('.today-numbers');
    const resultNumbersContainer = document.querySelector('.result-numbers');
    const latestNumbersContainer = document.querySelector('.latest-numbers');
    
    if (!todayNumbersContainer || !resultNumbersContainer || !latestNumbersContainer) return;
    
    const screenWidth = window.innerWidth;
    
    if (screenWidth < 350) {
        todayNumbersContainer.style.gap = '4px';
        resultNumbersContainer.style.gap = '4px';
        latestNumbersContainer.style.gap = '4px';
    } else if (screenWidth < 400) {
        todayNumbersContainer.style.gap = '6px';
        resultNumbersContainer.style.gap = '6px';
        latestNumbersContainer.style.gap = '6px';
    } else if (screenWidth < 480) {
        todayNumbersContainer.style.gap = '8px';
        resultNumbersContainer.style.gap = '8px';
        latestNumbersContainer.style.gap = '8px';
    } else {
        todayNumbersContainer.style.gap = '';
        resultNumbersContainer.style.gap = '';
        latestNumbersContainer.style.gap = '';
    }
}

// 生成随机号码 (4个数字，范围0-9)
function generateRandomNumbers() {
    const numbers = [];
    for (let i = 0; i < 4; i++) {
        numbers.push(Math.floor(Math.random() * 10));
    }
    return numbers;
}

// 显示通知
function showNotification(message) {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 5000);
}

// ===== EVENT LISTENERS =====

// 初始化应用
document.addEventListener('DOMContentLoaded', initApp);

// Event listener untuk resize window
window.addEventListener('resize', adjustLayoutForScreenSize);

// Export fungsi untuk digunakan di global scope
window.viewDrawDetail = viewDrawDetail;
window.generateRandomNumbers = generateRandomNumbers;
