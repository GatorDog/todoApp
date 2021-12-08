import createProject from './createProject.js'
import createTodoItem from './createTodoItem.js'
import projectTodoStructurer from './projectTodoStructurer.js'
import domManip from './domManip.js'


function newProject(projectTitle) {
    let project = createProject(projectTitle)
    let link = projectTodoStructurer(project);

    return link
}

let firstProject = newProject("firstProject");

firstProject.projectItems.push(createTodoItem("firstItem"));
firstProject.projectItems.push(createTodoItem("secondItem"))

console.log(firstProject);
firstProject.projectItems.forEach(element => console.log(element)) 

domManip(firstProject);