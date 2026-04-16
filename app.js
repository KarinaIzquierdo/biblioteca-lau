let usuarios = [
    { usuario: "nicolas", password: "1232" }
];


function ocultarTodo() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("registerBox").style.display = "none";
    document.getElementById("libraryBox").style.display = "none";
}


function mostrarLogin() {
    ocultarTodo();
    document.getElementById("loginBox").style.display = "block";
}


function mostrarRegistro() {
    ocultarTodo();
    document.getElementById("registerBox").style.display = "block";
}


function volverMenu() {
    ocultarTodo();
    document.getElementById("menu").style.display = "block";
}


function registrar() {
    let usuario = document.getElementById("regUsuario").value;
    let password = document.getElementById("regPassword").value;

    usuarios.push({
        usuario: usuario,
        password: password
    });

    alert("Usuario registrado");
    volverMenu();
}

function login() {
    let usuario = document.getElementById("loginUsuario").value;
    let password = document.getElementById("loginPassword").value;

    let encontrado = usuarios.find(u =>
        u.usuario === usuario && u.password === password
    );

    if (encontrado) {
        ocultarTodo();
        document.getElementById("libraryBox").style.display = "block";
        alert("Bienvenida " + usuario);
    } else {
        alert("Datos incorrectos");
    }
}


function logout() {
    volverMenu();
}