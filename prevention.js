function myFunction() {
    var x = document.getElementById("navigation");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
}

function hideFirstText () {
    var x = document.getElementById("first-section-text");
    if (x.style.display == "none") {
        x.style.display = "block";
        document.getElementById("first-section-button").innerHTML = "Hide Text";
    } else {
        x.style.display = "none";
        document.getElementById("first-section-button").innerHTML = "Reveal Text";
    }
}

function hideSecondText () {
    var x = document.getElementById("second-section-list");
    if (x.style.display == "none") {
        x.style.display = "block";
        document.getElementById("second-section-button").innerHTML = "Hide List";
    } else {
        x.style.display = "none";
        document.getElementById("second-section-button").innerHTML = "Reveal List";
    }
}
