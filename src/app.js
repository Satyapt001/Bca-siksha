//drop down menu for semester section

document.addEventListener('DOMContentLoaded', function() {
    const accessButtons = document.querySelectorAll('.access-btn');
    accessButtons.forEach(button => {
        button.addEventListener('click', function() {
            const semesterContent = this.parentElement.querySelector('.semester-content');
            const subjectList = semesterContent.querySelector('.subject-list');
            if (subjectList.style.display === 'none' || subjectList.style.display === '') {
                subjectList.style.display = 'block';
            } else {
                subjectList.style.display = 'none';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const accessButtons = document.querySelectorAll('.access-btn');
    accessButtons.forEach(button => {
        button.addEventListener('click', function() {
            const semester = this.parentElement;
            semester.classList.toggle('open');
        });
    });
});
