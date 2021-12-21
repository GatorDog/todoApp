function populateProjectList (projectArray) {
    let dropdownList = document.getElementById("projectDropdownList")

    projectArray.forEach((project) => {

        let projectItem = document.createElement("div")
        projectItem.className = "projectItem";
        projectItem.innerHTML = project.title;

        dropdownList.appendChild(projectItem);

    })

    const addProject = document.createElement("div")
    addProject.id = "addProject";
    addProject.innerHTML = "Add Project"
    dropdownList.appendChild(addProject)

    // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
addProject.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 
}

export default populateProjectList