window.onload = afficher_image;

let img, explication, txt, rand, form

function afficher_image() {
    rand = Math.floor(Math.random() * 3).toString();
    let imgid = "img"+rand
    let explicationid = "explication"+rand
    console.log(rand)

    img = document.getElementById(imgid)
    txt = document.getElementById("txt")
    explication = document.getElementById(explicationid)
    form = document.getElementById("form")
    
    img.removeAttribute("hidden")

}

function verifReponse(){
    switch (rand) {
        case "0":
            if (txt.value.toLowerCase() == "testicule"){
                txt.classList.add("is-valid")
            } else {
                txt.classList.add("is-invalid")
            }
            break;
        case "1":
            if (txt.value.toLowerCase() == "vagin"){
                txt.classList.add("is-valid")
            } else {
                txt.classList.add("is-invalid")
            }
            break;
        case "2":
            if (txt.value.toLowerCase() == "anus"){
                txt.classList.add("is-valid")
            } else {
                txt.classList.add("is-invalid")
            }
            break;
        default:
            break;
    }
    explication.removeAttribute("hidden")
}