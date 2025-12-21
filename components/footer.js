// Footer component - shared across all pages
function loadFooter() {
    const footer = document.querySelector('footer');
    if (footer) {
        footer.innerHTML = `
            <div class="container">
                <p>&copy; ${new Date().getFullYear()}. All rights reserved.</p>
                <p>Contact: <a href="mailto:aliaksei.kotsikau@gmail.com">aliaksei.kotsikau@gmail.com</a></p>
            </div>
        `;
    }
}

// Load footer when DOM is ready
document.addEventListener('DOMContentLoaded', loadFooter);
