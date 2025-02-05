const startProjectLink = document.getElementById('startyourproject');
const sendButton = document.querySelector('.startit2 a');
const startitSection = document.getElementById('startit');
const startit2Section = document.getElementById('startit2');

startitSection.style.display = 'none';
startit2Section.style.display = 'none';

// Show #startit when "Start Your Project" is clicked
startProjectLink.addEventListener('click', (event) => {
    event.preventDefault();
    startitSection.style.display = 'block'; 
    startit2Section.style.display = 'none'; 
});

// Show #startit2 when "Send" is clicked
sendButton.addEventListener('click', (event) => {
    event.preventDefault();
    startitSection.style.display = 'none'; 
    startit2Section.style.display = 'block'; 
});




