function domManip(project) {

    let projectDOM = document.createElement('div')

    project.projectItems.forEach(todoItem => {



        let todoDOM = document.createElement('li')
        todoDOM.innerHTML = todoItem.title;
        projectDOM.appendChild(todoDOM);

    })

    let todoList = document.getElementById('todoList')
    todoList.appendChild(projectDOM);
}

export default domManip