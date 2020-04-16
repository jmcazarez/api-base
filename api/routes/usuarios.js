var express = require('express');
var router = express.Router();
var db = require('../db/db');

router.get('/', function(req, res, next) {
    
    db.query("Select * from Usuarios", function (err, resx) {

        if(err) {
            console.log("error: ", err);
            res.send(err);
        }
        else{
            res.send(resx);
        }
    });   

});

router.get('/:id', function(req, res, next) {
    
    db.query("Select * from Usuarios where nIdUsuario = ?", req.params.id, function (err, resx) {

        if(err) {
            console.log("error: ", err);
            res.send(err);
        }
        else{
            res.send(resx);
        }
    });   

});

router.post('/', function(req, res, next) {
    
    var newUsuario = {
        cLogin: req.body.cLogin,
        cNombre: req.body.cNombre,
        cApellidoPaterno: req.body.cApellidoPaterno,
        cApellidoMaterno: req.body.cApellidoMaterno,
        cPassword: req.body.cPassword
    };

    db.query("INSERT INTO Usuarios set ?", newUsuario, function (err, resx) {       
        if(err) {
            console.log("error: ", err);
            res.send(err);
        }
        else{
            res.send(resx);
        }
    });   

});

router.put('/:id', function(req, res, next) {
    
    var updateUsuario = {
        cLogin: req.body.cLogin,
        cNombre: req.body.cNombre,
        cApellidoPaterno: req.body.cApellidoPaterno,
        cApellidoMaterno: req.body.cApellidoMaterno,
        cPassword: req.body.cPassword
    };

    db.query("UPDATE Usuarios SET cLogin = ?, cNombre = ?, cApellidoPaterno = ?, cApellidoMaterno = ?,  cPassword = ? WHERE nIdUsuario = ?", [updateUsuario.cLogin, updateUsuario.cNombre, updateUsuario.cApellidoPaterno, updateUsuario.cApellidoMaterno, updateUsuario.cPassword, req.params.id], function (err, resx) {       
        if(err) {
            console.log("error: ", err);
            res.send(err);
        }
        else{
            res.send(resx);
        }
    });   

});

router.delete('/:id', function(req, res, next) {
    
    db.query("DELETE FROM Usuarios WHERE nIdUsuario = ?", [req.params.id], function (err, resx) {

        if(err) {
            console.log("error: ", err);
            res.send(err);
        }
        else{
            res.send(resx);
        }
    });   

});


module.exports = router;