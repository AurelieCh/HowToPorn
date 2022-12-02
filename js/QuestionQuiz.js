let Question1 = {
    html: `
    <h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;">Vrai ou faux: une ist est transmisible par rapport anal ? 🍑</h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;">
    <input class="form-check-input"" type="radio" name="questionvf" id="vrai"></input><label class="form-check-label"> vrai</label><br>
    <input class="form-check-input"" type="radio" name="questionvf" id="faux"></input><label class="form-check-label"> faux</label><br>
    <button class="btn btn-primary" id="button" onclick = "submitVrai()">valider</button>
    `,

    BonneReponse: `<h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;">Bonne Réponse ! d'ailleurs voici les différent types de transmition :</h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;"> <br>
    <img src="https://corevih-sud.org/wp-content/uploads/2018/05/TBL-IST_20151.jpg"> </img>
    <button class="btn btn-primary" id="button" onclick = "suivant()">suivant</button>`,
    FauxReponse: `Mauvaise Réponse ! d'ailleurs voici les différent types de transmition :</h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;"> <br>
    <img src="https://corevih-sud.org/wp-content/uploads/2018/05/TBL-IST_20151.jpg"> </img>
    <button class="btn btn-primary" id="button" onclick = "suivant()">suivant</button>`,
    get: function(x) {
      document.getElementById(x).innerHTML = this.html;
    }

  }
  
  let Question2 = {
    html: `
    <h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;">Quels sont les moyen de contraception pouvant empêcher la transmission d'ist</h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;">
    <input class="form-check-input"" type="checkbox" name="questionvf" id="pm"></input><label class="form-check-label"> préservatif masculin</label><br>
    <input class="form-check-input"" type="checkbox" name="questionvf" id="pf"></input><label class="form-check-label"> préservatif féminin</label><br>
    <input class="form-check-input"" type="checkbox" name="questionvf" id="pl"></input><label class="form-check-label"> pillule du lendemain</label><br>
    <input class="form-check-input"" type="checkbox" name="questionvf" id="lv"></input><label class="form-check-label"> la vasectomie</label><br>
    <button class="btn btn-primary" id="button" onclick = "submitMoyen()">valider</button>
    `,

     BonneReponse: `<h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;">Bonne réponse ! Un des grand avantage des préservatif, latex ou non !<br> 
     Comme quoi un bout de plastique peut sauver des vie !</h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;">
    <button class="btn btn-primary" id="button" onclick = "suivant()">suivant</button>`,
    FauxReponse: `<h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;">c'est faux, ce sont les préservatif !</h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;">
    <button class="btn btn-primary" id="button" onclick = "suivant()">suivant</button>`,
    get: function(x) {
      document.getElementById(x).innerHTML = this.html;
    }

  }

  let Question3 = {
    html: `
    <h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;">Vrai ou faux: les larmes et la sueurs peuvent transmettre les ist ?</h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;">
    <input class="form-check-input"" type="radio" name="questionvf" id="vrai"></input><label class="form-check-label"> vrai</label><br>
    <input class="form-check-input"" type="radio" name="questionvf" id="faux"></input><label class="form-check-label"> faux</label><br>
    <button class="btn btn-primary" id="button" onclick = "submitFaux()">valider</button>
    `,

     BonneReponse: `<h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;">Bonne réponse ! N'hésiter pas de calîner votre partenaire en pleine canicule 😄</h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;">
    <button class="btn btn-primary" id="button" onclick = "suivant()">suivant</button>`,
    FauxReponse: `<h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;">Mauvaise réponse ! Maintenant n'hésiter pas de calîner votre partenaire en pleine canicule 😄 </h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;">
    <button class="btn btn-primary" id="button" onclick = "suivant()">suivant</button>`,
    get: function(x) {
      document.getElementById(x).innerHTML = this.html;
    }

  }

  let Question4 = {
    html: `
    <h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;">C'est quoi ça ?</h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;">
    <img src="https://resize.prod.docfr.doc-media.fr/rcrop/1200,678,center-middle/ext/eac4ff34/content/2022/7/3/preservatif-feminin-e19ba7cdcf5472b4.jpeg" style="width: 50%"></img>
    <br>
    <input class="form-check-input"" type="radio" name="questionvf" id="faux"></input><label class="form-check-label"> préservatif masculin king size</label><br>
    <input class="form-check-input"" type="radio" name="questionvf" id="vrai"></input><label class="form-check-label"> préservatif féminin</label><br>
    <input class="form-check-input"" type="radio" name="questionvf" id="faux"></input><label class="form-check-label"> un stérillet</label><br>
    <input class="form-check-input"" type="radio" name="questionvf" id="faux"></input><label class="form-check-label"> un sac Balenciaga</label><br>
    <button class="btn btn-primary" id="button" onclick = "submitVrai()">valider</button>
    `,

     BonneReponse: `<h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;">Bien ! Souvent négligé mais pourtant efficace !</h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;">
     <img src="https://depistage.be/wp-content/uploads/2019/10/pose_capote_interne_oyes.png" style="width: 30%"></img>
    <button class="btn btn-primary" id="button" onclick = "suivant()">suivant</button>`,
    FauxReponse: `<h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;" style="width: 30%">Dommage ! c'est un préservatif féminin, voici un petit tutoriel :</h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;">
    <img src="https://depistage.be/wp-content/uploads/2019/10/pose_capote_interne_oyes.png"></img>
    <button class="btn btn-primary" id="button" onclick = "suivant()">suivant</button>`,
    get: function(x) {
      document.getElementById(x).innerHTML = this.html;
    }

  }


  let Question5 = {
    html: `
    <h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;">Vrai ou faux: une ist est transmisble par rapport oral ?</h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;">
    <input class="form-check-input"" type="radio" name="question1" id="vrai"> </input><label class="form-check-label"> vrai</label><br>
    <input class="form-check-input"" type="radio" name="question1" id="faux"></input><label class="form-check-label"> faux</label><br>
    <button class="btn btn-primary" id="button" onclick = "submitVrai()">valider</button>
    `,

     BonneReponse: `<h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;">Bonne Réponse ! d'ailleurs voici les différent types de transmition :</h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;"> <br>
     <img src="https://corevih-sud.org/wp-content/uploads/2018/05/TBL-IST_20151.jpg"> </img>
    <button class="btn btn-primary" id="button" onclick = "suivant()">suivant</button>`,
    FauxReponse: `<h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;">Mauvaise Réponse ! d'ailleurs voici les différent types de transmition :</h1> <br>
    <img src="https://corevih-sud.org/wp-content/uploads/2018/05/TBL-IST_20151.jpg"> </img>
    <button class="btn btn-primary" id="button" onclick = "suivant()">suivant</button>`,
    get: function(x) {
      document.getElementById(x).innerHTML = this.html;
    }

  }


  let Question6 = {
    html: `
    <h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;">Le vaccin contre le VIH est-il obligatoire ?</h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;">
    <input class="form-check-input"" type="radio" name="question1" id="faux"></input><label class="form-check-label"> oui</label><br>
    <input class="form-check-input"" type="radio" name="question1" id="faux"></input><label class="form-check-label"> non</label><br>
    <input class="form-check-input"" type="radio" name="question1" id="vrai"></input><label class="form-check-label"> il n'y en a pas</label><br>
    <button class="btn btn-primary" id="button" onclick = "submitVrai()">valider</button>
    `,

     BonneReponse: `<h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;">C'est la triste vérité, mais les avancé scientifique sont optimiste pour l'avenir </h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;">
    <button class="btn btn-primary" id="button" onclick = "suivant()">suivant</button>`,
    FauxReponse: `<h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;">Il n'y en a pas encore, mais les avancé scientifique sont optimiste pour l'avenir </h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;">
    <button class="btn btn-primary" id="button" onclick = "suivant()">suivant</button>`,
    get: function(x) {
      document.getElementById(x).innerHTML = this.html;
    }

  }


  let Question7 = {
    html: `
    <h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;">Vrai ou faux: une ist peuvent être héréditaire ?</h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;">
    <input class="form-check-input"" type="radio" name="question1" id="vrai"></input><label class="form-check-label"> vrai</label><br>
    <input class="form-check-input"" type="radio" name="question1" id="faux"></input><label class="form-check-label"> faux</label><br>
    <button class="btn btn-primary" id="button" onclick = "submitVrai()">valider</button>
    `,

     BonneReponse: `<h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;">Bonne Réponse ! d'ailleurs voici les différent types de transmition :</h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;"> <br>
     <img src="https://corevih-sud.org/wp-content/uploads/2018/05/TBL-IST_20151.jpg"> </img>
    <button class="btn btn-primary" id="button" onclick = "suivant()">suivant</button>`,
    FauxReponse: `Mauvaise Réponse ! d'ailleurs voici les différent types de transmition :</h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;"> <br>
    <img src="https://corevih-sud.org/wp-content/uploads/2018/05/TBL-IST_20151.jpg"> </img>
    <button class="btn btn-primary" id="button" onclick = "suivant()">suivant</button>`,
    get: function(x) {
      document.getElementById(x).innerHTML = this.html;
    }

  }

  let Question8 = {
    html: `
    <h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;">Vrai ou faux: les rapports homosexuel n'ont pas besoins d'être protégé ?</h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;">
    <input class="form-check-input"" type="radio" name="question1" id="vrai"></input><label class="form-check-label"> vrai</label><br>
    <input class="form-check-input"" type="radio" name="question1" id="faux"></input><label class="form-check-label"> faux</label><br>
    <button class="btn btn-primary" id="button" onclick = "submitFaux()">valider</button>
    `,

     BonneReponse: `<h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;">Bonne Réponse ! d'ailleurs voici les différent types de transmition :</h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;"> <br>
     <img src="https://corevih-sud.org/wp-content/uploads/2018/05/TBL-IST_20151.jpg"> </img>
    <button class="btn btn-primary" id="button" onclick = "suivant()">suivant</button>`,
    FauxReponse: `Mauvaise Réponse ! d'ailleurs voici les différent types de transmition :</h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;"> <br>
    <img src="https://corevih-sud.org/wp-content/uploads/2018/05/TBL-IST_20151.jpg"> </img>
    <button class="btn btn-primary" id="button" onclick = "suivant()">suivant</button>`,
    get: function(x) {
      document.getElementById(x).innerHTML = this.html;
    }

  }


  let Question9 = {
    html: `
    <h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;">Un préservatif féminin peut être placé combien de temps avant un rapport ?</h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;">
    <input class="form-check-input"" type="radio" name="question1" id="faux"></input><label class="form-check-label"> 4 heures avant</label><br>
    <input class="form-check-input"" type="radio" name="question1" id="faux"></input><label class="form-check-label"> 6 heure avant</label><br>
    <input class="form-check-input"" type="radio" name="question1" id="vrai"></input><label class="form-check-label"> 8 heures avant</label><br>
    <input class="form-check-input"" type="radio" name="question1" id="faux"></input><label class="form-check-label"> juste avant le rapport</label><br>
    <input class="form-check-input"" type="radio" name="question1" id="faux"></input><label class="form-check-label">Après le rapport, on sait jamais ¯\_(ツ)_/¯</label><br>
    
    <button class="btn btn-primary" id="button" onclick = "submitVrai()">valider</button>
    `,

     BonneReponse: `<h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;">eh oui ! n'hésitez pas quand vous partez en soirée 😉 </h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;">
    <button class="btn btn-primary" id="button" onclick = "suivant()">suivant</button>`,
    FauxReponse: `<h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;">8h ! n'hésitez pas quand vous partez en soirée 😉  </h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;">
    <button class="btn btn-primary" id="button" onclick = "suivant()">suivant</button>`,
    get: function(x) {
      document.getElementById(x).innerHTML = this.html;
    }

  }

  let Question10 = {
    html: `
    <h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;">les spermicide existent ?</h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;">
    <img src="https://media2.giphy.com/media/d1TwYpDcR1zPi/giphy.gif?cid=790b76115efe1e3242a4e00b7b6efd5e25024d241def7222&rid=giphy.gif&ct=g"></img><br>
    <input class="form-check-input"" type="radio" name="question1" id="vrai"></input><label class="form-check-label"> oui</label><br>
    <input class="form-check-input"" type="radio" name="question1" id="faux"></input><label class="form-check-label"> non</label><br>
    <button class="btn btn-primary" id="button" onclick = "submitVrai()">valider</button>
    `,

     BonneReponse: `<h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;">c'est vrai, cela existe en gélule !</h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;">
    <button class="btn btn-primary" id="button" onclick = "suivant()">suivant</button>`,
    FauxReponse: `<h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;">Bien que les spermatozoide ne sont pas des insectes, cela existe en gélule ! </h1 style="color:darkred; text-shadow: 1px 1px 2px black;text-align:center;">
    <button class="btn btn-primary" id="button" onclick = "suivant()">suivant</button>`,
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