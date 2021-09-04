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
