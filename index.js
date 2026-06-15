const http = require('http');
const fs = require('fs');

console.log("Naveed MD Loading...");

http.createServer((req, res) => {
res.end("Naveed MD Online ✅");
}).listen(process.env.PORT || 3000);

const commands = fs.readdirSync('./commands');
console.log("Commands Loaded:", commands.length);

console.log("Running OK");
const { default: makeWASocket, useSingleFileAuthState } = require("@whiskeysockets/baileys");
const fs = require("fs");
const { state, saveState } = useSingleFileAuthState("./session/creds.json");

console.log("Naveed MD Starting...");

async function startBot() {
    const sock = makeWASocket({
        auth: state,
        printQRInTerminal: true
    });

    sock.ev.on("creds.update", saveState);

    sock.ev.on("connection.update", (update) => {
        const { connection } = update;

        if (connection === "open") {
            console.log("✅ WhatsApp Connected!");
        }

        if (connection === "close") {
            console.log("❌ Disconnected, reconnecting...");
            startBot();
        }
    });
}

startBot();

const http = require("http");

http.createServer((req, res) => {
    res.end("Naveed MD Bot Running");
}).listen(process.env.PORT || 3000);

console.log("Server Running OK");
