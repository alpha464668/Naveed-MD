const { default: makeWASocket, useMultiFileAuthState } = require("@whiskeysockets/baileys");

async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState("auth_info");

  const sock = makeWASocket({
    auth: state,
    printQRInTerminal: false
  });

  sock.ev.on("creds.update", saveCreds);

  sock.ev.on("connection.update", (update) => {
    const { connection, qr } = update;

    if (connection === "open") {
      console.log("🤖 Naveed MD Bot Connected");
    }

    if (qr) {
      console.log("Scan QR or use Pair Code method in next step");
    }
  });
}

startBot();
