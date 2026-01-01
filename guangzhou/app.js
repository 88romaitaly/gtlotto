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

// 变量
let isSpinning = false;
let isAutoSpinning = false;
let spinCount = 0;
let autoSpinInterval = null;

// 初始化应用
function initApp() {
    updateCurrentTime();
    updateNextDrawTime();
    displayLatestDraw();
    updateStatsDisplay();
    
    // 检查并生成今日开奖结果
    checkAndGenerateDailyResult();
    
    // 设置定时器更新时间
    setInterval(updateCurrentTime, 1000);
    
    // 设置定时器检查开奖时间
    setInterval(checkDrawTime, 60000);
    
    // 事件监听器
    spinButton.addEventListener('click', spinWheel);
    autoSpinButton.addEventListener('click', toggleAutoSpin);
    
    // 初始显示
    displayPlaceholderNumbers();
}

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

// 更新下次开奖时间
function updateNextDrawTime() {
    const now = new Date();
    const today = now.toISOString().split('T')[0];
    
    // 开奖时间: 16:30 GMT+8 = 08:30 GMT+0
    const drawTimeUTC = new Date(`${today}T08:30:00Z`);
    
    // 如果当前时间已经过了今天的开奖时间，显示明天的开奖时间
    if (now > drawTimeUTC) {
        drawTimeUTC.setDate(drawTimeUTC.getDate() + 1);
    }
    
    // 转换为广州时间显示
    const guangzhouDrawTime = new Date(drawTimeUTC.getTime() + 8 * 60 * 60 * 1000);
    
    const timeString = guangzhouDrawTime.toLocaleString('zh-CN', {
        timeZone: 'Asia/Shanghai',
        month: '2-digit',
        day: '2-digit',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit'
    }).split(' ')[1];
    
    nextDrawTimeElement.textContent = `16:30 (GMT+8)`;
}

// 检查开奖时间
function checkDrawTime() {
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
    } else {
        latestDrawTimeElement.textContent = '暂无开奖数据';
    }
}

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
        
        const rankClass = index === 0 ? 'first' : index === 1 ? 'second' : index === 2 ? 'third' : '';
        if (rankClass) {
            topNumberElement.classList.add(rankClass);
        }
        
        topNumberElement.innerHTML = `
            <div class="top-number-value">${item.number}</div>
            <div class="top-number-count">出现 ${item.count} 次</div>
        `;
        
        topNumbersListElement.appendChild(topNumberElement);
    });
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

// 旋转转盘
function spinWheel() {
    if (isSpinning) return;
    
    isSpinning = true;
    spinButton.disabled = true;
    
    // 生成随机旋转角度 (至少旋转5圈以上)
    const spinDegrees = 1800 + Math.floor(Math.random() * 1800);
    
    // 应用旋转动画
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
            setTimeout(spinWheel, 1000);
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

// 显示通知
function showNotification(message) {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(to right, #ffc107, #ff9800);
        color: #5a3a00;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 1000;
        font-weight: bold;
        animation: slideIn 0.5s ease, fadeOut 0.5s ease 4.5s;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    // 5秒后移除通知
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 5000);
}

// 添加CSS动画
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(styleSheet);

// 初始化应用
document.addEventListener('DOMContentLoaded', initApp);
