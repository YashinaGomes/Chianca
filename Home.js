document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtn = document.getElementById('dropdown-btn');
    const dropdownOptions = document.getElementById('dropdown-options');

    dropdownBtn.addEventListener('click', function() {
        if (dropdownOptions.style.display === 'none' || dropdownOptions.style.display === '') {
            dropdownOptions.style.display = 'block';
        } else {
            dropdownOptions.style.display = 'none';
        }
    });

    // Fechar o dropdown quando clicar fora dele
    document.addEventListener('click', function(event) {
        if (!dropdownBtn.contains(event.target) && !dropdownOptions.contains(event.target)) {
            dropdownOptions.style.display = 'none';
        }
    });
});
