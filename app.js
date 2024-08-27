
function encriptar() {
    let textoAEncriptar = document.getElementById("inputText").value;
    let textoEncriptado = ""; // Asegúrate de inicializar la variable

    for (let i = 0; i < textoAEncriptar.length; i++) {
        if (textoAEncriptar[i] === "a") {
            textoEncriptado += "ai";
        } else if (textoAEncriptar[i] === "e") {
            textoEncriptado += "enter";
        } else if (textoAEncriptar[i] === "i") {
            textoEncriptado += "imes";
        } else if (textoAEncriptar[i] === "o") {
            textoEncriptado += "ober";
        } else if (textoAEncriptar[i] === "u") {
            textoEncriptado += "ufat";
        } else {
            textoEncriptado += textoAEncriptar[i];
        }
    }

    document.getElementById("outputText").value = textoEncriptado;
    document.getElementById("outputText").classList.remove("hidden");
    document.querySelector(".boton-copiar").classList.remove("hidden");
}
function mostrarResultado(texto) {
    // Ocultar los elementos con las clases 'muñeco', 'sin-mensaje' y 'instrucciones'
    document.querySelector('.muñeco').classList.add('hidden');
    document.querySelector('.sin-mensaje').classList.add('hidden');
    document.querySelector('.instrucciones').classList.add('hidden');
}
// Desencriptar el texto
function desencriptar() {
    let textoEncriptado = document.getElementById("inputText").value;

    const reemplazos = [
        { clave: "ufat", valor: "u" },
        { clave: "ober", valor: "o" },
        { clave: "imes", valor: "i" },
        { clave: "enter", valor: "e" },
        { clave: "ai", valor: "a" }
    ];

    for (const { clave, valor } of reemplazos) {
        const regex = new RegExp(clave, 'g');
        textoEncriptado = textoEncriptado.replace(regex, valor);
    }

    document.getElementById("outputText").value = textoEncriptado;
    document.getElementById("outputText").classList.remove("hidden");
    document.querySelector(".boton-copiar").classList.remove("hidden");
}

// Copiar texto
function copiar() {
    const texto = document.getElementById("outputText").value;
    navigator.clipboard.writeText(texto)
        .then(() => {
            alert("Texto copiado al portapapeles!");
        })
        .catch(err => {
            alert("Error al copiar el texto: " + err);
        });
}

document.getElementById("encriptarBtn").addEventListener("click", encriptar);
document.getElementById("desencriptarBtn").addEventListener("click", desencriptar);
