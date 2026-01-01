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
    
    // TAMBAHAN BARU: Inisialisasi fitur baru
    updateTodayResult();
    initCountdown();
    loadHistoryData();
    initHistoryControls();
    
    // 检查并生成今日开奖结果
    checkAndGenerateDailyResult();
    
    // 设置定时器更新时间
    setInterval(updateCurrentTime, 1000);
    
    // 设置定时器检查开奖时间
    setInterval(checkDrawTime, 1000); // Ubah ke 1 detik untuk countdown
    
    // 事件监听器
    spinButton.addEventListener('click', spinWheel);
    autoSpinButton.addEventListener('click', toggleAutoSpin);
    
    // 初始显示
    displayPlaceholderNumbers();
}

// ===== FORTUNE WHEEL FUNCTIONS =====

// 创建转盘数字 - DIPERBAIKI agar angka tersebar merata
function createWheelNumbers() {
    fortuneWheel.innerHTML = '';
    
    // 创建中心点
    const wheelCenter = document.createElement('div');
    wheelCenter.className = 'wheel-center';
    wheelCenter.innerHTML = '<div class="wheel-center-circle"><i class="fas fa-gem"></i></div>';
    fortuneWheel.appendChild(wheelCenter);
    
    // 创建8个数字 (0-7) 均匀分布在转盘上
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7];
    const radius = 120; // Radius dari pusat ke angka
    
    numbers.forEach((num, index) => {
        const wheelNumber = document.createElement('div');
        wheelNumber.className = 'wheel-number';
        wheelNumber.textContent = num;
        
        // Hitung posisi menggunakan trigonometri untuk distribusi merata
        const angle = (index * 45) * (Math.PI / 180); // Konversi ke radian
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        // Atur posisi absolut
        wheelNumber.style.left = `calc(50% + ${x}px)`;
        wheelNumber.style.top = `calc(50% - ${y}px)`;
        wheelNumber.style.transform = `translate(-50%, -50%)`;
        
        fortuneWheel.appendChild(wheelNumber);
    });
    
    // Tambahkan 2 angka lagi (8, 9) di posisi yang berbeda
    const extraNumbers = [8, 9];
    extraNumbers.forEach((num, index) => {
        const wheelNumber = document.createElement('div');
        wheelNumber.className = 'wheel-number';
        wheelNumber.textContent = num;
        
        // Posisi sedikit lebih dekat ke pusat
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

// 旋转转盘 - DIPERBAIKI
function spinWheel() {
    if (isSpinning) return;
    
    isSpinning = true;
    spinButton.disabled = true;
    
    // 生成随机旋转角度 (至少旋转5圈以上)
    const spinDegrees = 1800 + Math.floor(Math.random() * 1800);
    
    // 重置转盘位置 sebelum berputar
    fortuneWheel.style.transition = 'none';
    fortuneWheel.style.transform = 'rotate(0deg)';
    
    // Force reflow
    fortuneWheel.offsetHeight;
    
    // 应用旋转动画
    fortuneWheel.style.transition = 'transform 3s cubic-bezier(0.17, 0.67, 0.83, 0.67)';
    fortuneWheel.style.transform = `rotate(${spinDegrees}deg)`;
    
    // 在旋转过程中生成随机号码
    setTimeout(() => {
        const randomNumbers = generateRandomNumbers();
        displayResultNumbers(randomNumbers);
        
        // 更新旋转次数
        spinCount++;
        
        // 重置按钮状态
        setTimeout(() => {
            isSpinning = false;
            spinButton.disabled = false;
        }, 500);
        
        // 如果自动旋转开启，继续旋转
        if (isAutoSpinning) {
            setTimeout(spinWheel, 1500);
        }
    }, 3000); // 3秒后显示结果
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
            
            // Efek tambahan untuk angka yang muncul
            numberElement.style.animation = 'popIn 0.5s ease';
        }, index * 200); // 逐个显示
    });
}

