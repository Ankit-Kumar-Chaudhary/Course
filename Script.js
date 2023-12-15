function showSection(sectionId) {
    const sections = ['home-section', 'course-section', 'about-section', 'blog-section', 'contact-section', 'login-section'];

    sections.forEach(section => {
        const element = document.getElementById(section);
        if (section === sectionId) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });

    // Toggle the class to show/hide the mobile navigation links
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

function toggleDarkMode() {
    const body = document.body;
    const isDarkMode = body.classList.toggle('dark-mode');

    // You can customize styles based on dark mode
    if (isDarkMode) {
        body.style.backgroundColor = '#333';
    } else {
        body.style.backgroundColor = '#f5f5f5';
    }
}

function changeBackgroundImage(input) {
    const slider = document.getElementById('slider');
    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        slider.style.background = `url('${e.target.result}') center/cover`;
    };

    reader.readAsDataURL(file);
}


