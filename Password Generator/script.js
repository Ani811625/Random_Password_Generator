document.addEventListener('DOMContentLoaded', function () {
    const generateBtn = document.getElementById('generateBtn');
    const copyBtn = document.getElementById('copyBtn');
    const passwordOutput = document.getElementById('passwordOutput');
    const passwordLengthInput = document.getElementById('passwordLength');
    const uppercaseCheckbox = document.getElementById('uppercase');
    const lowercaseCheckbox = document.getElementById('lowercase');
    const numbersCheckbox = document.getElementById('numbers');
    const symbolsCheckbox = document.getElementById('symbols');

    generateBtn.addEventListener('click', generatePassword);
    copyBtn.addEventListener('click', copyToClipboard);

    function generatePassword() {
        const length = parseInt(passwordLengthInput.value);
        const uppercase = uppercaseCheckbox.checked;
        const lowercase = lowercaseCheckbox.checked;
        const numbers = numbersCheckbox.checked;
        const symbols = symbolsCheckbox.checked;

        if (!length || (!uppercase && !lowercase && !numbers && !symbols)) {
            alert('Please select password length and at least one complexity option.');
            return;
        }

        const password = generateRandomPassword(length, uppercase, lowercase, numbers, symbols);
        passwordOutput.value = password;
    }

    function generateRandomPassword(length, uppercase, lowercase, numbers, symbols) {
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const numbersChars = '0123456789';
        const symbolsChars = '!@#$%^&*()_-+=<>?';

        let allowedChars = '';
        if (uppercase) allowedChars += uppercaseChars;
        if (lowercase) allowedChars += lowercaseChars;
        if (numbers) allowedChars += numbersChars;
        if (symbols) allowedChars += symbolsChars;

        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars.charAt(randomIndex);
        }

        return password;
    }

    function copyToClipboard() {
        passwordOutput.select();
        document.execCommand('copy');
        alert('Password copied to clipboard!');
    }
});
