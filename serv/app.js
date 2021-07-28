const express = require('express')
const mysql = require('mysql');

const app = express()
const port = 3001

const connection = mysql.createConnection({
    host: 'localhost',
    user: "root",
    database: "bal",
    password: "10011726"
});

connection.connect();




app.get('/coal/:year', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')

    const params = req.params


    console.log('params', params)

    if (!params.year) {
        connection.query('SELECT * FROM Balance', function (error, results, fields) {
            if (error) {
                return res.send('Error');
            }

            res.send(results)
        });
    } else {
        connection.query(`SELECT * FROM Balance WHERE year LIKE ${params.year}`, function (error, results, fields) {
            if (error) {
                return res.send(error);
            }

            res.send(results)
        });
    }


})





app.get('/graf/:name?', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')

    const params = req.params


    console.log(decodeURIComponent(params.name))

    /*if (!params.name) {
        connection.query('SELECT * FROM Balance', function (error, results, fields) {
            if (error) {
                return res.send('Error');
            }

            res.send(results)
        });
    } else {*/
        connection.query(`SELECT * FROM Balance WHERE Supply_and_consumption = '${decodeURIComponent(params.name)}'`, function (error, results, fields) {
            if (error) {
                console.log(error)
                return res.send(error);
            }
            console.log('result', results)
            res.send(results)
        });
    //}


})






app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`);
    // connection.destroy();
});
