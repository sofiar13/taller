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


function comparePass(){
    const pass1 = document.getElementById("password1");
    const pass2 = document.getElementById("password2");

    if (pass1.value !== pass2.value){
        pass1.setCustomValidity("passwords no coinciden")
        pass2.setCustomValidity("passwords no coinciden")
    } else {
        pass1.setCustomValidity("")
        pass2.setCustomValidity("")
    }
}



