const barra =
    document.getElementById(
        "barra"
    );

const huella =
    document.getElementById("huella");

const progreso =
    document.getElementById("progreso");
    const huellaContainer =
    document.getElementById(
        "huellaContainer"
    );

const registro =
    document.getElementById(
        "registro"
    );
const textoHuella =
    document.getElementById(
        "textoHuella"
    );

let tiempo = 0;
let intervalo = null;

function iniciarCarga(){

    clearInterval(intervalo);

    tiempo = 0;

    intervalo = setInterval(() => {

        tiempo += 100;

        barra.style.width =
            `${tiempo/30}%`;

        if(tiempo >= 3000){

    clearInterval(intervalo);

    textoHuella.textContent =
        "Identidad verificada 💜";

    setTimeout(() => {

        huellaContainer.style.display =
            "none";

        registro.classList.remove(
            "oculto"
        );

    }, 1200);

}

    },100);

}

function detenerCarga(){

    clearInterval(intervalo);

    tiempo = 0;

    barra.style.width = "0%";
}
huella.addEventListener(
    "touchstart",
    iniciarCarga
);

huella.addEventListener(
    "touchend",
    detenerCarga
);

huella.addEventListener(
    "mousedown",
    iniciarCarga
);

huella.addEventListener(
    "mouseup",
    detenerCarga
);
const fondo =
    document.querySelector(".fondoNeon");

for(let i = 0; i < 25; i++){

    const punto =
        document.createElement("div");

    punto.classList.add("punto");

    const size =
        20 + Math.random() * 80;

    punto.style.width =
        `${size}px`;

    punto.style.height =
        `${size}px`;

    punto.style.left =
        `${Math.random()*100}%`;

    punto.style.top =
        `${Math.random()*100}%`;

    punto.style.background =
        Math.random() > 0.5
        ? "#ff66ff"
        : "#aa44ff";

    punto.style.animationDelay =
        `${Math.random()*8}s`;

    fondo.appendChild(punto);
}

const nombresValidos = [
    "wendy",
    "lizeth",
    "wendy lizeth"
];

const fechaCorrecta = "2007-06-24";

const btnValidar =
    document.getElementById("validar");

const error =
    document.getElementById("error");

btnValidar.addEventListener("click", () => {

    const nombre =
        document.getElementById("nombre")
        .value
        .toLowerCase()
        .trim();

    const fecha =
        document.getElementById("fecha")
        .value;

    if (
        nombresValidos.includes(nombre) &&
        fecha === fechaCorrecta
    ) {

        error.textContent = "";

        // 👉 PASAMOS A LA SIGUIENTE FASE
        abrirMensajeEspecial();

    } else {

        error.textContent =
            "Identidad no reconocida 💜";
    }

});

function abrirMensajeEspecial() {

    registro.classList.add("oculto");

    document
        .getElementById("mensajeEspecial")
        .classList.remove("oculto");
    
    universo.classList.add("oculto");
}

const btnUniverso =
    document.getElementById("abrirUniverso");

const mensajeEspecial =
    document.getElementById("mensajeEspecial");

const universo =
    document.getElementById("universo");

btnUniverso.addEventListener("click", () => {

    mensajeEspecial.classList.add("oculto");

    universo.classList.remove("oculto");

    universo.style.opacity = "0";
    universo.style.transform = "scale(1)";

    // ESCENA 1: fade in
    setTimeout(() => {
        universo.style.transition = "opacity 1.5s ease";
        universo.style.opacity = "1";
    }, 100);

    // ESCENA 2: estrellas
    setTimeout(() => {
        document.querySelector(".estrellas").style.opacity = "1";
    }, 1200);

    // ESCENA 3: vida (frases + corazones)
    setTimeout(() => {

        document.querySelector(".frases").style.opacity = "1";
        document.querySelector(".corazones").style.opacity = "1";

        // generar corazones aquí (IMPORTANTE)
        const contenedorCorazones =
            document.querySelector(".corazones");

        for (let i = 0; i < 20; i++) {

            const c = document.createElement("div");

            c.classList.add("corazon");
            c.textContent = "💜";

            c.style.left = Math.random() * 100 + "%";
            c.style.animationDuration =
                (4 + Math.random() * 5) + "s";
            c.style.animationDelay =
                Math.random() * 3 + "s";

            contenedorCorazones.appendChild(c);
        }

    }, 2600);

    // ESCENA 4: impacto (Lizeth)
    setTimeout(() => {

        const titulo =
            document.querySelector(".centro h1");

        titulo.style.transition = "transform 1.2s ease";
        titulo.style.transform = "scale(1.2)";

    }, 4000);

    // zoom final
    setTimeout(() => {
        universo.style.transition = "transform 2s ease";
        universo.style.transform = "scale(1.06)";
    }, 4800);

});

const frases = document.querySelector(".frases");

const textos = [
    "Eres luz 💜",
    "Eres tan brillante como tu sonrisa",
    "Que Dios te bendiga siempre",
    "Que hayas sonreído mucho hoy",
    "🎂 Feliz cumpleaños Liz",
    "estoy muy orgulloso de ti",
    "lo estas haciendo muy bien",
    "Tu manera de ser es única 🦋🌷",
    "Quiero cuidarte siempre",
    "🌷 Eres un 100 para mí 💯✨",
    "Tu energía inspira",
    "Nunca te apagues ✨",
    "Brillas más de lo que crees",
    "El universo te eligió 💫"
    
    
];

for(let i = 0; i < 12; i++){

    const f = document.createElement("div");

    f.classList.add("frase");

    f.textContent =
        textos[Math.floor(Math.random() * textos.length)];

    f.style.left =
        Math.random() * 100 + "%";

    f.style.animationDuration =
        (6 + Math.random() * 6) + "s";

    f.style.animationDelay =
        Math.random() * 5 + "s";

    frases.appendChild(f);
}

const btnCerrar =
    document.getElementById(
        "cerrarUniverso"
    );

btnCerrar.addEventListener("click", () => {

    // Ocultar universo
    universo.classList.add("oculto");

    // Volver a pantalla inicial
    huellaContainer.style.display =
        "flex";

    // Reiniciar texto
    textoHuella.textContent =
        "Mantén presionado para desbloquear 💜";

    // Reiniciar barra
    barra.style.width = "0%";

    // Reiniciar variables
    tiempo = 0;

});