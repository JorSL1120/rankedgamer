// Seccion controles
const toggleButton = document.getElementById('toggleButton');
const blogContainer = document.querySelector('.blog-container');

toggleButton.addEventListener('click', () => {
    blogContainer.classList.toggle('visible');
    toggleButton.textContent = blogContainer.classList.contains('visible') 
        ? 'Menos blogs' 
        : 'Más blogs';
});

// Seccion teclados
const toggle2Button = document.getElementById('toggle2Button');
const blog2Container = document.querySelector('.blog-container2');

toggle2Button.addEventListener('click', () => {
    blog2Container.classList.toggle('visible');
    toggle2Button.textContent = blog2Container.classList.contains('visible') 
        ? 'Menos blogs' 
        : 'Más blogs';
});

// Seccion streaming
const toggle3Button = document.getElementById('toggle3Button');
const blog3Container = document.querySelector('.blog-container3');

toggle3Button.addEventListener('click', () => {
    blog3Container.classList.toggle('visible');
    toggle3Button.textContent = blog3Container.classList.contains('visible') 
        ? 'Menos blogs' 
        : 'Más blogs';
});

// Seccion monitores
const toggle4Button = document.getElementById('toggle4Button');
const blog4Container = document.querySelector('.blog-container4');

toggle4Button.addEventListener('click', () => {
    blog4Container.classList.toggle('visible');
    toggle4Button.textContent = blog4Container.classList.contains('visible') 
        ? 'Menos blogs' 
        : 'Más blogs';
});

// Seccion mouse
const toggle5Button = document.getElementById('toggle5Button');
const blog5Container = document.querySelector('.blog-container5');

toggle5Button.addEventListener('click', () => {
    blog5Container.classList.toggle('visible');
    toggle5Button.textContent = blog5Container.classList.contains('visible') 
        ? 'Menos blogs' 
        : 'Más blogs';
});

// Seccion sillas
const toggle6Button = document.getElementById('toggle6Button');
const blog6Container = document.querySelector('.blog-container6');

toggle6Button.addEventListener('click', () => {
    blog6Container.classList.toggle('visible');
    toggle6Button.textContent = blog6Container.classList.contains('visible') 
        ? 'Menos blogs' 
        : 'Más blogs';
});

// Seccion audifonos
const toggle7Button = document.getElementById('toggle7Button');
const blog7Container = document.querySelector('.blog-container7');

toggle7Button.addEventListener('click', () => {
    blog7Container.classList.toggle('visible');
    toggle7Button.textContent = blog7Container.classList.contains('visible') 
        ? 'Menos blogs' 
        : 'Más blogs';
});

// Seccion accesorios
const toggle8Button = document.getElementById('toggle8Button');
const blog8Container = document.querySelector('.blog-container8');

toggle8Button.addEventListener('click', () => {
    blog8Container.classList.toggle('visible');
    toggle8Button.textContent = blog8Container.classList.contains('visible') 
        ? 'Menos blogs' 
        : 'Más blogs';
});

// Seccion consolas
const toggle9Button = document.getElementById('toggle9Button');
const blog9Container = document.querySelector('.blog-container9');

toggle9Button.addEventListener('click', () => {
    blog9Container.classList.toggle('visible');
    toggle9Button.textContent = blog9Container.classList.contains('visible') 
        ? 'Menos blogs' 
        : 'Más blogs';
});

// Seccion videojuegos
const toggle10Button = document.getElementById('toggle10Button');
const blog10Container = document.querySelector('.blog-container10');

toggle10Button.addEventListener('click', () => {
    blog10Container.classList.toggle('visible');
    toggle10Button.textContent = blog10Container.classList.contains('visible') 
        ? 'Menos blogs' 
        : 'Más blogs';
});