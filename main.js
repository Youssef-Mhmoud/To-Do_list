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

  if (!input.value) return document.querySelector('.task-emp').classList.add('show-empty');
  else document.querySelector('.task-emp').classList.remove('show-empty')
  taskCont.innerHTML += `
  <div class="task">
    <div class="check-box">
      <div class="check-list"></div>
      <p class="text-line">${input.value}</p>
    </div>
    <div>
      <i class="fa-solid fa-xmark"></i>
    </div>
  </div>`;
  // To Reset The Input Field
  input.value = "";
});

// Remove A Task And Finished
taskCont.addEventListener("click", (eo) => {
  switch (eo.target.className) {
    // Remove A Task
    case "fa-solid fa-xmark":
      eo.target.parentElement.parentElement.remove();
      break;
    // Add Background Check Box And Add Class Name Text Line
    case "check-list":
      eo.target.parentElement
        .getElementsByClassName("text-line")[0]
        .classList.add("check");
      eo.target.classList.add("check-background");
      break;
    // Remove Background Check Box And Remove Class Name Text Line
    case "check-list check-background":
      eo.target.classList.remove("check-background");
      eo.target.parentElement
        .getElementsByClassName("text-line")[0]
        .classList.remove("check");
      break;
  }
});
