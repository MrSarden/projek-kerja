//untuk mengambil data port dari .env
require('dotenv').config();
// framework node.js
const express = require("express");
const morgan = require("morgan");
const db = require("./db");
const app = express();

app.use(express.json());

// open all data
app.get("/api/v1/database/", async (req, res) => {

	try{
		const result = await db.query("select * from data_pop")
	console.log(result.rows);
	res.status(200).json({
		status: "SUCCess",
		result: result.rows.length,
		data: {
			POP: result.rows
		},
	});
	} catch (err) {
		console.log(err);
	}
	
	
});

// open one data
app.get("/api/v1/database/:id", async (req, res) => {
	const { id } = req.params;
	// const { password }  = req.query;

	// if(password != 123 ) return res.status(403).json({status: "failed"});

	const {rows} = await db.query(`SELECT * FROM data_pop WHERE id=${id}`)
	console.log(rows[0]);

	res.status(200).json({
		status: "success",
		data: {
			pop: rows[0].nama_pop,
			tanggal: rows[0].tanggal
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