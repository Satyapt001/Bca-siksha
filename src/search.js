// Sample data for demonstration (similar to what you might have in your system)
const data = [
    { 
        "id": 1, 
        "question": "Write a program to reverse a string.", 
        "solution": `def reverse_string(s):\n    return s[::-1]\n\ns = "hello"\nprint(reverse_string(s))`, 
        "tags": "string, reverse", 
        "path": "http://127.0.0.1:5500/code%20Editor/codeViewer.html", 
        "language": "Python" 
    },
    { 
        "id": 2, 
        "question": "Write a program to find the factorial of a number.", 
        "solution": `def factorial(n):\n    if n == 0:\n        return 1\n    else:\n        return n * factorial(n-1)\n\nn = 5\nprint(factorial(n))`, 
        "tags": "math, factorial", 
        "path": "python/math/factorial.py", 
        "language": "Python" 
    },
    // Add more items as needed...
];

// Initialize Lunr.js
const idx = lunr(function () {
    this.ref('id');
    this.field('question');
    this.field('solution');
    this.field('tags');
    this.field('path');
    this.field('language');

    data.forEach(function (doc) {
        this.add(doc);
    }, this);
});

const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

// Listen for input in the search bar
searchInput.addEventListener('input', function() {
    const query = searchInput.value.trim();
    searchResults.innerHTML = '';

    if (query) {
        const results = idx.search(query);
        displayResults(results);
    }
});

// Function to display search results
function displayResults(results) {
    if (results.length > 0) {
        results.forEach(result => {
            const item = data.find(d => d.id == result.ref);
            const li = document.createElement('li');
            li.classList.add('search-result-item');

            const question = highlightText(item.question, searchInput.value);
            const solutionPreview = highlightText(item.solution.split('\n').slice(0, 3).join('\n') + '...', searchInput.value);

            li.innerHTML = `
                <h3>${question}</h3>
                <p><strong>Path:</strong> ${item.path}</p>
                <p><strong>Language:</strong> ${item.language}</p>
                <div class="solution-preview">${solutionPreview}</div>
            `;

            // Redirect to code editor on click
            li.addEventListener('click', () => {
                window.location.href = `codeViewer.html?file=${item.path}`;
            });

            searchResults.appendChild(li);
        });
    } else {
        searchResults.innerHTML = '<li>No results found</li>';
    }
}

// Function to highlight matched text
function highlightText(text, term) {
    const regex = new RegExp(`(${term})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
}

