module.exports = async (sock, m) => {
    try {

        const msg = m.messages[0];
        if (!msg.message) return;

        const text =
            msg.message.conversation ||
            msg.message.extendedTextMessage?.text || "";

        const prefix = ".";

        // simple commands
        if (text === prefix + "ping") {
            await sock.sendMessage(msg.key.remoteJid, { text: "Pong 🏓" });
        }

        if (text === prefix + "alive") {
            await sock.sendMessage(msg.key.remoteJid, { text: "Naveed MD is Alive ✅" });
        }

        if (text === prefix + "menu") {
            await sock.sendMessage(msg.key.remoteJid, {
                text: "╔═══『 NAVEED MD 』\n║ .ping\n║ .alive\n║ .menu\n╚═══════════"
            });
        }

        if (text === prefix + "info") {
            await sock.sendMessage(msg.key.remoteJid, {
                text: `🤖 Bot: Naveed MD\n👑 Owner: Naveed\n⚡ Status: Online`
            });
        }

    } catch (e) {
        console.log("Handler Error:", e);
    }
};
