const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("listContainer");


function addTask() {
  if(inputBox.value === ''){
      alert('Votre tache ne peut pas être vide.');
  } else {
      let li = document.createElement('li');
      li.innerHTML = inputBox.value;
      listContainer.appendChild(li);
      let span = document.createElement('span');
      span.innerHTML = "\u00d7";
      li.appendChild(span);
  }
  inputBox.value = "";
};

listContainer.addEventListener('click', function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");

  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();

  }
}, false);

// const button = document.querySelector('button');
// button.addEventListener("click", function() {



// });
