function clearPlaceholder(input) {
    input.setAttribute('data-placeholder', input.getAttribute('placeholder'));
    input.setAttribute('placeholder', '');
}

function restorePlaceholder(input) {
    input.setAttribute('placeholder', input.getAttribute('data-placeholder'));
    input.removeAttribute('data-placeholder');
}