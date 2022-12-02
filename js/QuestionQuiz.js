let Question1 = {
    html: `
    <h1>Vrai ou faux: une ist est transmisble par rapport anal ? 🍑</h1>
    <input type="radio" name="questionvf" id="vrai">vrai</input><br>
    <input type="radio" name="questionvf" id="faux">faux</input><br>
    <button id="button" onclick = "submitVrai()">valider</button>
    `,

    BonneReponse: `<h1>Bonne Réponse ! d'ailleurs voici les différent types de transmition :</h1> <br>
    <img src="https://corevih-sud.org/wp-content/uploads/2018/05/TBL-IST_20151.jpg"> </img>
    <button id="button" onclick = "suivant()">suivant</button>`,
    FauxReponse: `Mauvaise Réponse ! d'ailleurs voici les différent types de transmition :</h1> <br>
    <img src="https://corevih-sud.org/wp-content/uploads/2018/05/TBL-IST_20151.jpg"> </img>
    <button id="button" onclick = "suivant()">suivant</button>`,
    get: function(x) {
      document.getElementById(x).innerHTML = this.html;
    }

  }
  
  let Question2 = {
    html: `
    <h1>Quels sont les moyen de contraception pouvant empêcher la transmission d'ist</h1>
    <input type="checkbox" name="questionvf" id="pm">préservatif masculin</input><br>
    <input type="checkbox" name="questionvf" id="pf">préservatif féminin</input><br>
    <input type="checkbox" name="questionvf" id="pl">pillule du lendemain</input><br>
    <input type="checkbox" name="questionvf" id="lv">la vasectomie</input><br>
    <button id="button" onclick = "submitMoyen()">valider</button>
    `,

     BonneReponse: `<h1>Bonne réponse ! Un des grand avantage des préservatif, latex ou non !<br> 
     Comme quoi un bout de plastique peut sauver des vie !</h1>
    <button id="button" onclick = "suivant()">suivant</button>`,
    FauxReponse: `<h1>c'est faux, ce sont les préservatif !</h1>
    <button id="button" onclick = "suivant()">suivant</button>`,
    get: function(x) {
      document.getElementById(x).innerHTML = this.html;
    }

  }

  let Question3 = {
    html: `
    <h1>Vrai ou faux: les larmes et la sueurs peuvent transmettre les ist ?</h1>
    <input type="radio" name="questionvf" id="vrai">vrai</input><br>
    <input type="radio" name="questionvf" id="faux">faux</input><br>
    <button id="button" onclick = "submitFaux()">valider</button>
    `,

     BonneReponse: `<h1>Bonne réponse ! N'hésiter pas de calîner votre partenaire en pleine canicule 😄</h1>
    <button id="button" onclick = "suivant()">suivant</button>`,
    FauxReponse: `<h1>Mauvaise réponse ! Maintenant n'hésiter pas de calîner votre partenaire en pleine canicule 😄 </h1>
    <button id="button" onclick = "suivant()">suivant</button>`,
    get: function(x) {
      document.getElementById(x).innerHTML = this.html;
    }

  }

  let Question4 = {
    html: `
    <h1>C'est quoi ça ?</h1>
    <img src="https://resize.prod.docfr.doc-media.fr/rcrop/1200,678,center-middle/ext/eac4ff34/content/2022/7/3/preservatif-feminin-e19ba7cdcf5472b4.jpeg"></img>
    <input type="radio" name="questionvf" id="faux">préservatif masculin king size</input><br>
    <input type="radio" name="questionvf" id="vrai">préservatif féminin</input><br>
    <input type="radio" name="questionvf" id="faux">un stérillet</input><br>
    <input type="radio" name="questionvf" id="faux">un sac Balenciaga</input><br>
    <button id="button" onclick = "submitVrai()">valider</button>
    `,

     BonneReponse: `<h1>Bien ! Souvent négligé mais pourtant efficace !</h1>
     <img src="https://depistage.be/wp-content/uploads/2019/10/pose_capote_interne_oyes.png"></img>
    <button id="button" onclick = "suivant()">suivant</button>`,
    FauxReponse: `<h1>Dommage ! c'est un préservatif féminin, voici un petit tutoriel :</h1>
    <img src="https://depistage.be/wp-content/uploads/2019/10/pose_capote_interne_oyes.png"></img>
    <button id="button" onclick = "suivant()">suivant</button>`,
    get: function(x) {
      document.getElementById(x).innerHTML = this.html;
    }

  }


  let Question5 = {
    html: `
    <h1>Vrai ou faux: une ist est transmisble par rapport oral ?</h1>
    <input type="radio" name="question1" id="vrai">vrai</input><br>
    <input type="radio" name="question1" id="faux">faux</input><br>
    <button id="button" onclick = "submitVrai()">valider</button>
    `,

     BonneReponse: `<h1>Bonne Réponse ! d'ailleurs voici les différent types de transmition :</h1> <br>
     <img src="https://corevih-sud.org/wp-content/uploads/2018/05/TBL-IST_20151.jpg"> </img>
    <button id="button" onclick = "suivant()">suivant</button>`,
    FauxReponse: `Mauvaise Réponse ! d'ailleurs voici les différent types de transmition :</h1> <br>
    <img src="https://corevih-sud.org/wp-content/uploads/2018/05/TBL-IST_20151.jpg"> </img>
    <button id="button" onclick = "suivant()">suivant</button>`,
    get: function(x) {
      document.getElementById(x).innerHTML = this.html;
    }

  }


  let Question6 = {
    html: `
    <h1>Le vaccin contre le VIH est-il obligatoire ?</h1>
    <input type="radio" name="question1" id="faux">oui</input><br>
    <input type="radio" name="question1" id="faux">non</input><br>
    <input type="radio" name="question1" id="vrai">il n'y en a pas</input><br>
    <button id="button" onclick = "submitVrai()">valider</button>
    `,

     BonneReponse: `<h1>C'est la triste vérité, mais les avancé scientifique sont optimiste pour l'avenir </h1>
    <button id="button" onclick = "suivant()">suivant</button>`,
    FauxReponse: `<h1>Il n'y en a pas encore, mais les avancé scientifique sont optimiste pour l'avenir </h1>
    <button id="button" onclick = "suivant()">suivant</button>`,
    get: function(x) {
      document.getElementById(x).innerHTML = this.html;
    }

  }


  let Question7 = {
    html: `
    <h1>Vrai ou faux: une ist peuvent être héréditaire ?</h1>
    <input type="radio" name="question1" id="vrai">vrai</input><br>
    <input type="radio" name="question1" id="faux">faux</input><br>
    <button id="button" onclick = "submitVrai()">valider</button>
    `,

     BonneReponse: `<h1>Bonne Réponse ! d'ailleurs voici les différent types de transmition :</h1> <br>
     <img src="https://corevih-sud.org/wp-content/uploads/2018/05/TBL-IST_20151.jpg"> </img>
    <button id="button" onclick = "suivant()">suivant</button>`,
    FauxReponse: `Mauvaise Réponse ! d'ailleurs voici les différent types de transmition :</h1> <br>
    <img src="https://corevih-sud.org/wp-content/uploads/2018/05/TBL-IST_20151.jpg"> </img>
    <button id="button" onclick = "suivant()">suivant</button>`,
    get: function(x) {
      document.getElementById(x).innerHTML = this.html;
    }

  }

  let Question8 = {
    html: `
    <h1>Vrai ou faux: les rapports homosexuel n'ont pas besoins d'être protégé ?</h1>
    <input type="radio" name="question1" id="vrai">vrai</input><br>
    <input type="radio" name="question1" id="faux">faux</input><br>
    <button id="button" onclick = "submitFaux()">valider</button>
    `,

     BonneReponse: `<h1>Bonne Réponse ! d'ailleurs voici les différent types de transmition :</h1> <br>
     <img src="https://corevih-sud.org/wp-content/uploads/2018/05/TBL-IST_20151.jpg"> </img>
    <button id="button" onclick = "suivant()">suivant</button>`,
    FauxReponse: `Mauvaise Réponse ! d'ailleurs voici les différent types de transmition :</h1> <br>
    <img src="https://corevih-sud.org/wp-content/uploads/2018/05/TBL-IST_20151.jpg"> </img>
    <button id="button" onclick = "suivant()">suivant</button>`,
    get: function(x) {
      document.getElementById(x).innerHTML = this.html;
    }

  }


  let Question9 = {
    html: `
    <h1>Un préservatif féminin peut être placé combien de temps avant un rapport ?</h1>
    <input type="radio" name="question1" id="faux">4 heures avant</input><br>
    <input type="radio" name="question1" id="faux">6 heure avant</input><br>
    <input type="radio" name="question1" id="vrai">8 heures avant</input><br>
    <input type="radio" name="question1" id="faux">juste avant le rapport</input><br>
    <input type="radio" name="question1" id="faux">Après le rapport, on sait jamais ¯\_(ツ)_/¯</input><br>
    
    <button id="button" onclick = "submitVrai()">valider</button>
    `,

     BonneReponse: `<h1>eh oui ! n'hésitez pas quand vous partez en soirée 😉 </h1>
    <button id="button" onclick = "suivant()">suivant</button>`,
    FauxReponse: `<h1>8h ! n'hésitez pas quand vous partez en soirée 😉  </h1>
    <button id="button" onclick = "suivant()">suivant</button>`,
    get: function(x) {
      document.getElementById(x).innerHTML = this.html;
    }

  }

  let Question10 = {
    html: `
    <h1>les spermicide existent ?</h1>
    <img src="https://media2.giphy.com/media/d1TwYpDcR1zPi/giphy.gif?cid=790b76115efe1e3242a4e00b7b6efd5e25024d241def7222&rid=giphy.gif&ct=g"></img><br>
    <input type="radio" name="question1" id="vrai">oui</input><br>
    <input type="radio" name="question1" id="faux">non</input><br>
    <button id="button" onclick = "submitVrai()">valider</button>
    `,

     BonneReponse: `<h1>c'est vrai, cela existe en gélule !</h1>
    <button id="button" onclick = "suivant()">suivant</button>`,
    FauxReponse: `<h1>Bien que les spermatozoide ne sont pas des insectes, cela existe en gélule ! </h1>
    <button id="button" onclick = "suivant()">suivant</button>`,
    get: function(x) {
      document.getElementById(x).innerHTML = this.html;
    }

  }

  let allQuestion = [Question1, Question2, Question3, Question4, Question5, Question6, Question7, Question8, Question9, Question10]

  function get5Question(){
    let tab=[];
    for (let i = 0; i < 5; i++) {
      let questionSelectionne= Math.floor(Math.random() *(10-i));
      while(tab.includes(allQuestion[questionSelectionne])){
        questionSelectionne= Math.floor(Math.random() *(10-i));
      }
      tab[i]=allQuestion[questionSelectionne];
    }
    return tab;
  }