const express = require("express");

const app = express();
const db = require('./Db');
app.use(express.json());//type of middleware

app.listen(4000, () => {
    console.log("Server started at port 4000");
});

app.get('/moblies', (req, res) => {
    db.getmoblie()
        .then((moblies) => {
            res.send(moblies);
        })
        .catch((error) => {
            res.status(500).send("Error: " + error);
        });
});

app.post('/moblies', (req, res) => {
    const { name, price, ram, storage } = req.body;
    db.addmoblie(name, price, ram, storage)
        .then((response) => {
            res.send(response);
        })
        .catch((error) => {
            res.status(500).send("Error: " + error);
        });
});


app.delete('/moblies/:id', (req, res) => {
    const { id } = req.params;
    db.deletemoblie(id)
        .then((response) => {
            res.send(response);
        })
        .catch((error) => {
            res.status(500).send("Error: " + error);
        });
});



app.put('/mobiles/:id', (req, res) => {
    const { id } = req.params;
    const { name, price, ram, storage } = req.body;
    db.updatemoblie(name, price, ram, storage, id)
        .then((response) => {
            res.send(response);
        })
        .catch((error) => {
            res.status(500).send("Error: " + error);
            console.log("eror")
        });
});