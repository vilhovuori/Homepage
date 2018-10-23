
function piilota(event) {
    var h4elem = event.target;
    var divelem = h4elem.nextElementSibling;

    if (divelem.style.display === "none") {
        divelem.style.display = "block";
    } else {
        divelem.style.display = "none";
    }
}

function asetakasittelijat() {
    var kaikki = document.getElementsByTagName("h4");
    for(var i = 0 ; i < kaikki.length ; ++i) {
        kaikki[i].onclick = piilota;
    }
}
asetakasittelijat();

// function avaa(event) {
//     var initiallyHidden = event.target;
//     var divelem = initiallyHidden.nextElementSibling;
//
//     if (divelem.style.display === "none") {
//         divelem.style.display = "block";
//     } else {
//         divelem.style.display = "block";
//     }
// }
//
// function kasittelija() {
//     var kaikki = document.getElementsByTagName("initiallyHidden");
//     for(var i = 0 ; i < kaikki.length ; ++i) {
//         kaikki[i].onclick = avaa;
//     }
// }
// kasittelija();
