let students = [

    {
        id: 1,
        name: "Chanchal Sharma",
        email: "chanchal@gmail.com",
        teach: "Java",
        learn: "UI/UX Design",
        experience: "Intermediate"
    },

    {
        id: 2,
        name: "Priya Patil",
        email: "priya@gmail.com",
        teach: "Python",
        learn: "JavaScript",
        experience: "Advanced"
    }

];
const form = document.getElementById("skillForm");

const studentContainer =
    document.getElementById("studentContainer");

const successMessage =
    document.getElementById("successMessage");

function displayStudents() {

    studentContainer.innerHTML = "";
    if (students.length === 0) {

        studentContainer.innerHTML = `
            <div class="empty-message">
                No students registered yet.
            </div>
        `;

        return;
    }

    students.forEach(function(student) {

        const card = document.createElement("div");

        card.className = "student-card";


        card.innerHTML = `

            <h3>${student.name}</h3>

            <p class="student-email">
                ${student.email}
            </p>

            <div class="skill-row">

                <span class="skill-label">
                    CAN TEACH
                </span>

                <div class="skill-value">
                    ${student.teach}
                </div>

            </div>


            <div class="skill-row">

                <span class="skill-label">
                    WANTS TO LEARN
                </span>

                <div class="skill-value">
                    ${student.learn}
                </div>

            </div>


            <div class="skill-row">

                <span class="skill-label">
                    EXPERIENCE
                </span>

                <div class="skill-value">
                    ${student.experience}
                </div>

            </div>


            <button
                class="delete-btn"
                onclick="deleteStudent(${student.id})">

                Delete Registration

            </button>

        `;


        studentContainer.appendChild(card);

    });

}

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const teach =
        document.getElementById("teach").value;

    const learn =
        document.getElementById("learn").value;

    const experience =
        document.getElementById("experience").value;

    const nameError =
        document.getElementById("nameError");

    const emailError =
        document.getElementById("emailError");

    const teachError =
        document.getElementById("teachError");

    const learnError =
        document.getElementById("learnError");

    const experienceError =
        document.getElementById("experienceError");

    nameError.textContent = "";
    emailError.textContent = "";
    teachError.textContent = "";
    learnError.textContent = "";
    experienceError.textContent = "";

    successMessage.innerHTML = "";

    let isValid = true;

    if (name === "") {

        nameError.textContent =
            "Name is required.";

        isValid = false;

    }
    else if (name.length < 3) {

        nameError.textContent =
            "Name must contain at least 3 characters.";

        isValid = false;

    }

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (email === "") {

        emailError.textContent =
            "Email is required.";

        isValid = false;

    }
    else if (!emailPattern.test(email)) {

        emailError.textContent =
            "Please enter a valid email address.";

        isValid = false;

    }

    if (teach === "") {

        teachError.textContent =
            "Please select a skill you can teach.";

        isValid = false;

    }

    if (learn === "") {

        learnError.textContent =
            "Please select a skill you want to learn.";

        isValid = false;

    }
    if (teach !== "" && learn !== "" && teach === learn) {

        learnError.textContent =
            "Teaching and learning skills cannot be the same.";

        isValid = false;

    }

    if (experience === "") {

        experienceError.textContent =
            "Please select your experience level.";

        isValid = false;

    }

    if (!isValid) {

        return;

    }

    const newStudent = {

        id: Date.now(),

        name: name,

        email: email,

        teach: teach,

        learn: learn,

        experience: experience

    };

    students.push(newStudent);

    const jsonData =
        JSON.stringify(students);


    console.log("JSON Data:");

    console.log(jsonData);

    successMessage.innerHTML = `

        <div class="success">

            Registration successful!
            Your skill profile has been added.

        </div>

    `;

    displayStudents();


  form.reset();


    document.getElementById("students")
        .scrollIntoView({
            behavior: "smooth"
        });

});

function deleteStudent(id) {

    students = students.filter(function(student) {

        return student.id !== id;

    });

    const jsonData =
        JSON.stringify(students);

    console.log("Updated JSON:");

    console.log(jsonData);

    displayStudents();

}

displayStudents();
