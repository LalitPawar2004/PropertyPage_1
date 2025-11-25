// Navbar scroll effect
    window.addEventListener('scroll', function() {
      const navbar = document.getElementById('myTopnav');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }); 

    // Back to top button
    const backToTopButton = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
      } else {
        backToTopButton.classList.remove('show');
      }
    });
    
    backToTopButton.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
          });
        }
      });
    });

    // Mobile navbar toggle
    function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }

    // Contact form submission
    document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault();
      
      const submitBtn = document.getElementById('submitBtn');
      const spinner = document.getElementById('submitSpinner');
      
      // Show loading state
      submitBtn.disabled = true;
      spinner.classList.remove('d-none');
      
      // Simulate form submission
      setTimeout(function() {
        // Reset form
        document.getElementById('contactForm').reset();
        
        // Hide loading state
        submitBtn.disabled = false;
        spinner.classList.add('d-none');
        
        // Show success message
        alert('Thank you for your inquiry! We will contact you shortly.');
      }, 1500);
    });

    // Rating system
    const ratings = document.querySelectorAll('.rating');
    let ratingValues = {};

    ratings.forEach(rating => {
      const stars = rating.querySelectorAll('.star');
      const type = rating.getAttribute('data-type');

      stars.forEach(star => {
        star.addEventListener('click', () => {
          const value = star.getAttribute('data-value');
          ratingValues[type] = value;

          stars.forEach(s => {
            if (s.getAttribute('data-value') <= value) {
              s.classList.add('active');
              s.style.color = 'gold';
            } else {
              s.classList.remove('active');
              s.style.color = '#ddd';
            }
          });

          calculateAverage();
        });

        // Hover effect
        star.addEventListener('mouseover', () => {
          const value = star.getAttribute('data-value');
          stars.forEach(s => {
            if (s.getAttribute('data-value') <= value) {
              s.style.color = 'gold';
            }
          });
        });

        star.addEventListener('mouseout', () => {
          stars.forEach(s => {
            if (!s.classList.contains('active')) {
              s.style.color = '#ddd';
            }
          });
        });
      });
    });

    function calculateAverage() {
      if (Object.keys(ratingValues).length === 4) {
        const average = Object.values(ratingValues).reduce((acc, val) => acc + Number(val), 0) / 4;
        document.getElementById('averageRating').textContent = `Average Rating: ${average.toFixed(2)}/5`;
      } else {
        document.getElementById('averageRating').textContent = '';
      }
    }

    document.getElementById('submitReview').addEventListener('click', () => {
      const reviewText = document.querySelector('textarea').value;

      if (Object.keys(ratingValues).length < 4) {
        alert('Please rate all categories!');
      } else if (!reviewText.trim()) {
        alert('Please write a review!');
      } else {
        alert('Rating and review submitted successfully!');
        // Reset ratings and review text
        ratingValues = {};
        document.querySelector('textarea').value = '';
        ratings.forEach(rating => {
          const stars = rating.querySelectorAll('.star');
          stars.forEach(s => {
            s.classList.remove('active');
            s.style.color = '#ddd';
          });
        });
        document.getElementById('averageRating').textContent = '';
      }
    });

    // Initialize carousel with autoplay
    const carousel = new bootstrap.Carousel(document.getElementById('carouselExampleIndicators'), {
      interval: 5000,
      wrap: true
    });
