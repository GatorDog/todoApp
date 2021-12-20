function hamburgerEvent() {
    const hamburger = document.getElementById("hamburgerMenu");
    const projectDropdownList = document.getElementById("projectDropdownList");

    hamburger.addEventListener("click", () => {
        if (projectDropdownList.style.display === "block") {
            projectDropdownList.style.display = "none";
        }
        else {
            projectDropdownList.style.display = "block";
        }
    })

}

export default hamburgerEvent