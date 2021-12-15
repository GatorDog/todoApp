import { format, startOfToday } from 'date-fns'

function domManip(project) {


    project.projectItems.forEach(todoItem => {

        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.classList.add('checkListCheckbox');


        let todoDOM = document.createElement('li')
        todoDOM.innerHTML = todoItem.title;
        todoDOM.classList.add('checkListItem');

        let dueDate = document.createElement('input')
        dueDate.type = 'date';
        dueDate.classList.add('dueDate');
        dueDate.value = todoItem.dueDate;

        let todoList = document.getElementById('todoList')

        todoList.appendChild(checkbox);
        todoList.appendChild(todoDOM);
        todoList.appendChild(dueDate);
    })

    let projectList = document.getElementById('projectList');
    projectList.innerHTML = project.project.title;
    

}

export default domManip