// Je cible tout d'abord les données qui vont être mises dans le input texte.
const inputBox = document.getElementById("input-box");
// Je cible la liste où vont aller les taches, genre c'est comme si c'était la boite que je cibler où les taches vont aller.
const listContainer = document.getElementById("listContainer");

// Ici je créer une fonction addTask
function addTask() {
  // Si la value de inputbox est vide, alors je mets une alerte.
  if(inputBox.value === ''){
      alert('Votre tache ne peut pas être vide.');
  } else {
    // Sinon, je créer une variable 'li' qui va créer un 'li' grâce à .createElement.
      let li = document.createElement('li');
      // J'indique que ce 'li' va prendre comme valeur le inputbox grâce au innerHTML.
      li.innerHTML = inputBox.value;
      // Ici j'indique que le li va être rattaché à la variable ListContainer grâce à appendChild(li).
      listContainer.appendChild(li);
      // Ici je créer une variable span qui va créer un 'span' dans le 'li'.
      let span = document.createElement('span');
      // "\u00d7" correspond à une croix, ici je dis que le le texte qui va être comprit dans la span correspond à la croix.
      span.innerHTML = "\u00d7";
      // Ensuite j'attache la span à li grâce à appendChild.
      li.appendChild(span);
  }
  // Je sors du if statement, une fois que je clique sur le bouton, le code juste après remet la box sans texte.
  inputBox.value = "";
  // La fonction saveData qui est definie plus bas permet de sauvegarder les données.
  saveData();
};
// Ensuite j'ajoute un EventListener sur la liste. La fonction passée à l'écouteur d'événements accepte un argument "e" qui représente l'événement de clic lui-même.
listContainer.addEventListener('click', function(e) {
  // Si je click sur un élément qui est un "li", alors le code ajoute la class "checked" à mon "li", dans le CSS, "checked" correspond au CSS qui va barrer le texte.
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  // Sinon, si je click sur un élément qui est un "span" (donc le x) alors il va supprimer l'élément parent de span qui est un "li" (donc la task).
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});
// Ici on créer une fonction saveData pour enregistrer les taches.
function saveData() {
  // J'utilise localStorage.setItem('le nom que je veux donner à la BDD', ce que je souhaite cibler, ici en l'occurence c'est la liste des tasks.)
  localStorage.setItem("data", listContainer.innerHTML);
}
// Ici je fais une fonction pour récupérer la data.
function getData() {
  // J'utilise localStorage.getItem('nom de ma BDD') est je lui dit que les informations doivent aller dans la liste.
  listContainer.innerHTML = localStorage.getItem('data');
}
getData();


