function updateTime() {
    const now = new Date();
    
    // Date format (e.g., 19 Feb 2026)
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    const dateStr = now.toLocaleDateString('hi-IN', options);
    
    // Time format (e.g., 10:30:05 AM)
    const timeStr = now.toLocaleTimeString('en-US', { hour12: true });

    document.getElementById('live-clock').innerHTML = `📅 ${dateStr} | 🕒 ${timeStr}`;
}

// Har 1 second mein update hoga
setInterval(updateTime, 1000);
updateTime(); // Shuruat mein turant dikhane ke liye
