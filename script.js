const display = document.getElementById('passwordDisplay');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

function generatePassword() {
    let length = +lengthEl.value; // Convert to number
    let characters = lowerChars;
    let password = "";

    if (uppercaseEl.checked) characters += upperChars;
    if (numbersEl.checked) characters += numberChars;
    if (symbolsEl.checked) characters += symbolChars;

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    display.textContent = password;
}

// Copy to clipboard functionality
copyBtn.addEventListener('click', () => {
    const password = display.textContent;
    if (!password) return;
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!');
});

generateBtn.addEventListener('click', generatePassword);

// Initialize with one password
generatePassword();