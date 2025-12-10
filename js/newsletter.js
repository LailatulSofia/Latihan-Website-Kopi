document.addEventListener("DOMContentLoaded", () => {
    const checkbox = document.getElementById("langganan");

    checkbox. addEventListener("change", () => {
        if (checkbox.checked) {
            alert("Terimakasih telah belangganan!")
        } else {
            alert("Langganan dibatalkan.")
        }
    });
});