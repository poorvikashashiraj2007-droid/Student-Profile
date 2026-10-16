// Load student information from JSON

fetch("student.json")
    .then(response => response.json())

    .then(data => {

        // Profile

        document.getElementById("studentName")
            .textContent = data.name;

        document.getElementById("studentCourse")
            .textContent = data.course;

        document.getElementById("studentAbout")
            .textContent = data.about;

        document.getElementById("profilePhoto")
            .src = data.photo;


        // Education

        const educationContainer =
            document.getElementById("educationContainer");

        data.education.forEach(education => {

            const card =
                document.createElement("div");

            card.className = "education-card";

            card.innerHTML = `
                <h3>${education.degree}</h3>

                <p>
                    <strong>College:</strong>
                    ${education.college}
                </p>

                <p>
                    <strong>Year:</strong>
                    ${education.year}
                </p>

                <p>
                    <strong>Percentage:</strong>
                    ${education.percentage}
                </p>
            `;

            educationContainer.appendChild(card);
        });


        // Skills

        const skillsContainer =
            document.getElementById("skillsContainer");

        data.skills.forEach(skill => {

            const skillElement =
                document.createElement("div");

            skillElement.className = "skill";

            skillElement.textContent = skill;

            skillsContainer.appendChild(skillElement);
        });


        // Contact

        document.getElementById("email")
            .textContent = data.contact.email;

        document.getElementById("phone")
            .textContent = data.contact.phone;

        document.getElementById("address")
            .textContent = data.contact.address;

    })

    .catch(error => {

        console.error(
            "Error loading student data:",
            error
        );

    });


// Button function

function showMessage() {

    alert(
        "Hello! Welcome to my Student Profile Website 😊"
    );

}