// 切换自动旋转
function toggleAutoSpin() {
    if (isAutoSpinning) {
        // 停止自动旋转
        clearInterval(autoSpinInterval);
        isAutoSpinning = false;
        autoSpinButton.innerHTML = '<i class="fas fa-robot"></i> 自动旋转';
        autoSpinButton.style.background = 'linear-gradient(to right, #4CAF50, #2E7D32)';
    } else {
        // 开始自动旋转
        isAutoSpinning = true;
        autoSpinButton.innerHTML = '<i class="fas fa-stop"></i> 停止自动旋转';
        autoSpinButton.style.background = 'linear-gradient(to right, #f44336, #d32f2f)';
        
        // 如果当前没有在旋转，立即开始一次旋转
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
    
    // 转换为广州时间 (GMT+8)
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
    const today = now.toISOString().split('T')[0];
    
    // 开奖时间: 00:30 GMT+8 = 16:30 GMT+0 (hari sebelumnya)
    // Tapi lebih mudah: kita hitung berdasarkan waktu Guangzhou
    const drawTimeGuangzhou = new Date(`${today}T00:30:00+08:00`);
    
    // Konversi ke UTC untuk perbandingan
    const drawTimeUTC = new Date(drawTimeGuangzhou.getTime() - (8 * 60 * 60 * 1000));
    
    // 如果当前时间已经过了今天的开奖时间，显示明天的开奖时间
    if (now > drawTimeUTC) {
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const tomorrowStr = tomorrow.toISOString().split('T')[0];
        const tomorrowDrawTime = new Date(`${tomorrowStr}T00:30:00+08:00`);
        const tomorrowDrawUTC = new Date(tomorrowDrawTime.getTime() - (8 * 60 * 60 * 1000));
        
        // Update element
        nextDrawTimeElement.textContent = `00:30 (GMT+8) 明天`;
    } else {
        nextDrawTimeElement.textContent = `00:30 (GMT+8) 今天`;
    }
}

// 检查开奖时间
function checkDrawTime() {
    updateCountdown(); // Panggil countdown setiap detik
    
    const now = new Date();
    const drawHour = guangzhouLottoData.drawTime.hour;
    const drawMinute = guangzhouLottoData.drawTime.minute;
    
    // 如果当前时间是开奖时间 (GMT+0)
    if (now.getUTCHours() === drawHour && now.getUTCMinutes() === drawMinute) {
        // 生成今日开奖结果
        const todayNumbers = checkAndGenerateDailyResult();
        
        if (todayNumbers) {
            // 更新显示
            displayLatestDraw();
            updateStatsDisplay();
            updateTodayResult();
            
            // 显示通知
            showNotification(`今日开奖结果已生成: ${todayNumbers.join(', ')}`);
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
        
        // 显示开奖时间
        const drawDate = new Date(latestDraw.date);
        const drawTimeString = drawDate.toLocaleDateString('zh-CN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
        
        latestDrawTimeElement.textContent = `开奖时间: ${drawTimeString} 16:30`;
    }
}

// ===== STATISTICS FUNCTIONS =====

// 更新统计显示
function updateStatsDisplay() {
    // 更新总开奖次数
    totalDrawsElement.textContent = guangzhouLottoData.drawHistory.length;
    
    // 更新最后更新时间
    lastUpdateElement.textContent = guangzhouLottoData.lastUpdated;
    
    // 更新频率图表
    updateFrequencyChart();
    
    // 更新热门号码
    updateTopNumbers();
}

// 更新频率图表
function updateFrequencyChart() {
    frequencyChartElement.innerHTML = '';
    
    // 获取最大出现次数用于计算比例
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
        
        // Tambahkan class berdasarkan ranking
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
    
    // Untuk menentukan "hari ini" dalam konteks draw, kita perlu logika khusus:
    // Draw terjadi pukul 00:30 GMT+8, jadi jika sekarang setelah 00:30, 
    // maka result "hari ini" sudah ada
    const drawHourGuangzhou = 0; // 00:30
    const drawMinuteGuangzhou = 30;
    
    let targetDateStr;
    if (guangzhouTime.getHours() >= drawHourGuangzhou && 
        guangzhouTime.getMinutes() >= drawMinuteGuangzhou) {
        // Sudah lewat waktu draw, gunakan tanggal Guangzhou hari ini
        targetDateStr = guangzhouDateStr;
    } else {
        // Belum waktu draw, gunakan tanggal kemarin
        const yesterday = new Date(guangzhouTime);
        yesterday.setDate(yesterday.getDate() - 1);
        targetDateStr = yesterday.toISOString().split('T')[0];
    }
    
    // Update tanggal display
    todayDateElement.textContent = targetDateStr;
    
    // Cek apakah sudah ada result untuk tanggal target
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
        // Tampilkan loading animation
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

function updateCountdown() {
    const now = new Date();
    const today = now.toISOString().split('T')[0];
    
    // Waktu draw hari ini 00:30 GMT+8
    // Buat waktu dalam timezone Guangzhou
    let drawTimeGuangzhou = new Date(`${today}T00:30:00+08:00`);
    
    // Konversi ke UTC untuk perhitungan
    let drawTimeUTC = new Date(drawTimeGuangzhou.getTime() - (8 * 60 * 60 * 1000));
    
    // Jika sudah lewat waktu draw hari ini, targetkan besok
    if (now > drawTimeUTC) {
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const tomorrowStr = tomorrow.toISOString().split('T')[0];
        drawTimeGuangzhou = new Date(`${tomorrowStr}T00:30:00+08:00`);
        drawTimeUTC = new Date(drawTimeGuangzhou.getTime() - (8 * 60 * 60 * 1000));
    }
    
    const diff = drawTimeUTC - now;
    
    // Jika sudah waktunya draw
    if (diff <= 0) {
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        
        // Cek dan generate result
        const todayNumbers = checkAndGenerateDailyResult();
        if (todayNumbers) {
            updateTodayResult();
            displayLatestDraw();
            updateStatsDisplay();
            showNotification(`今日开奖结果已生成: ${todayNumbers.join(', ')}`);
            
            // Refresh history data
            loadHistoryData();
        }
        return;
    }
    
    // Hitung jam, menit, detik
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    // Update display
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// ===== COUNTDOWN FUNCTIONS =====

function initCountdown() {
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    const now = new Date();
    const today = now.toISOString().split('T')[0];
    
    // Waktu draw hari ini 16:30 GMT+8 = 08:30 GMT+0
    let drawTime = new Date(`${today}T08:30:00Z`);
    
    // Jika sudah lewat waktu draw hari ini, targetkan besok
    if (now > drawTime) {
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const tomorrowStr = tomorrow.toISOString().split('T')[0];
        drawTime = new Date(`${tomorrowStr}T08:30:00Z`);
    }
    
    const diff = drawTime - now;
    
    // Jika sudah waktunya draw
    if (diff <= 0) {
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        
        // Cek dan generate result
        const todayNumbers = checkAndGenerateDailyResult();
        if (todayNumbers) {
            updateTodayResult();
            displayLatestDraw();
            updateStatsDisplay();
            showNotification(`今日开奖结果已生成: ${todayNumbers.join(', ')}`);
            
            // Refresh history data
            loadHistoryData();
        }
        return;
    }
    
    // Hitung jam, menit, detik
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    // Update display
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// ===== HISTORY FUNCTIONS =====

function initHistoryControls() {
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilterDays = parseInt(this.dataset.days);
            currentHistoryPage = 1;
            loadHistoryData();
        });
    });
    
    // Search button
    document.getElementById('search-btn').addEventListener('click', searchHistory);
    document.getElementById('history-search').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') searchHistory();
    });
    
    // Pagination buttons
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
    
    // Filter berdasarkan hari
    if (currentFilterDays > 0) {
        const cutoffDate = new Date();
        cutoffDate.setDate(cutoffDate.getDate() - currentFilterDays);
        filtered = filtered.filter(draw => new Date(draw.date) >= cutoffDate);
    }
    
    // Filter berdasarkan search
    const searchTerm = document.getElementById('history-search').value.trim();
    if (searchTerm) {
        filtered = filtered.filter(draw => draw.date.includes(searchTerm));
    }
    
    // Urutkan dari yang terbaru
    return filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
}

