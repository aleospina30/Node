async function Hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Hola " + nombre);
      resolve(nombre);
    }, 1500);
  });
}

async function hablar(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Bla bla bla bla bla ");
      resolve("");
    }, 1000);
  });
}

async function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Adios", nombre);
      reject("ERROR EN ADIOS");
      resolve(nombre);
    }, 1000);
  });
}

async function main() {
  try {
    let nombre = await Hola("Alejo");
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log("Finish");
  } catch (error) {
    console.log(error);
    return error;
  }
}
console.log("Start");
main();
