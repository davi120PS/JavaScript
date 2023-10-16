var student = prompt('Cual es tu nombre?')
document.querySelector(".contenido").innerHTML = `${student} está aprendiendo JavaScript`

function CambiarColor (){
    const nombre = document.querySelector(".contenido")
    nombre.style.color = 'blue'
}

function SeleccionarColor(){
    let color = prompt('Color de texto')
    const nombre = document.querySelector(".contenido")
    nombre.style.color = color
}

function SumaNumeros(num1,num2){
    var total = num1+num2
    return total
}
console.log("El resultado es: ")
console.log(SumaNumeros(10,40))