document.getElementById("predictionForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtener valores del formulario
    const userName = document.getElementById("userName").value;
    const weatherCondition = document.getElementById("weatherCondition").value;

    // Generar saludo
    const greeting = userName ? `¡Hola, ${userName}!` : "¡Hola!";
    document.getElementById("greeting").textContent = greeting;

    // Mostrar el clima
    document.getElementById("weather").textContent = `El clima actual es: ${weatherCondition}`;

    // Generar predicción aleatoria
    const randomPrediction = Math.floor(Math.random() * 6);
    const predictions = [
        "Hoy será un día increíble, ¡disfrútalo!",
        "Mantente alerta, puede haber sorpresas inesperadas.",
        "Será un día productivo si te organizas bien.",
        "No dejes que los pequeños problemas arruinen tu día.",
        "Hoy es un buen día para probar algo nuevo.",
        "Confía en tu intuición, tomará las mejores decisiones por ti."
    ];
    const prediction = predictions[randomPrediction];
    document.getElementById("prediction").textContent = `Predicción del día: ${prediction}`;

    // Mostrar el resultado
    document.getElementById("result").classList.remove("hidden");
});