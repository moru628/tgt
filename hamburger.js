function myFunction() {
    var x = document.getElementById("topNav");
    if (x.className === "topnavi") {
        x.className += " responsive";
    } else {
        x.className = "topnavi";
    }
}