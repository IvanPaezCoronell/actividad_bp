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
