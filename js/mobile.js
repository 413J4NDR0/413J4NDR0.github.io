function menu() {
    var x = document.getElementById("navbar1");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}