const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("listContainer");


function addTask() {
  if(inputBox.value === '') {
      alert('Votre tache ne peut pas être vide.');
  } else {
      let li = document.createElement('li');
      li.innerHTML = inputBox.value;
      listContainer.appendChild(li);
  }};

// const button = document.querySelector('button');
// button.addEventListener("click", function() {



// });
console.log('test');
