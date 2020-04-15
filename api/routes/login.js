var express = require('express');
var router = express.Router();
var request = require('request');


const respuestaError = {
    error: true,
    codigo: 401,
    mensaje: 'Usuario y/ contraseña incorrecto(s).'
   };

router.get('/', function(req, res, next) {
    res.send('Login service ...');
});

router.post('/validar', function(req, res, next) {
    if(!req.body.cUsuario || !req.body.cPassword) {
        respuesta = {
         error: true,
         codigo: 404,
         mensaje: 'El campo usuario y/o contraseña son requeridos'
        };
        res.status(404);
       } else {
         
            request.post({
                "headers": { "content-type": "application/json" },
                "url": "http://10.20.30.7:12345/api/auth/validarUsuario",
                "body": JSON.stringify({
                    "cUsuario": req.body.cUsuario,
                    "cPassword": req.body.cPassword,
                    "cSistema": "REPRO"
                })
            }, (error, response, body) => {
                if(body) {
                    res.send(JSON.parse(body));
                } else {
                    res.status(401);
                    res.send(respuestaError);
                }
            });

       }
       
       // res.send(respuesta);
});

module.exports = router;