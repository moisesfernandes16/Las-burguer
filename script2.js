const searchInput = document.getElementById('search');

searchInput.addEventListener('input', (event) => {
    const value = formatString(event.target.value);

    const items = document.querySelectorAll('.item, .itens')
    const noResults = document.getElementById('no_results')

    let hasResults = false

    items.forEach(item => {
        if (formatString(item.textContent).indexOf(value) !== -1) {
            item.style.display = 'flex';
            hasResults = true
        }
        else {
            item.style.display = "none";
        }
    })
    if (hasResults) {
        noResults.style.display = 'none';
    } else {
        noResults.style.display = "block";
    }
});


function formatString(value) {
    return value
        .toLowerCase() //e para deixar tudo minusculo
        .trim()// Para tirar os espaços
}