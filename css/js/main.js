function demo() {
    //Ingresamos un mensaje
    var mensaje = confirm("Antes de comprar tu producto quisiera saber si estas registrado");
    //Verificamos si el usuario acepto el mensaje
    if (mensaje) {
    alert("¡Gracias por confirmar!");
    }
    //Verificamos si el usuario denegó el mensaje
    else {
    alert("¡Haz denegado el mensaje!");
    }
    }