const btn = document.getElementByClassName("btn-dark");

btn.addEventListener("click", () => {
    swal.fire({
        title: 'prueba',
        text: 'test',
        icon: 'success',
        confirm: 'Ok'
    })
})

