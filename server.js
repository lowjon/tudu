const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const db = massive.connectSync({
    connectionString: 'postgres://postgres:postgres@localhost/coleallan'
})

var app = module.exports = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.set('db', db);

app.get(`/api/notes`, (req, res) => {
    db.getnotes((err, result) => {
        if(err){
            res.status(500).json(err);
        }
        else{
            res.status(200).json(result);
        }
    })
});
app.post(`/api/addnote`, (req, res) => {
    db.addnote([req.body.data, req.body.status, req.body.favorited], (err, result) => {
        if(err){
            res.status(500).json(err);
        }
        else{
            res.status(200).json(result);
        }
    })
});
app.put(`/api/selected`, (req, res) => {
    db.selected([req.body.status, req.body.id], (err, result) => {
        if(err){
            res.status(500).json(err);
        }
        else{
            res.status(200).json(result);
        }
    })
});
app.delete(`/api/deletenote`, (req, res) => {
    db.deletenote([req.body.id], (err, result) => {
        if(err){
            res.status(500).json(err);
        }
        else{
            res.status(200).json(result);
        }
    })
});








app.listen(8080, ()=>{
    console.log('App is listening on port 8080');
})
