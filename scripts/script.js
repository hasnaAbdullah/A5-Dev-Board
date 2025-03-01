const completedButtons = document.querySelectorAll(".completed-btn");
const completedTask = document.getElementById("completed-task");
const remainingTask = document.getElementById("remaining-task");
const completedButtonsLen = completedButtons.length;

remainingTask.innerText = completedButtonsLen;

for (const completedButton of completedButtons) {
  completedButton.addEventListener("click", function (event) {
    alert("Board Updated Successfully");
    const remainingTasks = document.getElementById("remaining-task");
    const completedTasks = document.getElementById("completed-task");
    const remainingTasksLen = parseInt(remainingTasks.innerText);
    const completedTasksLen = parseInt(completedTasks.innerText);
    const tasksLen = remainingTasksLen - 1;
    const completedLen = completedTasksLen + 1;
    completedTaskFunc(remainingTasks, completedTasks, tasksLen, completedLen);
    addedHistory(event.target);
  });
}

function completedTaskFunc(
  remainingTasks,
  completedTasks,
  remaining,
  completed
) {
  if (remaining !== 0) {
    remainingTasks.innerText = remaining;
    completedTasks.innerText = completed;
    event.target.setAttribute("disabled", true);
    event.target.classList.remove(
      "active:scale-95",
      "bg-bgColor",
      "hover:bg-blue-800"
    );
    event.target.classList.add("bg-slate-500");
  } else {
    alert("Congrates!!! You have completed all the current task");
    remainingTasks.innerText = remaining;
    completedTasks.innerText = completed;
    event.target.setAttribute("disabled", true);
    event.target.classList.remove(
      "active:scale-95",
      "bg-bgColor",
      "hover:bg-blue-800"
    );
    event.target.classList.add("bg-slate-500");
  }
}

function addedHistory(currentButton) {
  const historyContainer = document.getElementById("history-container");
  const currentTaskCart = currentButton.parentNode.previousElementSibling;
  const cartTitleElement = currentTaskCart.children[1];
  const cartTitle = cartTitleElement.innerText;
  const newHistoryElm = document.createElement("div");
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  newHistoryElm.innerHTML = `
 <p class="item bg-blue-50 p-3 text-gray-600 rounded-lg">
    You have completed the Task ${cartTitle} at ${currentTime}
  </p>
 `;
  historyContainer.appendChild(newHistoryElm);
}

// clearing history
const historyBtn = document.getElementById("clear-history");
historyBtn.addEventListener("click", function () {
  const historyContainer = document.getElementById("history-container");
  historyContainer.innerHTML = "";
});

// displaying today's date
const dateTitle = document.getElementById("today's-date");
const date = new Date();
const currentDate = date.toDateString();
dateTitle.innerText = currentDate;

// changing background color
const themeButton = document.getElementById("theme-btn");
themeButton.addEventListener("click", function () {
  const body = document.getElementById("body");
  const hexCharacters = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  const charsLength = hexCharacters.length;
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    let randomPosition = Math.floor(Math.random() * charsLength);
    hexColor += hexCharacters[randomPosition];
  }
  body.style.backgroundColor = hexColor;
});

// traversing blog page
const traversing = document.getElementById("traversing-blogPage");
traversing.addEventListener("click", function () {
  window.location.href = "blog.html";
});
