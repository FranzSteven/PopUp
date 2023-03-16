function weg() {

    let row = document.getElementById("nav-row");
    let lstChild = row.lastChild;

    row.removeChild(lstChild);

    console.log("click");
}

function init() {

    let img1 = document.getElementById("image1");

    img1.addEventListener("click", weg);
}

window.addEventListener("load", init);