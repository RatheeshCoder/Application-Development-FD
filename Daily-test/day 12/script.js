const selectElement = document.querySelector('.filter select');
const resultContainer = document.querySelector('.result');

function filterTasks() {
  const selectedOption = selectElement.value;
  const taskDivs = resultContainer.querySelectorAll('div[id^="task_"]');

  taskDivs.forEach(taskDiv => {
    const taskId = taskDiv.id;

    if (selectedOption === 'All') {
      taskDiv.style.display = 'block';
    }
    else if (taskId.includes(selectedOption.slice(-1))) {
      taskDiv.style.display = 'block';
    }
    else {
      taskDiv.style.display = 'none';
    }
  });
}

selectElement.addEventListener('change', filterTasks);

filterTasks();