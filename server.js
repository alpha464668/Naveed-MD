const express = require("express");

const app = express();

app.get("/", (req, res) => {
res.send("<html> <head> <title>Naveed MD Pair</title> </head> <body style="font-family:sans-serif;text-align:center;padding:50px;"> <h1>🤖 Naveed MD Pair Website</h1> <p>Pair System Loading...</p> <input type="text" placeholder="92xxxxxxxxxx" /> <br><br> <button>Generate Pair Code</button> </body> </html>");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log("Naveed MD Pair Website Running On Port " + PORT);
});
