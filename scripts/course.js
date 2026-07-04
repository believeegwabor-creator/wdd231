// ===============================
// Course Array
// ===============================

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to web development.',
        technology: ['HTML', 'CSS'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Programming with functions.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Programming with classes.',
        technology: ['C#'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Dynamic websites with JavaScript.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Frontend Web Development.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    }
];

// ===============================
// HTML Elements
// ===============================

const courseContainer = document.querySelector("#courses");
const creditDisplay = document.querySelector("#credits");

const allButton = document.querySelector("#all");
const wddButton = document.querySelector("#wdd");
const cseButton = document.querySelector("#cse");

// ===============================
// Display Courses
// ===============================

function displayCourses(courseList) {

    courseContainer.innerHTML = "";

    courseList.forEach(course => {

        const card = document.createElement("div");

        card.classList.add("course-card");

        if (course.completed) {
            card.classList.add("completed");
        } else {
            card.classList.add("not-completed");
        }

        card.innerHTML = `
            <h3>${course.subject} ${course.number}</h3>
            <p>${course.title}</p>
            <p><strong>${course.credits}</strong> Credits</p>
        `;

        courseContainer.appendChild(card);

    });

    const totalCredits = courseList.reduce(
        (total, course) => total + course.credits,
        0
    );

    creditDisplay.textContent = `Total Credits: ${totalCredits}`;

}

// ===============================
// Buttons
// ===============================

allButton.addEventListener("click", () => {
    displayCourses(courses);
});

wddButton.addEventListener("click", () => {

    const wddCourses = courses.filter(course => course.subject === "WDD");

    displayCourses(wddCourses);

});

cseButton.addEventListener("click", () => {

    const cseCourses = courses.filter(course => course.subject === "CSE");

    displayCourses(cseCourses);

});

// ===============================
// Initial Display
// ===============================

displayCourses(courses);