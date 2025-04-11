// Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all carousels
    const carousels = document.querySelectorAll('.carousel');
    
    carousels.forEach(carousel => {
        const items = carousel.querySelector('.carousel-items');
        const prevBtn = carousel.querySelector('.prev');
        const nextBtn = carousel.querySelector('.next');
        
        if (!items || !prevBtn || !nextBtn) return;
        
        let currentSlide = 0;
        const slides = items.children;
        const totalSlides = slides.length;
        
        // Skip if no slides
        if (totalSlides === 0) return;
        
        function showSlide(n) {
            currentSlide = (n + totalSlides) % totalSlides;
            items.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
        
        // Add event listeners to buttons
        prevBtn.addEventListener('click', () => {
            showSlide(currentSlide - 1);
        });
        
        nextBtn.addEventListener('click', () => {
            showSlide(currentSlide + 1);
        });
        
        // Auto-rotate carousel
        let interval = setInterval(() => {
            showSlide(currentSlide + 1);
        }, 5000);
        
        // Pause auto-rotation when hovering over carousel
        carousel.addEventListener('mouseenter', () => {
            clearInterval(interval);
        });
        
        carousel.addEventListener('mouseleave', () => {
            interval = setInterval(() => {
                showSlide(currentSlide + 1);
            }, 5000);
        });
        
        // Initialize the first slide
        showSlide(0);
    });
    
    // Blog Filters
    const filterBtns = document.querySelectorAll('.filter-btn');
    const blogCards = document.querySelectorAll('.blog-card');
    
    if (filterBtns.length > 0 && blogCards.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                
                // Add active class to clicked button
                btn.classList.add('active');
                
                const filter = btn.getAttribute('data-filter');
                
                // Show all cards if filter is 'all', otherwise filter by project
                blogCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-project') === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Image Modal for Gallery
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const modal = document.getElementById('imageModal');
    
    if (galleryItems.length > 0 && modal) {
        const modalImg = document.getElementById('modalImage');
        const closeModal = document.querySelector('.close-modal');
        
        galleryItems.forEach(img => {
            img.addEventListener('click', function() {
                modal.style.display = 'block';
                modalImg.src = this.src;
            });
        });
        
        // Close modal when clicking the X
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
        });
        
        // Close modal when clicking outside the image
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
        
        // Close modal with Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && modal.style.display === 'block') {
                modal.style.display = 'none';
            }
        });
    }
});