const $ = document;

const $task = $.querySelector("#task");
const $btnAdd = $.querySelector("#add");
let count = 1;

$task.addEventListener("keydown", () => {
  if (event.key === "Enter") {
    if ($task.value !== "") {
      const tasks = []; // array donde se guardan las tareas
      const $tasks = $.querySelector("#tasks");

      tasks.push({ id: count, name: $task.value.trim() });

      const $li = $.createElement("li");
      $li.innerHTML = `<p class="taskId"> ${count} </p>  <p class="taskName"> ${$task.value.trim()} </p>  <button class="btnDelete">-</button>`;

      $tasks.appendChild($li);
      console.log($task.value.trim());
      console.log(tasks);

      const $btnDelete = $li.querySelector("button");
      $btnDelete.addEventListener("click", () => {
        $tasks.removeChild($li);
      });

      count++;
      $task.value = "";
    }
  }
});
