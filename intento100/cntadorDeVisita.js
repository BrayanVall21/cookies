function redireccionar() {
    // Verificar si la cookie existe
    if (document.cookie.indexOf("visitas") >= 0) {
        // La cookie existe, obtener el número de visitas
        var numeroVisitas = parseInt(getCookie("visitas"));

        // Incrementar el número de visitas
        numeroVisitas++;

        // Establecer la cookie con el nuevo número de visitas
        setCookie("visitas", numeroVisitas, 365);

        // Redireccionar según el número de visitas
        switch (numeroVisitas) {
            case 1:
                window.location.href = "https://www.google.com";
                break;
            case 2:
                window.location.href = "https://www.youtube.com";
                break;
            case 3:
                window.location.href = "https://es.wikipedia.org/wiki/Wikipedia:Portada";
                break;
            default:
                // Redireccionar a un enlace predeterminado si se supera el número de visitas esperado
                window.location.href = "https://espanol.yahoo.com/?p=us";
                break;
        }
    } else {
        // La cookie no existe, es la primera visita
        // Establecer la cookie con 1 visita
        setCookie("visitas", 1, 365);

        // Redireccionar al primer enlace
        window.location.href = "https://www.google.com";
    }
}

// Función para obtener el valor de una cookie
function getCookie(nombre) {
    var nombreEQ = nombre + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) == ' ') cookie = cookie.substring(1, cookie.length);
        if (cookie.indexOf(nombreEQ) == 0) return cookie.substring(nombreEQ.length, cookie.length);
    }
    return null;
}

// Función para establecer una cookie
function setCookie(nombre, valor, dias) {
    var fecha = new Date();
    fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
    var expira = "expires=" + fecha.toUTCString();
    document.cookie = nombre + "=" + valor + ";" + expira + ";path=/";
}