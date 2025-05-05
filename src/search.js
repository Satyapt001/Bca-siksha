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
    {
        "id": 1,
        "preferred_language": "C",
        "question": "Question 1 for C",
        "code_url": "http://example.com/source_code/C/program_1.txt",
        "tags": [
            "programming",
            "c"
        ]
    },
    {
        "id": 2,
        "preferred_language": "C",
        "question": "Question 2 for C",
        "code_url": "http://example.com/source_code/C/program_2.txt",
        "tags": [
            "programming",
            "c"
        ]
    },
    {
        "id": 3,
        "preferred_language": "C",
        "question": "Question 3 for C",
        "code_url": "http://example.com/source_code/C/program_3.txt",
        "tags": [
            "programming",
            "c"
        ]
    },
    {
        "id": 4,
        "preferred_language": "C",
        "question": "Question 4 for C",
        "code_url": "http://example.com/source_code/C/program_4.txt",
        "tags": [
            "programming",
            "c"
        ]
    },
    {
        "id": 5,
        "preferred_language": "C",
        "question": "Question 5 for C",
        "code_url": "http://example.com/source_code/C/program_5.txt",
        "tags": [
            "programming",
            "c"
        ]
    },
    {
        "id": 6,
        "preferred_language": "C",
        "question": "Question 6 for C",
        "code_url": "http://example.com/source_code/C/program_6.txt",
        "tags": [
            "programming",
            "c"
        ]
    },
    {
        "id": 7,
        "preferred_language": "C",
        "question": "Question 7 for C",
        "code_url": "http://example.com/source_code/C/program_7.txt",
        "tags": [
            "programming",
            "c"
        ]
    },
    {
        "id": 8,
        "preferred_language": "C",
        "question": "Question 8 for C",
        "code_url": "http://example.com/source_code/C/program_8.txt",
        "tags": [
            "programming",
            "c"
        ]
    },
    {
        "id": 9,
        "preferred_language": "C",
        "question": "Question 9 for C",
        "code_url": "http://example.com/source_code/C/program_9.txt",
        "tags": [
            "programming",
            "c"
        ]
    },
    {
        "id": 10,
        "preferred_language": "C",
        "question": "Question 10 for C",
        "code_url": "http://example.com/source_code/C/program_10.txt",
        "tags": [
            "programming",
            "c"
        ]
    },
    {
        "id": 11,
        "preferred_language": "C",
        "question": "Question 11 for C",
        "code_url": "http://example.com/source_code/C/program_11.txt",
        "tags": [
            "programming",
            "c"
        ]
    },
    {
        "id": 12,
        "preferred_language": "C",
        "question": "Question 12 for C",
        "code_url": "http://example.com/source_code/C/program_12.txt",
        "tags": [
            "programming",
            "c"
        ]
    },
    {
        "id": 13,
        "preferred_language": "C",
        "question": "Question 13 for C",
        "code_url": "http://example.com/source_code/C/program_13.txt",
        "tags": [
            "programming",
            "c"
        ]
    },
    {
        "id": 14,
        "preferred_language": "C",
        "question": "Question 14 for C",
        "code_url": "http://example.com/source_code/C/program_14.txt",
        "tags": [
            "programming",
            "c"
        ]
    },
    {
        "id": 15,
        "preferred_language": "C",
        "question": "Question 15 for C",
        "code_url": "http://example.com/source_code/C/program_15.txt",
        "tags": [
            "programming",
            "c"
        ]
    },
    {
        "id": 16,
        "preferred_language": "C",
        "question": "Question 16 for C",
        "code_url": "http://example.com/source_code/C/program_16.txt",
        "tags": [
            "programming",
            "c"
        ]
    },
    {
        "id": 17,
        "preferred_language": "C",
        "question": "Question 17 for C",
        "code_url": "http://example.com/source_code/C/program_17.txt",
        "tags": [
            "programming",
            "c"
        ]
    },
    {
        "id": 18,
        "preferred_language": "C",
        "question": "Question 18 for C",
        "code_url": "http://example.com/source_code/C/program_18.txt",
        "tags": [
            "programming",
            "c"
        ]
    },
    {
        "id": 19,
        "preferred_language": "C",
        "question": "Question 19 for C",
        "code_url": "http://example.com/source_code/C/program_19.txt",
        "tags": [
            "programming",
            "c"
        ]
    },
    {
        "id": 20,
        "preferred_language": "C",
        "question": "Question 20 for C",
        "code_url": "http://example.com/source_code/C/program_20.txt",
        "tags": [
            "programming",
            "c"
        ]
    },
    {
        "id": 21,
        "preferred_language": "C++",
        "question": "Question 1 for C++",
        "code_url": "http://example.com/source_code/C++/program_1.txt",
        "tags": [
            "programming",
            "c++"
        ]
    },
    {
        "id": 22,
        "preferred_language": "C++",
        "question": "Question 2 for C++",
        "code_url": "http://example.com/source_code/C++/program_2.txt",
        "tags": [
            "programming",
            "c++"
        ]
    },
    {
        "id": 23,
        "preferred_language": "C++",
        "question": "Question 3 for C++",
        "code_url": "http://example.com/source_code/C++/program_3.txt",
        "tags": [
            "programming",
            "c++"
        ]
    },
    {
        "id": 24,
        "preferred_language": "C++",
        "question": "Question 4 for C++",
        "code_url": "http://example.com/source_code/C++/program_4.txt",
        "tags": [
            "programming",
            "c++"
        ]
    },
    {
        "id": 25,
        "preferred_language": "C++",
        "question": "Question 5 for C++",
        "code_url": "http://example.com/source_code/C++/program_5.txt",
        "tags": [
            "programming",
            "c++"
        ]
    },
    {
        "id": 26,
        "preferred_language": "C++",
        "question": "Question 6 for C++",
        "code_url": "http://example.com/source_code/C++/program_6.txt",
        "tags": [
            "programming",
            "c++"
        ]
    },
    {
        "id": 27,
        "preferred_language": "C++",
        "question": "Question 7 for C++",
        "code_url": "http://example.com/source_code/C++/program_7.txt",
        "tags": [
            "programming",
            "c++"
        ]
    },
    {
        "id": 28,
        "preferred_language": "C++",
        "question": "Question 8 for C++",
        "code_url": "http://example.com/source_code/C++/program_8.txt",
        "tags": [
            "programming",
            "c++"
        ]
    },
    {
        "id": 29,
        "preferred_language": "C++",
        "question": "Question 9 for C++",
        "code_url": "http://example.com/source_code/C++/program_9.txt",
        "tags": [
            "programming",
            "c++"
        ]
    },
    {
        "id": 30,
        "preferred_language": "C++",
        "question": "Question 10 for C++",
        "code_url": "http://example.com/source_code/C++/program_10.txt",
        "tags": [
            "programming",
            "c++"
        ]
    },
    {
        "id": 31,
        "preferred_language": "C++",
        "question": "Question 11 for C++",
        "code_url": "http://example.com/source_code/C++/program_11.txt",
        "tags": [
            "programming",
            "c++"
        ]
    },
    {
        "id": 32,
        "preferred_language": "C++",
        "question": "Question 12 for C++",
        "code_url": "http://example.com/source_code/C++/program_12.txt",
        "tags": [
            "programming",
            "c++"
        ]
    },
    {
        "id": 33,
        "preferred_language": "C++",
        "question": "Question 13 for C++",
        "code_url": "http://example.com/source_code/C++/program_13.txt",
        "tags": [
            "programming",
            "c++"
        ]
    },
    {
        "id": 34,
        "preferred_language": "C++",
        "question": "Question 14 for C++",
        "code_url": "http://example.com/source_code/C++/program_14.txt",
        "tags": [
            "programming",
            "c++"
        ]
    },
    {
        "id": 35,
        "preferred_language": "C++",
        "question": "Question 15 for C++",
        "code_url": "http://example.com/source_code/C++/program_15.txt",
        "tags": [
            "programming",
            "c++"
        ]
    },
    {
        "id": 36,
        "preferred_language": "C++",
        "question": "Question 16 for C++",
        "code_url": "http://example.com/source_code/C++/program_16.txt",
        "tags": [
            "programming",
            "c++"
        ]
    },
    {
        "id": 37,
        "preferred_language": "C++",
        "question": "Question 17 for C++",
        "code_url": "http://example.com/source_code/C++/program_17.txt",
        "tags": [
            "programming",
            "c++"
        ]
    },
    {
        "id": 38,
        "preferred_language": "C++",
        "question": "Question 18 for C++",
        "code_url": "http://example.com/source_code/C++/program_18.txt",
        "tags": [
            "programming",
            "c++"
        ]
    },
    {
        "id": 39,
        "preferred_language": "C++",
        "question": "Question 19 for C++",
        "code_url": "http://example.com/source_code/C++/program_19.txt",
        "tags": [
            "programming",
            "c++"
        ]
    },
    {
        "id": 40,
        "preferred_language": "C++",
        "question": "Question 20 for C++",
        "code_url": "http://example.com/source_code/C++/program_20.txt",
        "tags": [
            "programming",
            "c++"
        ]
    },
    {
        "id": 41,
        "preferred_language": "Java",
        "question": "Question 1 for Java",
        "code_url": "http://example.com/source_code/Java/program_1.txt",
        "tags": [
            "programming",
            "java"
        ]
    },
    {
        "id": 42,
        "preferred_language": "Java",
        "question": "Question 2 for Java",
        "code_url": "http://example.com/source_code/Java/program_2.txt",
        "tags": [
            "programming",
            "java"
        ]
    },
    {
        "id": 43,
        "preferred_language": "Java",
        "question": "Question 3 for Java",
        "code_url": "http://example.com/source_code/Java/program_3.txt",
        "tags": [
            "programming",
            "java"
        ]
    },
    {
        "id": 44,
        "preferred_language": "Java",
        "question": "Question 4 for Java",
        "code_url": "http://example.com/source_code/Java/program_4.txt",
        "tags": [
            "programming",
            "java"
        ]
    },
    {
        "id": 45,
        "preferred_language": "Java",
        "question": "Question 5 for Java",
        "code_url": "http://example.com/source_code/Java/program_5.txt",
        "tags": [
            "programming",
            "java"
        ]
    },
    {
        "id": 46,
        "preferred_language": "Java",
        "question": "Question 6 for Java",
        "code_url": "http://example.com/source_code/Java/program_6.txt",
        "tags": [
            "programming",
            "java"
        ]
    },
    {
        "id": 47,
        "preferred_language": "Java",
        "question": "Question 7 for Java",
        "code_url": "http://example.com/source_code/Java/program_7.txt",
        "tags": [
            "programming",
            "java"
        ]
    },
    {
        "id": 48,
        "preferred_language": "Java",
        "question": "Question 8 for Java",
        "code_url": "http://example.com/source_code/Java/program_8.txt",
        "tags": [
            "programming",
            "java"
        ]
    },
    {
        "id": 49,
        "preferred_language": "Java",
        "question": "Question 9 for Java",
        "code_url": "http://example.com/source_code/Java/program_9.txt",
        "tags": [
            "programming",
            "java"
        ]
    },
    {
        "id": 50,
        "preferred_language": "Java",
        "question": "Question 10 for Java",
        "code_url": "http://example.com/source_code/Java/program_10.txt",
        "tags": [
            "programming",
            "java"
        ]
    },
    {
        "id": 51,
        "preferred_language": "Java",
        "question": "Question 11 for Java",
        "code_url": "http://example.com/source_code/Java/program_11.txt",
        "tags": [
            "programming",
            "java"
        ]
    },
    {
        "id": 52,
        "preferred_language": "Java",
        "question": "Question 12 for Java",
        "code_url": "http://example.com/source_code/Java/program_12.txt",
        "tags": [
            "programming",
            "java"
        ]
    },
    {
        "id": 53,
        "preferred_language": "Java",
        "question": "Question 13 for Java",
        "code_url": "http://example.com/source_code/Java/program_13.txt",
        "tags": [
            "programming",
            "java"
        ]
    },
    {
        "id": 54,
        "preferred_language": "Java",
        "question": "Question 14 for Java",
        "code_url": "http://example.com/source_code/Java/program_14.txt",
        "tags": [
            "programming",
            "java"
        ]
    },
    {
        "id": 55,
        "preferred_language": "Java",
        "question": "Question 15 for Java",
        "code_url": "http://example.com/source_code/Java/program_15.txt",
        "tags": [
            "programming",
            "java"
        ]
    },
    {
        "id": 56,
        "preferred_language": "Java",
        "question": "Question 16 for Java",
        "code_url": "http://example.com/source_code/Java/program_16.txt",
        "tags": [
            "programming",
            "java"
        ]
    },
    {
        "id": 57,
        "preferred_language": "Java",
        "question": "Question 17 for Java",
        "code_url": "http://example.com/source_code/Java/program_17.txt",
        "tags": [
            "programming",
            "java"
        ]
    },
    {
        "id": 58,
        "preferred_language": "Java",
        "question": "Question 18 for Java",
        "code_url": "http://example.com/source_code/Java/program_18.txt",
        "tags": [
            "programming",
            "java"
        ]
    },
    {
        "id": 59,
        "preferred_language": "Java",
        "question": "Question 19 for Java",
        "code_url": "http://example.com/source_code/Java/program_19.txt",
        "tags": [
            "programming",
            "java"
        ]
    },
    {
        "id": 60,
        "preferred_language": "Java",
        "question": "Question 20 for Java",
        "code_url": "http://example.com/source_code/Java/program_20.txt",
        "tags": [
            "programming",
            "java"
        ]
    },
    {
        "id": 61,
        "preferred_language": "Python",
        "question": "palindrome of a number",
        "code_url": "https://raw.githubusercontent.com/Satyapt001/Bca-siksha/4f1667679813b5fbf6e65565eff3960f34dc51c7/code%20Editor/code/python/palindrome.txt",
        "tags": [
            "programming",
            "python"
        ]
    },
    {
        "id": 62,
        "preferred_language": "Python",
        "question": "Write a menu driven program to convert the given temperature from Fahrenheit to Celsius and vice versa depending upon users choice.",
        "code_url": "https://raw.githubusercontent.com/Satyapt001/Bca-siksha/main/code%20Editor/code/python/convert%20temperature%20with%20menu.txt",
        "tags": [
            "programming",
            "python"
        ]
    },
    {
        "id": 63,
        "preferred_language": "Python",
        "question": "Write a Program to calculate total marks, percentage and grade of a student. Marks obtained in each of the three subjects are to be input by the user. Assign grades according to the following criteria: Grade A: Percentage >=80 Grade B: Percentage>=70 and <80 Grade C: Percentage>=60 and <70 Grade D: Percentage>=40 and <60 Grade E: Percentage<40",
        "code_url": "https://raw.githubusercontent.com/Satyapt001/Bca-siksha/main/code%20Editor/code/python/program%20to%20calculate%20total%20marks.txt",
        "tags": [
            "programming",
            "python"
        ]
    },
    {
        "id": 64,
        "preferred_language": "Python",
        "question": "Write a menu-driven program, using user-defined functions to find the area of rectangle,square, circle and triangle by accepting suitable input parameters from user.",
        "code_url": "https://raw.githubusercontent.com/Satyapt001/Bca-siksha/main/code%20Editor/code/python/Finding%20area.txt",
        "tags": [
            "programming",
            "python"
        ]
    },
    {
        "id": 65,
        "preferred_language": "Python",
        "question": "Write a Program to display the first n terms of Fibonacci series.",
        "code_url": "https://raw.githubusercontent.com/Satyapt001/Bca-siksha/main/code%20Editor/code/python/First%20N%20Fibonacci%20series.txt",
        "tags": [
            "programming",
            "python"
        ]
    },
    {
        "id": 66,
        "preferred_language": "Python",
        "question": "Write a Program to find factorial of the given number.",
        "code_url": "https://raw.githubusercontent.com/Satyapt001/Bca-siksha/main/code%20Editor/code/python/Factorial%20of%20a%20Number.txt",
        "tags": [
            "programming",
            "python"
        ]
    },
    {
        "id": 67,
        "preferred_language": "Python",
        "question": "Write a Program to find sum of the following series for n terms: 1 – 2/2! + 3/3! ---------- n/n!",
        "code_url": "https://raw.githubusercontent.com/Satyapt001/Bca-siksha/main/code%20Editor/code/python/sum%20of%20the%20series.txt",
        "tags": [
            "programming",
            "python"
        ]
    },
    {
        "id": 68,
        "preferred_language": "Python",
        "question": "Write a Program to calculate the sum and product of two compatible matrices.",
        "code_url": "https://raw.githubusercontent.com/Satyapt001/Bca-siksha/main/code%20Editor/code/python/sum%20and%20product%20of%20compatible%20matrices.txt",
        "tags": [
            "programming",
            "python"
        ]
    },
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

