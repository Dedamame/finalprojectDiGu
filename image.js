const triggerImage = document.getElementById("triggerImage");
const axalipage = document.getElementById("axalipage");
const mainSections = document.querySelectorAll("main section");

triggerImage.addEventListener("click", () => {
    mainSections.forEach(section => {
        section.style.display = "none";  
    });

    axalipage.style.display = "block"; 
});