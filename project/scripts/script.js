document.addEventListener("DOMContentLoaded", function() {
    
    // Footer data
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;
    document.getElementById("lastModified").textContent = "Last Updated: " + document.lastModified;

    // Menu hamburguer
    const hamburger = document.getElementById("hamburger");
    const nav = document.querySelector("nav");

    hamburger.addEventListener("click", function() {
        nav.classList.toggle("active");
    });
    
    // Define the project data
    const projects = [
        { title: "Project 1", category: "web", imageUrl: "https://kleytonlsilva.com/wp-content/uploads/2021/10/sunset.jpg" },
        { title: "Project 2", category: "web", imageUrl: "https://kleytonlsilva.com/wp-content/uploads/2021/10/cello.jpg" },
        { title: "Project 3", category: "digital", imageUrl: "https://kleytonlsilva.com/wp-content/uploads/2021/10/Illustration.jpg" },
        { title: "Project 4", category: "digital", imageUrl: "https://kleytonlsilva.com/wp-content/uploads/2021/10/nature.jpg" },
        { title: "Project 5", category: "other", imageUrl: "https://kleytonlsilva.com/wp-content/uploads/2021/10/Archimatix.jpg" },
        { title: "Project 6", category: "other", imageUrl: "https://kleytonlsilva.com/wp-content/uploads/2021/10/take-me.jpg" }
    ];

    // Function to display projects
    function displayProjects(filter = "all") {
        const gallery = document.getElementById("projectGallery");
        gallery.innerHTML = "";

        const filteredProjects = projects.filter(project => {
            return filter === "all" || project.category === filter;
        });

        filteredProjects.forEach(project => {
            const figure = document.createElement("figure");
            const img = document.createElement("img");
            img.src = project.imageUrl;
            img.alt = project.title;
            img.loading = "lazy";
            const figcaption = document.createElement("figcaption");
            figcaption.textContent = project.title;

            figure.appendChild(img);
            figure.appendChild(figcaption);
            gallery.appendChild(figure);
        });
    }

    // Add event listeners to filter links
    document.querySelectorAll("main nav ul li a").forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const filter = link.getAttribute("data-filter");
            displayProjects(filter);
        });
    });

    // Display all projects initially
    displayProjects();
});

    // Form submission for contact form
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            if (contactForm.checkValidity()) {
                alert("Message sent successfully!");
                contactForm.reset();
            }
        });

     // Initialize message count in local storage if not set
        if (localStorage.getItem("messageCount") === null) {
            localStorage.setItem("messageCount", "0");
        }

     // Increment message count on form submission
        contactForm.addEventListener("submit", function() {
            let messageCount = parseInt(localStorage.getItem("messageCount"));
            localStorage.setItem("messageCount", (messageCount + 1).toString());
        });
    }