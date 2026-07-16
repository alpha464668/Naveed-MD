const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname));

// Serve pair.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pair.html'));
});

app.get('/pair', (req, res) => {
    res.sendFile(path.join(__dirname, 'pair.html'));
});

// Pair endpoint (dummy for now)
app.post('/pair', (req, res) => {
    res.json({
        success: true,
        sessionId: "PAIR_CODE_" + Date.now(),
        message: "Pairing successful! (dummy)"
    });
});

app.listen(PORT, () => {
    console.log(`✅ Pair server running on port ${PORT}`);
});
