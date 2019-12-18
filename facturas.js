let inicializar = function () {
    let boton = document.getElementById('agregar');
    boton.onclick = agregarLinea;
}

// Inicialización de la aplicación cuando se carga el DOM
document.body.onload = inicializar;

let base = 0;
let iva = 0;
let total = 0;


let agregarLinea = function () {

    let producto = document.getElementById("producto").value;
    let cantidad = document.getElementById("cantidad").value;
    let precio_unitario = document.getElementById("precio-unitario").value;
    let precio_total = precio_unitario*cantidad;
    
    base = base+precio_total;
    iva = base*0.21;
    total = base+iva;

    document.getElementById("base-imponible").innerHTML = base;
    document.getElementById("iva").innerHTML = iva;
    document.getElementById("total").innerHTML = total;
    
    document.getElementById("tbody").insertRow(-1).innerHTML = '<td>'+producto+'</td><td>'+cantidad+'</td><td>'+precio_unitario+
    '€</td><td>'+precio_total+'€</td>';
    
    total_compra = total_compra + precio_total;
    let decimal_base = total_compra;
    

    
    let base_imponible = document.getElementsById("base-imponible").innerHTML = decimal_base.toFixed(2);
    
    

}
