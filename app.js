// calcular pago en cuotas de un monto determinado
// solicitar monto
//calcular precio a 3 cuotas
//calcular precio a 6 cuotas
// calcular precio a 12 cuotas
let precioAFacturar = parseInt(prompt("Ingrese el precio a calcular"))
let numero1=0
let numero2=0
let numero3=0
function cuotasTres() {
    let numero1 = precioAFacturar/3
    let numero2 =precioAFacturar/6
    let numero3 = precioAFacturar/12
    alert("El precio se podrá pagar en 3 cuotas de $"+numero1+" 6 cuotas de $"+ numero2+" y 12 cuotas de $"+numero3)
}
cuotasTres()