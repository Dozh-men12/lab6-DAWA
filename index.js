const { diasParaNavidad, calcularEdad, validarForm } = require('oscar-tecsup');

const dias = diasParaNavidad() ;
const edad = calcularEdad("2004-02-05");

/* console.log(dias,"para navidad")  */
/* console.log(edad) */
const datosFormulario = {
    nombre: 'Oscar Hurtado',
    email: 'oscar.hurtado@tecsup.edu.pe',
    fechaNacimiento: '2004-05-02',
    
};
const resultadoform = validarForm(datosFormulario);
console.log(resultadoform);