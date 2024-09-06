document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchBarContainer = document.querySelector('.search-bar-container');

    // Toggle focus mode when the input is focused
    searchInput.addEventListener('focus', () => {
        document.body.classList.add('focused');
        searchBarContainer.classList.add('focus-mode');
    });

    // Remove focus mode when clicking outside the search bar
    document.addEventListener('click', (event) => {
        if (!searchBarContainer.contains(event.target)) {
            document.body.classList.remove('focused');
            searchBarContainer.classList.remove('focus-mode');
        }
    });
});
