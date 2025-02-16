// Mobile Menu Toggle
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('active');
});

// Meta Tags Generator
function generateMetaTags() {
    const title = document.getElementById('meta-title').value;
    const description = document.getElementById('meta-description').value;
    const keywords = document.getElementById('meta-keywords').value;

    const output = `
        <!-- Generated Meta Tags -->
        <meta name="title" content="${title}">
        <meta name="description" content="${description}">
        <meta name="keywords" content="${keywords}">
        <meta name="robots" content="index, follow">
    `;

    document.getElementById('meta-output').innerHTML = 
        `<pre>${output}</pre><button onclick="copyCode('meta-output')">Copy</button>`;
}

// Add similar functions for other generators

// Utility Functions
function copyCode(elementId) {
    const text = document.getElementById(elementId).querySelector('pre').innerText;
    navigator.clipboard.writeText(text);
}

function scrollToTools() {
    document.querySelector('.tools-container').scrollIntoView({ behavior: 'smooth' });
}