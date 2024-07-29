document.addEventListener('DOMContentLoaded', () => {
    const students = [];

    const studentForm = document.getElementById('student-form');
    const studentTableBody = document.getElementById('student-table-body');
    const formErrors = document.getElementById('form-errors');
    
    const filterName = document.getElementById('filterName');
    const filterFaculty = document.getElementById('filterFaculty');
    const filterStartYear = document.getElementById('filterStartYear');
    const filterEndYear = document.getElementById('filterEndYear');

    const sortFIO = document.getElementById('sortFIO');
    const sortFaculty = document.getElementById('sortFaculty');
    const sortBirthDate = document.getElementById('sortBirthDate');
    const sortStartYear = document.getElementById('sortStartYear');

    studentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const middleName = document.getElementById('middleName').value.trim();
        const birthDate = document.getElementById('birthDate').valueAsDate;
        const startYear = parseInt(document.getElementById('startYear').value.trim());
        const faculty = document.getElementById('faculty').value.trim();
        
        formErrors.textContent = '';

        if (!firstName || !lastName || !middleName || !birthDate || !startYear || !faculty) {
            formErrors.textContent = 'Все поля обязательны для заполнения.';
            return;
        }

        const currentYear = new Date().getFullYear();
        if (birthDate < new Date('1900-01-01') || birthDate > new Date()) {
            formErrors.textContent = 'Дата рождения должна быть в диапазоне от 01.01.1900 до текущей даты.';
            return;
        }

        if (startYear < 2000 || startYear > currentYear) {
            formErrors.textContent = 'Год начала обучения должен быть в диапазоне от 2000 до текущего года.';
            return;
        }

        const newStudent = { firstName, lastName, middleName, birthDate, startYear, faculty };
        students.push(newStudent);

        studentForm.reset();
        renderTable();
    });

    const renderTable = () => {
        const filters = {
            name: filterName.value.trim().toLowerCase(),
            faculty: filterFaculty.value.trim().toLowerCase(),
            startYear: filterStartYear.value.trim(),
            endYear: filterEndYear.value.trim(),
        };

        const filteredStudents = students.filter(student => {
            const fullName = `${student.lastName} ${student.firstName} ${student.middleName}`.toLowerCase();
            const birthDate = new Date(student.birthDate);
            const age = new Date().getFullYear() - birthDate.getFullYear();
            const endYear = student.startYear + 4;
            const currentYear = new Date().getFullYear();
            const course = currentYear > endYear ? 'закончил' : `${Math.min(currentYear - student.startYear + 1, 4)} курс`;

            return (filters.name === '' || fullName.includes(filters.name))
                && (filters.faculty === '' || student.faculty.toLowerCase().includes(filters.faculty))
                && (filters.startYear === '' || student.startYear === parseInt(filters.startYear))
                && (filters.endYear === '' || endYear === parseInt(filters.endYear));
        });

        studentTableBody.innerHTML = '';

        filteredStudents.forEach(student => {
            const birthDate = new Date(student.birthDate);
            const age = new Date().getFullYear() - birthDate.getFullYear();
            const endYear = student.startYear + 4;
            const currentYear = new Date().getFullYear();
            const course = currentYear > endYear ? 'закончил' : `${Math.min(currentYear - student.startYear + 1, 4)} курс`;

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${student.lastName} ${student.firstName} ${student.middleName}</td>
                <td>${student.faculty}</td>
                <td>${birthDate.toLocaleDateString()} (${age} лет)</td>
                <td>${student.startYear}-${endYear} (${course})</td>
            `;
            studentTableBody.appendChild(row);
        });
    };

    const sortTable = (key, asc = true) => {
        students.sort((a, b) => {
            if (key === 'FIO') {
                const fullNameA = `${a.lastName} ${a.firstName} ${a.middleName}`.toLowerCase();
                const fullNameB = `${b.lastName} ${b.firstName} ${b.middleName}`.toLowerCase();
                return asc ? fullNameA.localeCompare(fullNameB) : fullNameB.localeCompare(fullNameA);
            } else if (key === 'faculty') {
                return asc ? a.faculty.localeCompare(b.faculty) : b.faculty.localeCompare(a.faculty);
            } else if (key === 'birthDate') {
                return asc ? new Date(a.birthDate) - new Date(b.birthDate) : new Date(b.birthDate) - new Date(a.birthDate);
            } else if (key === 'startYear') {
                return asc ? a.startYear - b.startYear : b.startYear - a.startYear;
            }
        });
        renderTable();
    };

    filterName.addEventListener('input', renderTable);
    filterFaculty.addEventListener('input', renderTable);
    filterStartYear.addEventListener('input', renderTable);
    filterEndYear.addEventListener('input', renderTable);

    sortFIO.addEventListener('click', () => sortTable('FIO'));
    sortFaculty.addEventListener('click', () => sortTable('faculty'));
    sortBirthDate.addEventListener('click', () => sortTable('birthDate'));
    sortStartYear.addEventListener('click', () => sortTable('startYear'));
});