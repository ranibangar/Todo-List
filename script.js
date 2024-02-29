const inputBox = document.getElementById("inpText");
const listContainer = document.getElementById("listContainer");
const button = document.getElementById("btn");

button.addEventListener("click", function () {
  addTask();
  updateTaskCount();
});

// to add task to list
function addTask() {
  if (inpText.value.trim() === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    //make div
    let div = document.createElement("div");
    div.classList.add("listItem");
    //make checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("itemChecked");

    //make inputbox
    let description = document.createElement("p");
    description.classList.add("itemDescription");
    description.textContent = inpText.value;

    // append checkbox and input to div

    div.appendChild(checkbox);
    div.appendChild(description);

    // Append the div to the <li> element
    li.appendChild(div);

    // Append the li to list container
    listContainer.appendChild(li);
    updateTaskCount();

    // Clear the input box value after adding the task
    inputBox.value = "";

    //to add delete button

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    div.appendChild(span);

    // To remove task or make it checked or unchecked

    span.addEventListener("click", function () {
      li.remove();
      updateTaskCount();
    });

    div.addEventListener("click", function () {
      description.classList.toggle("checked");
    });
  }
}

//to count list item
function updateTaskCount() {
  const taskCount = document.querySelectorAll("#listContainer li").length;
  document.getElementById("taskCount").textContent = `Total Task:${taskCount}`;
}
