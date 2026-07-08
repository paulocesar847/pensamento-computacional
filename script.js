
if (imc < 18.5) {
    console.log("Abaixo do peso normal")
} else if (imc < 24.9) {
    console.log("Peso normal")
} else  if (imc < 29.9) {
    console.log("Excesso de peso")
} else if (imc < 34.9) {
    console.log("Obesidade classe 1")
} else if (imc < 39.9) {
    console.log("Obesidade classe 2")
} else if (imc < 40.0) {
    console.log("Obesidade classe 3")
} 

function calcularIMC() {
    let altura = document.getElementById("altura").value
    let peso = document.getElementById("peso").value

    altura = parseInt(altura)
    peso = parseInt(peso)

    let imc = peso / altura**2
    
    document.getElementById("resultado-imc").textContent += imc
}