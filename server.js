const express = require("express");
const app = express();

app.use(express.json());

let locationData = { lat: 0, lon: 0 };

// update location
app.post("/update", (req, res) => {
    locationData = req.body;
    res.send({ status: "updated" });
});

// get location
app.get("/location", (req, res) => {
    res.json(locationData);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port " + PORT));
