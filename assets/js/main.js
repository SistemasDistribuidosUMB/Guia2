// Mostrar un mensaje en consola para comprobar carga
console.log("JavaScript cargado correctamente.");

// Agregar interacción a los botones de las tarjetas
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".card-buttons button");

    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            const buttonText = e.target.textContent;
            alert(`Has presionado el botón: ${buttonText}`);
        });
    });
});
