document.addEventListener('DOMContentLoaded', function() {
    const name = "Rajat Gupta.";
    const typedNameElement = document.getElementById('typed-name');
    let letterIndex = 0; 

    function typeEffect() {
        if (letterIndex < name.length) {
            typedNameElement.textContent += name.charAt(letterIndex);
            letterIndex++; 
            setTimeout(typeEffect, 100); // Speed of 100ms between letters 
        } else {
            // Optional: Remove the cursor after typing is done
            typedNameElement.textContent += " "; 
        }
    }

    // Start the typing effect
    typeEffect(); 
});
