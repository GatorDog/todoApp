function domManip(project) {


    project.projectItems.forEach(todoItem => {

        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.classList.add('checkListCheckbox');


        let todoDOM = document.createElement('li')
        todoDOM.innerHTML = todoItem.title;
        todoDOM.classList.add('checkListItem');

        let todoList = document.getElementById('todoList')

        todoList.appendChild(checkbox);
        todoList.appendChild(todoDOM)
    })

    let projectList = document.getElementById('projectList');
    projectList.innerHTML = project.project.title;
    

}

export default domManip