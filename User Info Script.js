function toggleBar() {
    let sideBar= document.getElementById("toggle");
    if (sideBar.style.height === "519.5px") { 
        sideBar.style.height = "0px";
    } else {
        sideBar.style.height = "519.5px";
    }
}