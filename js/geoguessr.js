window.onload = afficher_image;

let img, explication, txt, rand, form, resultOk, resultBou

function afficher_image() {
    rand = Math.floor(Math.random() * 3).toString();
    let imgid = "img"+rand
    let explicationid = "explication"+rand
    console.log(rand)

    img = document.getElementById(imgid)
    txt = document.getElementById("txt")
    explication = document.getElementById(explicationid)
    form = document.getElementById("form")
    resultOk = document.getElementById("resultOk")
    resultBou = document.getElementById("resultBou")
    
    img.removeAttribute("hidden")

}

function verifReponse(){
    switch (rand) {
        case "0":
            if (txt.value.toLowerCase() == "testicule" 
             || txt.value.toLowerCase() == "couille" 
             || txt.value.toLowerCase() == "boule"){
                txt.classList.add("is-valid")
                resultOk.removeAttribute("hidden")
            } else if(txt.value.toLowerCase() == "nut"){
                window.open('https://media.tenor.com/jR291aTjU6QAAAAi/pepe-deez-nuts-pepe-frog.gif', '_blank');
            } else {
                txt.classList.add("is-invalid")
                resultBou.removeAttribute("hidden")
            }
            break;
        case "1":
            if (txt.value.toLowerCase() == "clitoris"){
                txt.classList.add("is-valid")
                resultOk.removeAttribute("hidden")
            } else {
                txt.classList.add("is-invalid")
                resultBou.removeAttribute("hidden")
            }
            break;
        case "2":
            if (txt.value.toLowerCase() == "anus"){
                txt.classList.add("is-valid")
                resultOk.removeAttribute("hidden")
            } else {
                txt.classList.add("is-invalid")
                resultBou.removeAttribute("hidden")
            }
            break;
        default:
            break;
    }
    explication.removeAttribute("hidden")
}