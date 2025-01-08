// Seccion IA
const toggleButton = document.getElementById('toggleButton');
const blogContainer = document.querySelector('.blog-container');

toggleButton.addEventListener('click', () => {
    blogContainer.classList.toggle('visible');
    toggleButton.textContent = blogContainer.classList.contains('visible') 
        ? 'Menos blogs' 
        : 'Más blogs';
});
// Seccion Gamers
const toggle2Button = document.getElementById('toggle2Button');
const blog2Container = document.querySelector('.blog-container2');

toggle2Button.addEventListener('click', () => {
    blog2Container.classList.toggle('visible');
    toggle2Button.textContent = blog2Container.classList.contains('visible') 
        ? 'Menos blogs' 
        : 'Más blogs';
});

