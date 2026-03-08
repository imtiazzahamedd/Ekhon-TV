const datetime = document.querySelector('.datetime');

function getBengaliPeriod(hours) {
    if (hours >= 5 && hours < 12) return 'সকাল';
    if (hours >= 12 && hours < 15) return 'দুপুর';
    if (hours >= 15 && hours < 18) return 'বিকাল';
    if (hours >= 18 && hours < 20) return 'সন্ধ্যা';
    return 'রাত';
}

function time() {
    const now = new Date();
    const period = getBengaliPeriod(now.getHours());
    const timeStr = now.toLocaleTimeString('bn-BD', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
    datetime.innerHTML = `${period} ${timeStr}`;
}

time();
setInterval(time, 1000);