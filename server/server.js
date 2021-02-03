//untuk mengambil data port dari .env
require('dotenv').config();
// framework node.js
const express = require("express");
const morgan = require("morgan");
const db = require("./db");
const app = express();

app.use(express.json());

// open all data
app.get("/api/v1/database/", (req, res) => {

	db.query("select * from PROJECT")
	res.status(200).json({
		status: "berjalan",
		data: {
			Hari: "senin",
			Jam: "09:00"
		},
	});
	console.log("bonjour");
});

// open one data
app.get("/api/v1/database/:id", (req, res) => {
	console.log(req.params);

	res.status(200).json({
		status: "berjalan",
		data: {
			Hari: "Rabu",
			Jam: "14:00"
		},
	});
});

// create new data
app.post("/api/v1/database", (req, res) => {
	console.log(req.body);

	res.status(201).json({
		status: "berjalan",
		data: {
			Hari: "Rabu",
			Jam: "14:00"
		},
	});
});

// update new data
app.put("/api/v1/database/:id", (req, res) => {
	console.log(req.params.id);
	console.log(req.body);

	res.status(200).json({
		status: "berjalan",
		data: {
			Hari: "Rabu",
			Jam: "14:00"
		},
	});
});

// delete data
app.delete("/api/v1/database/:id", (req, res) => {
	res.status(204).json({
		status: "success"
	})
})
//untuk mendeklarasikan port dari .env
const port = process.env.PORT || 1000;
app.listen(port, () => {
	console.log(`server is up and listening at port ${port}`);
});