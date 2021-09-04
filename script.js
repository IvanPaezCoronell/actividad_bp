// #1 Calcular la Masa
function masa(presion, volumen, temperatura){
    let formula_masa = (presion * volumen) / (0.37 * (temperatura + 460));
    return `La masa es: ${formula_masa}`;
}
console.log(masa (30 ,15,36));

// #2 Calcular Numero de Pulsaciones
function pulsaciones(edad){
    let formula_pulsaciones = (200 - edad)/10
    return `El numero de pulsaciones es de: ${formula_pulsaciones}`;
}
console.log(pulsaciones (15));



// #3 Porcentaje Invertido
function porcentaje(p1,p2,p3){
    let inversion_total = p1 + p2 + p3;
    let porcentajep1 = (p1 / inversion_total) * 100;
    let porcentajep2 = (p2 / inversion_total) * 100;
    let porcentajep3 = (p3 / inversion_total) * 100;
    return `La inversion total es de ${inversion_total}
    \n El porcentaje invertido de la 1ra persona es de ${porcentajep1}
    \n El porcentaje invertido de la 2da persona es de ${porcentajep2}
    \n El porcentaje invertido de la 3ra persona es de ${porcentajep3}`;
} 
console.log(porcentaje(200,150,250));



// #4 Intereses sobre el saldo ahorrado en un banco
function saldo_ahorrado(saldo_inicial){
    let saldo_final = (saldo_inicial * 0.015)+ saldo_inicial;
    return `El saldo final es de ${saldo_final}`;
}
console.log(saldo_ahorrado(5000));



// #5 Descuento sobre el sueldo base a trabajadores
function sueldo_trabajadores(sueldo_t){
    let pp = sueldo_t * 0.01;
    let ss = sueldo_t * 0.04;
    let sf = sueldo_t * 0.005;
    let ca = sueldo_t * 0.05;
    let sueldo_total = (sueldo_t - pp - ss - sf - ca);
    return `El descuento por ley de politica publica es de : ${pp}
    \n El descuento por seguro social es de: ${ss}
    \n El descuento por seguro forzoso es de: ${sf}
    \n El descuento por caja de ahorro es de: ${ca} 
    \n El saldo total a pagar al trabajador es de ${sueldo_total}`;
}
console.log(sueldo_trabajadores(500));



// #6 Periodico EL INFORMADORcobro por avisos
function periodico(palabras,centimetros,colores){
    let cobro_aviso = (palabras * 20000) + (centimetros * 15000) + (colores * 25000)
    return `El costo total del aviso es de ${cobro_aviso}`
}
console.log(periodico(10,15,2))



// #7 Bonos por Antiguedad
function bonos(anos){
    let bono_pagar = (anos * 120000) + 100000
    return `El monto del bono a pagar es de ${bono_pagar}`
}
console.log(bonos(5));



// #8 Pago a porfesors de una universidad
function profesores(horas){
    let pago_horas = horas * 20000
    let caja_ahorros = pago_horas * 0.05
    let descuento = pago_horas - caja_ahorros
    return `El descuento por concepto de caja de ahorros es de ${caja_ahorros}
    \n El valor total a pagar al profesor es de ${descuento}` 
}
console.log(profesores(8));
