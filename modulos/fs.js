const fs = require('fs');

function leer(ruta, cb){
    fs.readFile(ruta, (err, data)=> {
        cb(data.toString());
    })
}


function escribir(ruta, contenido, cb){
    fs.writeFile(ruta, contenido, function (err){
        if(err){
            console.log('No he podido escribirlo', err);
        }else{
            console.log('Se ha escrito correctamente', console.log);
        }
    });
}

function borrar(ruta, cb){
    fs.unlink(ruta, cb);
}

borrar(__dirname + '/archivo1.txt', console.log)
// leer(__dirname + '/archivo1.txt', console.log)
// escribir(__dirname + '/archivo1.txt', 'Sigo siendo Alejo pero en el archivo 1')
