
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


document.getElementById('form').addEventListener('submit', (e) =>{
    const pass1 = document.getElementById("password1");
    const pass2 = document.getElementById("password2");
    e.preventDefault()
    if (pass1.value !== pass2.value || pass1.value.length < 6) {
        showAlertError();
    } else {
        showAlertSuccess();
    }
})
