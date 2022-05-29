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
    <div class="check-box">
      <div class="check-list"></div>
      <p class="text-line">${input.value}</p>
    </div>
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
  // Add A Check Box
  else if(eo.target.className == "check-list") {
    eo.target.parentElement.getElementsByClassName("text-line")[0].classList.add("check");
    eo.target.classList.add('check-background')
  } 
  else if(eo.target.className == "check-list check-background") {
    eo.target.classList.remove('check-background')
    eo.target.parentElement.getElementsByClassName("text-line")[0].classList.remove("check");
  }
});
