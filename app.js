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
  saveData();
};

listContainer.addEventListener('click', function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();

  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function getData() {
  listContainer.innerHTML = localStorage.getItem('data');
}
getData();

// const button = document.querySelector('button');
// button.addEventListener("click", function() {



// });
