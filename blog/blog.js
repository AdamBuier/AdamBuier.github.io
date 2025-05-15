document.addEventListener('DOMContentLoaded', () => {
    // Simulated database of blog posts
    const blogPosts = [
        {
            title: "Chippy NHRL April 2025 Recap",
            url: "/blog/April_NHRL_2025/",
            img: "/blog/April_NHRL_2025/img/AprilNHRLThumbnail.png",
            date: "2025-04-11",
            category: "Chippy"
        }
    ];

    // Sort blog posts by date (newest first)
    blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Get the blog grid container
    const blogGrid = document.getElementById('blog-grid');

    // Generate HTML for each blog post
    blogPosts.forEach(post => {
        const postElement = document.createElement('a');
        postElement.href = post.url;
        postElement.className = `blog-card blog-main`;
        postElement.setAttribute('data-category', post.category);
        postElement.innerHTML = `
            <img src="${post.img}" alt="${post.title}">
            <div class="content">
                <h3>${post.title}</h3>
                <p>${new Date(post.date).toLocaleDateString()}</p>
            </div>
        `;
        blogGrid.appendChild(postElement);
    });

    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const blogCards = document.querySelectorAll('.blog-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter blog cards
            blogCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});