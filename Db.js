
const sql = require('mysql2');

const con = sql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'vasu@1234',
    database: 'Test'
});

function getmoblie() {
    return new Promise((success, reject) => {
        con.query('SELECT * FROM mobiles', (err, rows) => {
            if (err) {
                reject(err);
            } else {
                success(rows);
            }
        });
    });
}

function addmoblie(name, price, ram, storage) {
    return new Promise((success, reject) => {
        con.query(
            'INSERT INTO mobiles (name, price, ram, storage) VALUES (?, ?, ?, ?)',
            [name, price, ram, storage],
            (err, res) => {
                if (err) {
                    reject(err);
                } else {
                    success(res);
                }
            }
        );
    });
}

function deletemoblie(id) {
    return new Promise((success, reject) => {
        con.query(
            'DELETE FROM mobiles WHERE id = ?',
            [id],
            (err, res) => {
                if (err) {
                    reject(err);
                } else {
                    success(res);
                }
            }
        );
    });
}

function updatemoblie(name, price, ram, storage, id) {
    return new Promise((resolve, reject) => {
        con.query(
            'UPDATE mobiles SET name=?, price=?, ram=?, storage=? WHERE id=?',
            [name, price, ram, storage, id],
            function (err, rows) {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            }
        );
    });
}





module.exports = {
    getmoblie,
    addmoblie,
    deletemoblie,
    updatemoblie
};





















