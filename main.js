// Add A Date To <H1>
let h1 = document.querySelector("h1");

let theDate = new Date();
h1.innerHTML = theDate.toDateString();

// Get Elements
// let btnAdd = document.getElementById("add");
let input = document.getElementById("input");
let taskCont = document.querySelector(".cont-task");
let form = document.querySelector("form");

// Add A Task
form.addEventListener("submit", (eo) => {
  // Stop Reload The Page
  eo.preventDefault();

  taskCont.innerHTML += `
  <div class="task">
    <p class="text-line">${input.value}</p>
    <div>
      <i class="fa-solid fa-xmark"></i>
    </div>
  </div>`;
});

// Remove A Task
taskCont.addEventListener("click", (eo) => {
  if (eo.target.className == "fa-solid fa-xmark") {
    eo.target.parentElement.parentElement.remove();
  }
  eo.target.getElementsByClassName("text-line")[0].classList.toggle("check");
});
