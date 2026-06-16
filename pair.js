const { default: makeWASocket, useMultiFileAuthState } = require("@whiskeysockets/baileys");
const readline = require("readline");
const pino = require("pino");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("🔰 Naveed MD Pairing System Starting...");

async function startPairing() {
    const { state, saveCreds } = await useMultiFileAuthState("./session");

    const sock = makeWASocket({
        auth: state,
        printQRInTerminal: false,
        logger: pino({ level: "silent" })
    });

    sock.ev.on("creds.update", saveCreds);

    rl.question("📱 Apna WhatsApp number enter karo (92xxxxxxxxxx): ", async (number) => {

        try {
            const code = await sock.requestPairingCode(number);

            console.log("\n━━━━━━━━━━━━━━━━━━━━━━");
            console.log("🔑 NAVEED MD PAIR CODE");
            console.log("━━━━━━━━━━━━━━━━━━━━━━");
            console.log(code);
            console.log("━━━━━━━━━━━━━━━━━━━━━━\n");

            console.log("📌 WhatsApp → Linked Devices → Link with code");

        } catch (e) {
            console.log("❌ Error:", e.message);
        }
    });
}

startPairing();
