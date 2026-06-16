module.exports = {
name: "runtime",
run: async () => {
const runtime = process.uptime();

const h = Math.floor(runtime / 3600);
const m = Math.floor((runtime % 3600) / 60);
const s = Math.floor(runtime % 60);

return `

⏰ NAVEED MD RUNTIME

Hours: ${h}
Minutes: ${m}
Seconds: ${s}
`;
}
}
