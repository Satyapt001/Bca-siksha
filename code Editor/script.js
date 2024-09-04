document.addEventListener('DOMContentLoaded', () => {
    const questionText = document.getElementById('question-text');
    const codeBlock = document.getElementById('code-block');
    const languageLabel = document.getElementById('language');
    const editButton = document.getElementById('edit-btn');
    const copyButton = document.getElementById('copy-btn');
    const modeSwitch = document.getElementById('mode-switch');
    const searchInput = document.getElementById('search-input');
    const clearBtn = document.getElementById('clear-btn');
    const searchResultsContainer = document.getElementById('search-results');
    const body = document.body;

    let programs = [];
    let allResults = [];
    let currentProgram = null;
    let visibleCount = 5;

    // Fetch JSON data
    const fetchData = async () => {
        try {
            const response = await fetch('programs.json');
            programs = await response.json();
            allResults = programs;
            renderResults(allResults); // Initial render
            if (programs.length > 0) {
                renderProgram(programs[0]); // Render the first program initially
            }
        } catch (error) {
            console.error('Error loading the programs data:', error);
        }
    };

    // Render the selected program
    function renderProgram(program) {
        languageLabel.innerText = program.preferred_language || 'Language';
        questionText.innerText = `Q. ${program.question || 'No question available'}`;
        // Display code from URL
        if (program.code_url) {
            fetch(program.code_url)
                .then(response => response.text())
                .then(code => {
                    codeBlock.innerText = code || 'No code available';
                })
                .catch(error => {
                    console.error('Error loading code from URL:', error);
                    codeBlock.innerText = 'Error loading code';
                });
        } else {
            codeBlock.innerText = 'No code URL available';
        }
        currentProgram = program;
    }

    // Handle search functionality
    function handleSearch(query) {
        const lowerCaseQuery = query.toLowerCase();
        const filteredResults = allResults.filter(program =>
            (program.question && program.question.toLowerCase().includes(lowerCaseQuery)) ||
            (program.code_url && program.code_url.toLowerCase().includes(lowerCaseQuery)) ||
            (program.tags && program.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery)))
        );

        renderResults(filteredResults);
        searchResultsContainer.style.display = query ? 'block' : 'none';
    }

    // Display search results
    function renderResults(results) {
        searchResultsContainer.innerHTML = '';
        results.slice(0, visibleCount).forEach(result => {
            const resultDiv = document.createElement('div');
            resultDiv.className = 'search-result';
            resultDiv.innerHTML = `
                <h3>${result.preferred_language || 'Unknown Language'}: ${result.question || 'No Question'}</h3>
                <button data-id="${result.id}" class="view-btn">View</button>
            `;
            searchResultsContainer.appendChild(resultDiv);
        });
    }

    // Show a selected program and clear search results
    function showProgram(id) {
        const selectedProgram = programs.find(program => program.id === id);
        if (selectedProgram) {
            renderProgram(selectedProgram);
            searchResultsContainer.style.display = 'none'; // Hide search results
            searchInput.value = ''; // Clear the search input
            clearBtn.style.display = 'none'; // Hide the clear button
        }
    }

    // Show or hide the clear button based on input value
    function updateClearBtnVisibility() {
        clearBtn.style.display = searchInput.value ? 'block' : 'none';
    }

    // Event listeners
    searchInput.addEventListener('input', (event) => {
        handleSearch(event.target.value);
        updateClearBtnVisibility();
    });

    clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        updateClearBtnVisibility();
        searchResultsContainer.style.display = 'none'; // Hide results when clearing
    });

    searchResultsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('view-btn')) {
            const id = parseInt(event.target.getAttribute('data-id'), 10);
            showProgram(id);
        }
    });

    document.addEventListener('click', (event) => {
        if (!searchInput.contains(event.target) && !searchResultsContainer.contains(event.target) && !clearBtn.contains(event.target)) {
            searchResultsContainer.style.display = 'none'; // Hide results if click is outside
        }
    });

    copyButton.addEventListener('click', () => {
        if (currentProgram) {
            navigator.clipboard.writeText(currentProgram.code || '').then(() => {
                alert('Code copied to clipboard!');
            });
        }
    });

    editButton.addEventListener('click', () => {
        if (codeBlock.isContentEditable) {
            codeBlock.contentEditable = "false";
            editButton.innerText = 'Edit';
        } else {
            codeBlock.contentEditable = "true";
            editButton.innerText = 'Save';
        }
    });

    modeSwitch.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            modeSwitch.innerText = '☀️';
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            modeSwitch.innerText = '🌙';
        }
    });

    // Fetch and initialize data
    fetchData();
});
