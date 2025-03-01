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
