function toggleBar() {
    let sideBar= document.getElementById("toggle");
    if (sideBar.style.height === "fit-content") { 
        sideBar.style.height = "0px";
    } else {
        sideBar.style.height = "fit-content";
    }
}