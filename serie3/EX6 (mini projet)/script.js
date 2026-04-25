function afficherHeure() {
    const maintenant = new Date();

    const date = maintenant.toLocaleDateString();

    const heure = maintenant.toLocaleTimeString();

    document.getElementById("horloge").innerText = date + " - " + heure;
}

setInterval(afficherHeure, 1000);
afficherHeure();

let dark = false;
function darkmode(){
    if(dark===true){
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        document.getElementById("theme").innerText = "sombre";
        dark = false;
    }
    else if(dark === false){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.getElementById("theme").innerText = "claire";
        dark = true;
    }
}

alert("Bienvenue dans ma page web");
