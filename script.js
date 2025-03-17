document.addEventListener("DOMContentLoaded", function() {
    // Abre a pop-up quando clicada
    document.querySelectorAll(".section").forEach(section => {
        section.addEventListener("click", function() {
            let targetPopup = document.getElementById(this.getAttribute("data-target"));
            targetPopup.classList.add("active");
        });
    });

    // Fecha a pop-up na cruz ou fora do espaço
    document.querySelectorAll(".popup").forEach(popup => {
        popup.addEventListener("click", function(event) {
            if (event.target.classList.contains("close-btn") || event.target === this) {
                this.classList.remove("active");
            }
        });
    });
});