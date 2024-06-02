 // JavaScript code for handling smooth scrolling, contact form, and CV download
 document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('header nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

// Function to handle contact form submission
function sendMail() {
    const mailtoLink = "mailto:your-email@example.com?subject=Contact from Portfolio&body=Hello, I'd like to get in touch with you.";
    window.location.href = mailtoLink;
}

// Function to handle CV download
function downloadCV() {
    const link = document.createElement('a');
    link.href = 'Sharmila_CV.pdf'; // Replace with the actual path to your CV file
    link.download = 'Sharmila_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
 /* Global Styles */
 function scrollToAbout() {
    var aboutSection = document.getElementById('about');
    var yOffset = -200; // Adjust the offset as needed to control the scroll position

    if (aboutSection) {
        var y = aboutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
}
function scrollToServices() {
    var servicesSection = document.getElementById('services');
    var yOffset = -170; // Adjust the offset as needed to control the scroll position

    if (servicesSection) {
        var y = servicesSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
}
function scrollToSkills() {
    var skillsSection = document.getElementById('skills');
    var yOffset = -50; // Adjust the offset as needed to control the scroll position

    if (skillsSection) {
        var y = skillsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
}
function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    var yOffset = -150;
}
// Send Email

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Collect the form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Send the email using EmailJS
    emailjs.send('service_blzc5ps', 'template_7ql80cs', formData)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Your message has been sent successfully!');
        }, function(error) {
            console.log('FAILED...', error);
            alert('There was an error sending your message. Please try again later.');
        });
});