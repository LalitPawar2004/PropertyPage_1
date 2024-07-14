// // navbar
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


ScrollReveal().reveal(".contact__image img", {
    ...scrollRevealOption,
    origin: "left",
});

const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
});


// contact form
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const fname = document.getElementById('fname').value.trim();
    const lname = document.getElementById('lname').value.trim();
    const country = document.getElementById('country').value.trim();
    const subject = document.getElementById('subject').value.trim();

    // Simple validation
    if (!fname || !lname || !country || !subject) {
        alert('Please fill in all fields.');
        return;
    }

    // Normally, here you would send the data to the server
    // For demonstration, we will just log it to the console
    console.log('Form submitted:', { fname, lname, country, subject });

    // Clear the form fields
    document.getElementById('contactForm').reset();
	setTimeout(() => {
        alert('Thank you for your submission!');
    }, 100); 
})