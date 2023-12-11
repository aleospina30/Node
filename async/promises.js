function Hola(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function (){
            console.log('Hola ' + nombre);
            resolve(nombre);
        }, 1500);
    });
}

function hablar(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Bla bla bla bla bla ', nombre);
            resolve(nombre);
           reject('hubo error')
        }, 1000);
    });
}

function adios(nombre){
    return new Promise( (resolve, reject) =>{
        setTimeout(function(){
            console.log('Adios', nombre);
            resolve(nombre);
        }, 1000)

    });
}

console.log('Iniciando proceso');
Hola('Alejo')
    .then(hablar)
    .then(adios)
    .then((nombre)=>{
        console.log('Terminando el proceso' , nombre);
    })
    .catch(error => {
        console.error('Ha habido un error')
        console.error(error)
    })