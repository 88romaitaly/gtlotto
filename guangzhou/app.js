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
    createWheelNumbers();
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
    }
}

// 更新统计显示
function updateStatsDisplay() {
    // 更新总开奖次数
    totalDrawsElement.textContent = guangzhouLottoData.drawHistory.length;
    
    // 更新最后更新时间
   
