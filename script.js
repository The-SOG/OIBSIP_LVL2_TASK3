document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value;

    if (taskText.trim() === '') {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.getElementById('pending-tasks');
    const li = document.createElement('li');
    li.innerHTML = `${taskText} <span class="timestamp">(${new Date().toLocaleString()})</span>`;
    
    // Create complete button
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.addEventListener('click', () => completeTask(li));
    
    // Create edit button
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'edit';
    editBtn.addEventListener('click', () => editTask(li));

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete';
    deleteBtn.addEventListener('click', () => deleteTask(li));

    li.appendChild(completeBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = '';
}

function completeTask(li) {
    const completedTasks = document.getElementById('completed-tasks');
    li.classList.add('completed');
    completedTasks.appendChild(li);
    li.querySelector('.complete').remove();
}

function editTask(li) {
    const taskText = li.firstChild.textContent;
    const taskInput = document.getElementById('task-input');
    taskInput.value = taskText;

    // Remove the task from pending
    deleteTask(li);
}

function deleteTask(li) {
    li.remove();
}
