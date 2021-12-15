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

firstProject.projectItems.push(createTodoItem("Popup Modal when plus button is clicked"));
firstProject.projectItems.push(createTodoItem("new Project wiring"));
firstProject.projectItems.push(createTodoItem("add Todo Button"));
firstProject.projectItems.push(createTodoItem("project switching logic"));
firstProject.projectItems.push(createTodoItem("css to split up each todo item, space them out further"));
firstProject.projectItems.push(createTodoItem("Css to cross out when item is checked and completed"));

console.log(firstProject);
firstProject.projectItems.forEach(element => console.log(element)) 

domManip(firstProject);