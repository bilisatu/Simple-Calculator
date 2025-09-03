const $ = (id) => document.getElementById(id);

const num1El = $("num1");
const num2El = $("num2");
const resultEl = $("result");
const addBtn = $("addBtn");
const clearBtn = $("clearBtn");

function parseNumber(value) {
    if (value === '' || value === null || value === undefined) return null;
    const n = Number(value);
    return Number.isFinite(n) ? n : null;
}

function showMessage(text, isError = false) {
    resultEl.textContent = text;
    resultEl.style.color = isError ? '#fecaca' : '#e2e8f0';
}

addBtn.addEventListener('click', () => {
    const a = parseNumber(num1El.value);
    const b = parseNumber(num2El.value);

    if (a === null || b === null) {
        showMessage('Please enter valid numbers in both fields.', true);
        return;
    }

    const sum = a + b;
    showMessage(`Result: ${a} + ${b} = ${sum}`);
});

clearBtn.addEventListener('click', () => {
    num1El.value = '';
    num2El.value = '';
    showMessage('Result will appear here');
    num1El.focus();
});