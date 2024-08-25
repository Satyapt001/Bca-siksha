document.querySelectorAll('.praise-btn').forEach((button, index) => {
    let praiseCountElement = document.getElementById(`praise-number-${index + 1}`);
    let praiseCount = parseInt(praiseCountElement.innerText);
    let praiseTextElement = document.querySelectorAll('.praise-count')[index];
    let praised = false;

    button.addEventListener('click', function() {
        if (!praised) {
            praiseCount++;
            praised = true;
            button.classList.add('praised');
            button.innerText = 'Praised';
            praiseTextElement.innerHTML = `You and <span id="praise-number-${index + 1}">${praiseCount}</span> others praised "${praiseTextElement.getAttribute('data-name')}"`;
        } else {
            praiseCount--;
            praised = false;
            button.classList.remove('praised');
            button.innerText = 'Praise';
            if (praiseCount === 100) { // Assuming original count was 100 without "You"
                praiseTextElement.innerHTML = `<span id="praise-number-${index + 1}">${praiseCount}</span> others praised "${praiseTextElement.getAttribute('data-name')}"`;
            } else {
                praiseTextElement.innerHTML = `You and <span id="praise-number-${index + 1}">${praiseCount}</span> others praised "${praiseTextElement.getAttribute('data-name')}"`;
            }
        }
    });
});
