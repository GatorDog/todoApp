import createProject from './createProject.js'
import projectTodoStructurer from './projectTodoStructurer.js'



const allProjects = (() => {
    const list = [];
    const addProject = (project) => {
        list.push(project);
    };

    return {list, addProject};
})();


function newLinkedProject(projectTitle, projectDesc) {
    let project = createProject(projectTitle, projectDesc);
    let link = projectTodoStructurer(project);
    allProjects.addProject(project);
    return link
}

let saveProject = document.getElementById("projectSaveButton")
saveProject.addEventListener("click", () => {
    let newProjectTitle = document.getElementById("projectTitleInput")
    let newProjectDesc = document.getElementById("projectDescInput")

    newLinkedProject(newProjectTitle.value, newProjectDesc.value);


})

let firstProject = newLinkedProject("firstProject");


firstProject.projectItems.push(createTodoItem("new Project wiring"));
firstProject.projectItems.push(createTodoItem("project switching logic"));
firstProject.projectItems.push(createTodoItem("Css to cross out when item is checked and completed"));
