document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(taskText, isCompleted = false) {
    const taskList = isCompleted ? document.getElementById('completed-task-list') : document.getElementById('incomplete-task-list');

    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    const taskActions = document.createElement('div');
    taskActions.className = 'task-actions';

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'edit-btn';

    editBtn.addEventListener('click', function() {
        const newTaskText = prompt('Edit your task:', taskSpan.textContent);
        if (newTaskText) {
            taskSpan.textContent = newTaskText;
        }
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';

    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });

    const completeCheckbox = document.createElement('input');
    completeCheckbox.type = 'checkbox';
    completeCheckbox.className = 'complete-checkbox';
    completeCheckbox.checked = isCompleted;

    completeCheckbox.addEventListener('change', function() {
        taskList.removeChild(taskItem);
        addTask(taskSpan.textContent, completeCheckbox.checked);
    });

    taskActions.appendChild(completeCheckbox);
    taskActions.appendChild(editBtn);
    taskActions.appendChild(deleteBtn);

    taskItem.appendChild(taskSpan);
    taskItem.appendChild(taskActions);
    taskList.appendChild(taskItem);
}

document.getElementById('show-completed-btn').addEventListener('click', function() {
    document.getElementById('completed-task-list').style.display = 'block';
    document.getElementById('completed-header').style.display = 'block';
    document.getElementById('incomplete-task-list').style.display = 'none';
    document.getElementById('incomplete-header').style.display = 'none';
});

document.getElementById('show-incomplete-btn').addEventListener('click', function() {
    document.getElementById('incomplete-task-list').style.display = 'block';
    document.getElementById('incomplete-header').style.display = 'block';
    document.getElementById('completed-task-list').style.display = 'none';
    document.getElementById('completed-header').style.display = 'none';
});
