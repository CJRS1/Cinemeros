const agregar = document.getElementById("btn_agregar");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const correo = document.getElementById("correo");
const contraseña = document.getElementById("contraseña");

const agregarEvento = (e) => {
    e.preventDefault();
    const data = {
        nombre: nombre.value,
        apellido: apellido.value,
        correo: correo.value,
        contraseña: contraseña.value,
    };

    fetch("http://localhost:3000/Cinemeros/register", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
    })
        .then((request) => {
            return request.json();
        })
        .then((data) => {
            console.log(data);
            // window.location.href = "/mostrar-clientes";
        })
        .catch((error) => {
            console.log("error al crear el cliente");
        });
};

agregar.addEventListener("click", agregarEvento);
