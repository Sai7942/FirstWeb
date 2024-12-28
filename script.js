
window.onload = function() {
    alert("Welcome to the Contact Us page!");
};

function logEmail() {
    console.log("Email: abc@gmail.com");
}
document.addEventListener("DOMContentLoaded", function() {
    const emailParagraph = document.querySelector("main p:nth-of-type(2)");
    emailParagraph.addEventListener("click", logEmail);
});