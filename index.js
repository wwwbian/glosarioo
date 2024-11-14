function filterGlossary() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    const glossaryList = document.getElementById('glossary');
    const terms = glossaryList.querySelectorAll('li');
    let found = false;

    const existingMessage = document.getElementById('noResultsMessage');
    if (existingMessage) {
        existingMessage.remove();
    }

    terms.forEach(term => {
        const word = term.textContent.toLowerCase();
        
        if (word.includes(searchTerm) && searchTerm !== "") {
            term.style.display = 'flex';
            found = true;
        } else {
            term.style.display = 'none';
        }
    });

    if (!found && searchTerm !== "") {
        const message = document.createElement('li');
        message.id = 'noResultsMessage';
        message.textContent = 'No se encontraron resultados.';
        message.style.color = '#f44336'; 
        message.style.fontWeight = 'bold';
        message.style.listStyleType = 'none';
        glossaryList.appendChild(message);
    }
}

document.getElementById('searchInput').addEventListener('input', filterGlossary);

function showDefinition(element) {
    const word = element.innerText;
    const translation = element.getAttribute('data-translation');
    const definition = element.getAttribute('data-meaning');

    document.getElementById('modalWord').innerText = word;
    document.getElementById('modalTranslation').innerText = `Traducción: ${translation}`;
    document.getElementById('modalDefinition').innerText = definition;
    document.getElementById('definitionModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('definitionModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('definitionModal');
    if (event.target === modal) {
        closeModal();
    }
}
