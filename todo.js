const get_todos = () => {
    let todos = [];
    let todos_str = localStorage.getItem('todo');
    if(todos_str != null) {
        todos = JSON.parse(todos_str);
    }

    return todos;
}

const add = () => {
    let task = document.getElementById('task').value;

    let todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;
}

const remove = (element) => {
    let id = element.getAttribute('id');
    let todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;
}

const show = () => {
    let todos = get_todos();

    let html = '<ul>';
    for(let i = 0; i < todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i  + '">x</button></li>';
    }
    html += '</ul>';

    const container = document.getElementById('todos');
    container.innerHTML = html;

    let buttons = document.getElementsByClassName('remove');
    for (let i=0; i < buttons.length; i++) {
        const button = buttons[i];
        button.addEventListener('click', () => remove(button));
    }
}

document.getElementById('add').addEventListener('click', add);
show();
