function showAlert() {
    alert("Button clicked!");
}
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".alert-button");
    buttons.forEach(button => {
        button.addEventListener("click", showAlert);
    });
});