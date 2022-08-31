let nombre = prompt("Ingrese su nombre;")
var presupuestoInicial = parseFloat(prompt("Ingrese el precio del servicio elegido"))
let IVA = presupuestoInicial * 0.21
let ResultadoFinal = presupuestoInicial + IVA



if(nombre == "Pepe") {
    console.log("El texto ingresado es;", nombre)
}

if (presupuestoInicial < 30000) {
        console.log("Continuemos")      
    }


function iva (IVA) {
    return (presupuestoInicial * 0.21)
} prompt ("La taza de iva para su servicio es de :", IVA)

function Resultado (ResultadoFinal) {
    return (IVA + presupuestoInicial)
} prompt ("El presupuesto de su servicio incluyendo iva es de:", ResultadoFinal)