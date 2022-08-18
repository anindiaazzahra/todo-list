const input = document.querySelector(".input-task");
const searchTask = document.querySelector(".search-btn");
const addTask = document.querySelector(".add-task");
const tasks = document.querySelector(".tasks");
let taskItem = [];

// add task button and search button disabled
input.addEventListener('keyup', () => {
    if (input.value.trim() !== 0) {
        addTask.classList.add("active");
        searchTask.classList.add("active");
    } else {
        addTask.classList.remove("active");
        searchTask.classList.remove("active");
    }
} );


// add new task
addTask.addEventListener('click', () => {
    if (input.value.trim() !== 0) {
        // cant input the same task
        if (taskItem.includes(input.value)) {
            alert("You already have the same task");
        }   else {
            const newTask = document.createElement("div");
            newTask.classList.add("task");
            newTask.innerHTML = `
            <p> ${input.value} </p>
            <div class="task-btn">
                <i class="fa-solid fa-pen-to-square"></i>
                <i class="fa-solid fa-check"></i>
                <i class="fa-solid fa-xmark"></i>
            </div>`

            // add task to array
            taskItem.push(input.value);
            console.log(taskItem);
            
        
            tasks.appendChild(newTask);
            input.value = "";
        }

    } else {
        alert("Please enter a task");
    }

} );


// edit task
tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains("fa-pen-to-square")) {
        const task = e.target.parentElement.parentElement;
        const p = task.querySelector("p");
        const input = document.createElement("input");
        input.classList.add("edit-task");
        input.type = "text";
        input.placeholder = "Press ENTER to save";
        input.value = p.innerText;
        p.innerText = "";
        task.appendChild(input);
        input.focus();
        input.addEventListener('keyup', (e) => {
            if (e.keyCode === 13) {
                p.innerText = input.value;
                input.remove();
            }
        } );
    }
} );


// delete task
tasks.addEventListener('click', (e) => {

    if (e.target.classList.contains("fa-xmark")) {
        e.target.parentElement.parentElement.remove();
        
        const p = e.target.parentElement.parentElement.querySelector("p");
        console.log(p.innerText);

    }
} );


// task completed
tasks.addEventListener('click', (e) => {

    if (e.target.classList.contains("fa-check")) {
        e.target.parentElement.parentElement.classList.toggle("completed");
    }
} );