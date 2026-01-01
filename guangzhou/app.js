// 广州彩票数据
const guangzhouLottoData = {
    // 历史开奖记录
    drawHistory: [
        { date: "2023-10-01", numbers: [3, 7, 2, 9] },
        { date: "2023-10-02", numbers: [1, 5, 8, 0] },
        { date: "2023-10-03", numbers: [4, 2, 6, 7] },
        { date: "2023-10-04", numbers: [9, 1, 3, 5] },
        { date: "2023-10-05", numbers: [0, 8, 4, 2] },
        { date: "2023-10-06", numbers: [7, 3, 9, 1] },
        { date: "2023-10-07", numbers: [2, 6, 5, 8] },
        { date: "2023-10-08", numbers: [5, 0, 7, 4] },
        { date: "2023-10-09", numbers: [8, 4, 1, 3] },
        { date: "2023-10-10", numbers: [3, 9, 0, 6] },
        { date: "2023-10-11", numbers: [6, 2, 7, 1] },
        { date: "2023-10-12", numbers: [1, 5, 3, 9] },
        { date: "2023-10-13", numbers: [4, 8, 0, 2] },
        { date: "2023-10-14", numbers: [9, 3, 6, 7] },
        { date: "2023-10-15", numbers: [2, 7, 5, 0] },
        { date: "2023-10-16", numbers: [7, 1, 4, 8] },
        { date: "2023-10-17", numbers: [0, 6, 9, 3] },
        { date: "2023-10-18", numbers: [5, 2, 8, 1] },
        { date: "2023-10-19", numbers: [8, 0, 3, 4] },
        { date: "2023-10-20", numbers: [3, 4, 7, 9] },
    ],
    
    // 号码统计
    numberStats: {
        0: 12,
        1: 14,
        2: 13,
        3: 16,
        4: 15,
        5: 12,
        6: 11,
        7: 14,
        8: 13,
        9: 15
    },
    
    // 最后更新日期
    lastUpdated: "2023-10-21 10:30:00",
    
    // 今日开奖结果 (初始为空，将在16:30 GMT+8生成)
    todayResult: null,
    
    // 开奖时间设置 (16:30 GMT+8, 对应 08:30 GMT+0)
    drawTime: {
        hour: 8,    // GMT+0 小时
        minute: 30  // GMT+0 分钟
    }
};

// 获取最新开奖结果
function getLatestDraw() {
    if (guangzhouLottoData.drawHistory.length > 0) {
        return guangzhouLottoData.drawHistory[guangzhouLottoData.drawHistory.length - 1];
    }
    return null;
}

// 生成随机号码 (4个数字，范围0-9)
function generateRandomNumbers() {
    const numbers = [];
    for (let i = 0; i < 4; i++) {
        numbers.push(Math.floor(Math.random() * 10));
    }
    return numbers;
}

// 计算号码频率统计
function calculateNumberStats() {
    // 重置统计
    for (let i = 0; i <= 9; i++) {
        guangzhouLottoData.numberStats[i] = 0;
    }
    
    // 重新计算
    guangzhouLottoData.drawHistory.forEach(draw => {
        draw.numbers.forEach(number => {
            guangzhouLottoData.numberStats[number]++;
        });
    });
    
    // 更新最后更新时间
    const now = new Date();
    guangzhouLottoData.lastUpdated = now.toLocaleString('zh-CN', { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}

// 获取最热门的号码
function getTopNumbers(count = 4) {
    const numbers = Object.keys(guangzhouLottoData.numberStats).map(num => ({
        number: parseInt(num),
        count: guangzhouLottoData.numberStats[num]
    }));
    
    // 按出现次数降序排序
    numbers.sort((a, b) => b.count - a.count);
    
    // 返回前count个
    return numbers.slice(0, count);
}

// 检查是否应该生成今日开奖结果
function checkAndGenerateDailyResult() {
    const now = new Date();
    const today = now.toISOString().split('T')[0];
    
    // 检查今天是否已经有开奖结果
    const todayDraw = guangzhouLottoData.drawHistory.find(draw => draw.date === today);
    
    if (todayDraw) {
        guangzhouLottoData.todayResult = todayDraw.numbers;
        return todayDraw.numbers;
    }
    
    // 检查是否到了开奖时间 (16:30 GMT+8 = 08:30 GMT+0)
    const drawHour = guangzhouLottoData.drawTime.hour;
    const drawMinute = guangzhouLottoData.drawTime.minute;
    
    // 如果当前时间已经过了开奖时间，生成今日结果
    if (now.getUTCHours() > drawHour || 
        (now.getUTCHours() === drawHour && now.getUTCMinutes() >= drawMinute)) {
        
        // 生成今日开奖号码
        const todayNumbers = generateRandomNumbers();
        
        // 添加到历史记录
        const newDraw = {
            date: today,
            numbers: todayNumbers
        };
        
        guangzhouLottoData.drawHistory.push(newDraw);
        guangzhouLottoData.todayResult = todayNumbers;
        
        // 更新统计
        calculateNumberStats();
        
        return todayNumbers;
    }
    
    return null;
}
