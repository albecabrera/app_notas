// This file contains JavaScript code for handling client-side interactions and dynamic content loading for the student grades application. 

document.addEventListener('DOMContentLoaded', () => {
    const gradeForm = document.getElementById('grade-entry-form');
    const gradeList = document.getElementById('grade-list');

    gradeForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(gradeForm);
        const studentName = formData.get('studentName');
        const grade = formData.get('grade');

        if (validateGrade(grade)) {
            addGradeToList(studentName, grade);
            gradeForm.reset();
        } else {
            alert('Please enter a valid grade between 1 and 6.');
        }
    });

    function validateGrade(grade) {
        const gradeNumber = parseInt(grade, 10);
        return gradeNumber >= 1 && gradeNumber <= 6;
    }

    function addGradeToList(studentName, grade) {
        const listItem = document.createElement('li');
        listItem.textContent = `${studentName}: ${grade}`;
        gradeList.appendChild(listItem);
    }
});