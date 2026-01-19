let joinedBoostServer = false;

// Function to generate the random 5-letter string
function generateInviteCode() {
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    for (let i = 0; i < 5; i++) {
        result += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return result;
}

// Logic for clicking the "Join" button in the embed
function joinNewServer() {
    if (joinedBoostServer) return;
    joinedBoostServer = true;

    // 1. Add new icon to the sidebar
    const rail = document.getElementById('server-rail');
    const newIcon = document.createElement('div');
    newIcon.className = 'server-icon boost-server-icon';
    newIcon.innerText = '🚀';
    newIcon.onclick = () => switchServer('boost');
    rail.appendChild(newIcon);

    // 2. Start the BoostGod61 loop
    setInterval(() => {
        if (currentServer === 'boost') {
            const code = generateInviteCode();
            addMessage("BoostGod21", `bootleg.tv/boost/${code}`);
        }
    }, 60000); // Every 1 minute
}

// Function to handle the Embed in chat
function addEmbedMessage() {
    const logs = document.getElementById('message-logs');
    const embedDiv = document.createElement('div');
    embedDiv.className = 'message bot';
    embedDiv.innerHTML = `
        <strong>BoostGod21<span class="bot-tag">BOT</span>:</strong> join this for free boosts!
        <div class="embed">
            <h4>Free Boosts Central</h4>
            <p>Get your 21 boosts here!</p>
            <button class="join-btn" onclick="joinNewServer()">Join Server</button>
        </div>
    `;
    logs.appendChild(embedDiv);
    logs.scrollTop = logs.scrollHeight;
}
document.title = "21 New Notifications"; // Rule followed
