function visibility() {
    let passwordInput = document.getElementById("passwordInput");
    let eyeStyle= document.getElementById("visibilityBtn");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeStyle.style.color = "rgb(0, 162, 255)";
    } else {
        passwordInput.type ="password";
        eyeStyle.style.color = "rgb(116, 116, 116)";
    }
}