document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('searchForm');

    searchForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        const searchInput = document.querySelector('#searchForm input[name="search"]');
        const searchQuery = searchInput.value.trim();

        // Perform your search logic with the searchQuery
        console.log('Search query:', searchQuery);

        // Clear the input field after logging the search query
        searchInput.value = '';
    });
});