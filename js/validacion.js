function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
    let tiempoFuera = setTimeout(()=>{
        document.getElementById("alert-success").classList.remove("show");
        clearTimeout(tiempoFuera);
    }, 2000);
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
    let tiempoFuera = setTimeout(()=>{
        document.getElementById("alert-danger").classList.remove("show");
        clearTimeout(tiempoFuera);
    }, 2000);
}