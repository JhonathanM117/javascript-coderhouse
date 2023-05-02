function mostrarMensaje(mensaje, Usuario){
    mensaje = `Bienvenido ${Usuario}`;
    alert(mensaje);
}

let Usuario = prompt("Ingrese su usuario");
let Contraseña = prompt("Ingrese su contraseña");

while(Usuario != "admin" || Contraseña != "1234"){
    alert("Usuario o contraseña incorrectos");
    Usuario = prompt("Ingrese su usuario");
    Contraseña = prompt("Ingrese su contraseña");
}

mostrarMensaje();


let mesDePago = prompt("Ingrese el mes de pago");
let diaDePago = prompt("Ingrese el dia de pago");
let monto = parseInt(prompt("Ingrese el monto a pagar"));
alert(`El mes de pago es ${mesDePago}, el dia de pago es ${diaDePago} y el monto a pagar es ${monto}`);

let amenidadResidencial = 


