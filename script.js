// script.js

// Functional logic demonstrating scope, parameters, return values, and animation triggers

// Global variable (not recommended generally, but shown here for demonstration)
let globalCounter = 0;

/**
 * Function to calculate sum of two numbers (demonstrates parameters and return values)
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function sum(a, b) {
    return a + b;
}

/**
 * Function to toggle animation on the box 
 * Demonstrates local scope and triggers CSS animation
 */
function toggleAnimation() {
    // Local variable scoped to this function only
    const box = document.getElementById('animateBox');

    // Toggle 'active' class (triggers transition)
    box.classList.toggle('active');

    // Toggle bounce animation class
    if (box.classList.contains('bounce')) {
        box.classList.remove('bounce');
    } else {
        box.classList.add('bounce');
    }

    // Update global counter each time animation toggled
    globalCounter++;

    // Calculate a sum (just for the demo)
    const result = sum(globalCounter, 10);

    // Show result inside the result area
    const resultArea = document.getElementById('resultArea');
    resultArea.textContent = `Animation toggled ${globalCounter} time(s). Sum with 10 = ${result}`;
}

// Event listener to trigger animation on button click
document.getElementById('startAnimation').addEventListener('click', toggleAnimation);
