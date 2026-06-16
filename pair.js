const { default: makeWASocket, useMultiFileAuthState } = require("@whiskeysockets/baileys");
const readline = require("readline");
const pino = require("pino");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("🔰 Pairing System Starting...");

async function startPairing() {
    const { state, saveCreds } = await useMultiFileAuthState("./session");

    const sock = makeWASocket({
        auth: state,
        printQRInTerminal: false,
        logger: pino({ level: "silent" })
    });

    sock.ev.on("creds.update", saveCreds);

    rl.question("📱 Apna WhatsApp number enter karo: ", async (number) => {

        const code = await sock.requestPairingCode(number);

        console.log("\n🔑 PAIRING CODE:");
        console.log(code);
        console.log("\nWhatsApp → Linked Devices → Link with code");
    });
}

startPairing();
