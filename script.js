//Crea una función que pida un número por teclado y guarda su tabla de multiplicar en un array.
// Ejemplo --> Tabla del 3 --> ["3x1=3","3x2=6","3x3=9","3x4=12","3x5=15","3x6=18","3x7=21","3x8=24","3x9=27","3x10=30"]



function tablaMultiplicar () {
    let numTabla = parseInt(prompt("Dime un número: "));
    let aTabla = [];
    for (let i = 1; i < 11; i++) {
      aTabla.push(`${numTabla}x${i}=${i*numTabla}`);
    }
    return aTabla;
  }
  
  
  console.log(tablaMultiplicar());