function loadHistoryData() {
    const filteredHistory = getFilteredHistory();
    const totalPages = Math.ceil(filteredHistory.length / historyPageSize);
    
    // Update pagination info
    document.getElementById('current-page').textContent = currentHistoryPage;
    document.getElementById('total-pages').textContent = totalPages || 1;
    
    // Enable/disable pagination buttons
    document.getElementById('prev-page').disabled = currentHistoryPage <= 1;
    document.getElementById('next-page').disabled = currentHistoryPage >= totalPages;
    
    // Get data for current page
    const startIndex = (currentHistoryPage - 1) * historyPageSize;
    const endIndex = startIndex + historyPageSize;
    const pageData = filteredHistory.slice(startIndex, endIndex);
    
    // Render table
    renderHistoryTable(pageData, startIndex);
    
    // Update summary
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
        
        // Hitung lucky star (angka yang paling sering muncul dalam draw ini)
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
    
    // Update basic stats
    document.getElementById('total-draw-count').textContent = data.length;
    document.getElementById('earliest-draw').textContent = data[data.length - 1].date;
    document.getElementById('latest-draw').textContent = data[0].date;
    
    // Hitung angka terpanas
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
    
    // Hitung distribusi ganjil/genap
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
    
    // Hitung angka berulang
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
            <p style="color: #666; margin-bottom: 15px;"><strong>开奖时间:</strong> 16:30 (GMT+8)</p>
            <p style="color: #666; margin-bottom: 15px;"><strong>开奖类型:</strong> 日常开奖</p>
            <p style="color: #666; margin-bottom: 25px;"><strong>开奖状态:</strong> 已完成</p>
            <button onclick="this.parentElement.parentElement.remove()" 
                    style="padding: 10px 25px; background: #ff9800; color: white; border: none; border-radius: 25px; cursor: pointer;">
                关闭
            </button>
        </div>
    `;
    
    // Buat modal sederhana
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
    
    // Tutup modal ketika klik di luar
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

// ===== HELPER FUNCTIONS =====

// 显示通知
function showNotification(message) {
    // 检查是否 sudah ada notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // 5秒后移除通知
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 5000);
}

// 生成随机号码 (4个数字，范围0-9)
function generateRandomNumbers() {
    const numbers = [];
    for (let i = 0; i < 4; i++) {
        numbers.push(Math.floor(Math.random() * 10));
    }
    return numbers;
}

// ===== EVENT LISTENERS =====

// 初始化应用
document.addEventListener('DOMContentLoaded', initApp);

// Export fungsi untuk digunakan di global scope
window.viewDrawDetail = viewDrawDetail;
