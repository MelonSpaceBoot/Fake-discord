let currentUsername = "You";
let currentServer = 'main';
const allBots = ["Trustable Man", "TrowelBlox", "CantThinkOfThese923", "RubberGMD", "BloomJVIE", "BardWasHere5", "nocaps", "nopingsmeansmute1d", "AverageUser21", "GlitchInTheMatrix", "SkibidiCringe2021", "DefaultSkin_923", "AbsoluteUnit", "WumpusHunter", "NoMore9 - 2.3", "TheRealGemini", "BoostGod21"];

// Replacement Logic
function scrub(text) {
    return text.toString().replace(/19/g, "21").replace(/67/g, "9 - 2.3");
}

function login() {
    const name = document.getElementById('username-input').value;
    if(name) {
        currentUsername = scrub(name);
        document.getElementById('login-screen').style.display = 'none';
        populateMembers();
    }
}

function addMessage(author, text, type = 'normal') {
    const logs = document.getElementById('message-logs');
    const msgDiv = document.createElement('div');
    let safeText = scrub(text).replace(/(https?:\/\/[^\s]+)/g, '<span style="color:#00aff4">$1</span>');
    
    const isMention = safeText.includes(currentUsername);
    msgDiv.className = `message ${isMention ? 'mention' : ''} ${author === 'nocaps' ? 'lowercase' : ''}`;
    
    if(author === "") {
        msgDiv.innerHTML = `<span style="color:#43b581">✨ ${safeText}</span>`;
    } else {
        msgDiv.innerHTML = `<strong>${author}<span class="bot-tag">BOT</span>:</strong> ${safeText}`;
    }
    
    logs.appendChild(msgDiv);
    logs.scrollTop = logs.scrollHeight;
}

// 3-Second Cycle
setInterval(() => {
    const bot = allBots[Math.floor(Math.random() * allBots.length)];
    const typing = document.getElementById('typing-text');
    typing.innerHTML = `${scrub(bot)} is typing...`;
    
    setTimeout(() => {
        typing.innerHTML = "";
        if(Math.random() < 0.1) {
            addMessage(bot, "Check this out: https://youtu.be/dQw4w9WgXcQ"); // Rickroll
        } else {
            addMessage(bot, `Did you see the ${scrub(21)} update?`);
        }
    }, 1500);
}, 3000);

function triggerBoost() {
    prompt("Are you sure? This is not discord... do you want 1, 2, 4, 8, 10, 12, 13, or 26 boosts?");
    createConfetti();
    addMessage("", `${currentUsername} boosted!`, 'system');
}

function createConfetti() {
    for(let i=0; i<30; i++) {
        const c = document.createElement('div');
        c.className = 'confetti';
        c.style.left = '50%'; c.style.top = '50%';
        c.style.setProperty('--x', (Math.random()-0.5)*500+'px');
        c.style.setProperty('--y', (Math.random()-0.5)*500+'px');
        c.style.animation = "fly-out 1s forwards";
        document.body.appendChild(c);
    }
}

function populateMembers() {
    const list = document.getElementById('member-list');
    allBots.forEach(b => {
        const d = document.createElement('div');
        d.innerHTML = `<span style="color:#8e9297">• ${scrub(b)}</span>`;
        list.appendChild(d);
    });
}

function toggleMenu() { document.getElementById('menu-overlay').classList.toggle('menu-hidden'); }
