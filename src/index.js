import createProject from './createProject.js'
import createTodoItem from './createTodoItem.js'
import projectTodoStructurer from './projectTodoStructurer.js'
import domManip from './domManip.js'
import hamburgerEvent from './hamburgerEvent.js'


const allProjects = (() => {
    const list = [];
    const addProject = (project) => {
        list.push(project);
    };

    return {list, addProject};
})();


function newLinkedProject(projectTitle) {
    let project = createProject(projectTitle);
    let link = projectTodoStructurer(project);
    allProjects.addProject(project);
    return link
}

let firstProject = newLinkedProject("firstProject");
let secondProject = newLinkedProject("secondProject");
let thirdProject = newLinkedProject("thirdProject");

firstProject.projectItems.push(createTodoItem("Mobile layout support"));
firstProject.projectItems.push(createTodoItem("Popup Modal when plus button is clicked"));
firstProject.projectItems.push(createTodoItem("new Project wiring"));
firstProject.projectItems.push(createTodoItem("add Todo Button"));
firstProject.projectItems.push(createTodoItem("project switching logic"));
firstProject.projectItems.push(createTodoItem("css to split up each todo item, space them out further"));
firstProject.projectItems.push(createTodoItem("Css to cross out when item is checked and completed"));

domManip(firstProject);
hamburgerEvent();