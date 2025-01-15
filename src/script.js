// script.js

// Function to display all students initially
function displayStudents(students) {
  const studentListSection = document.getElementById('student-list');
  studentListSection.innerHTML = '';  // Clear existing content

  students.forEach(student => {
    const studentCard = document.createElement('div');
    studentCard.classList.add('student-card');
    
    studentCard.innerHTML = `
      <h3>${student.name}</h3>
    `;
    
    // Add click event to open the modal with student details
    studentCard.onclick = function() {
      openModal(student);
    };
    
    studentListSection.appendChild(studentCard);
  });
}

// Function to filter and search for a student
function searchStudent() {
  const searchValue = document.getElementById('search').value.toLowerCase();
  
  const filteredStudents = studentsData.filter(student =>
    student.name.toLowerCase().includes(searchValue)
  );

  displayStudents(filteredStudents);  // Display filtered students
}

// Function to open the modal and show student details
function openModal(student) {
  document.getElementById('modal-student-name').textContent = student.name;
  document.getElementById('modal-student-new').textContent = student.new;
  document.getElementById('modal-student-old').textContent = student.old;
  document.getElementById('modal-student-juz').textContent = student.juz;
  document.getElementById('modal-student-present').textContent = student.present;
  document.getElementById('modal-student-stars').textContent = student.stars;

  document.getElementById('student-modal').style.display = 'block';
}

// Function to close the modal
function closeModal() {
  document.getElementById('student-modal').style.display = 'none';
}

// Initial load: Display all students when the page is first loaded
window.onload = function() {
  displayStudents(studentsData);
};
