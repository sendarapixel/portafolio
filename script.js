// Función para obtener una cookie
function getCookie(name) {
    let value = `; ${document.cookie}`;
    let parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// Función para establecer una cookie
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Función para cambiar el idioma
function changeLanguage(lang) {
    // Establecer la cookie con el idioma seleccionado
    setCookie('language', lang, 30); // Cookie que durará 30 días
    location.reload(); 
}

function loadContent(key) {
    let lang = getCookie('language') || 'en'; // Idioma predeterminado

    fetch('idiomas.json') // Verifica que la ruta sea correcta y que tengas un servidor local
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if (data[lang] && data[lang][key]) {
            // Solo actualiza el HTML si la clave y el idioma están presentes
            document.getElementById(key).innerHTML = data[lang][key];
        }
        // No se realiza ninguna acción si la clave no se encuentra
    })
    .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
    });

}
// Función para cargar el contenido inicial al cargar la página
window.onload = function() {
    // Cargar los textos iniciales
    loadContent('btnlang'); // Ejemplo: Cargar el saludo al inicio
    loadContent('langs1');
    loadContent('langs2');
    loadContent('iam');
    loadContent('hello');
    loadContent('hello2');
    loadContent('hello3');
    loadContent('hello4');
    loadContent('aboutg');
    loadContent('abouts');
    loadContent('Skills');
    loadContent('Home');
    loadContent('Portfolio');
    loadContent('Services');
    loadContent('Contact');
    loadContent('skills2');
    loadContent('skilldesc');
    loadContent('porfdesc');
    loadContent('porfoliotittle');
    loadContent('developer');
    loadContent('seo');
    loadContent('disenoui');
    loadContent('designers');
    loadContent('comunity');
    loadContent('supports');
}
