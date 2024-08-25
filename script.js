const alfabet = 'abcdefghijklmnopqrstuvwxyz';

function encrypt(text, shift) {
    let result = '';
    for (let letter of text) {
        if (alfabet.includes(letter)) {
            let shiftPos = (alfabet.indexOf(letter) + shift) % alfabet.length;
            result += alfabet[shiftPos];
        } else {
            result += letter;
        }
    }
    return result;
}

function decrypt(text, shift) {
    let result = '';
    for (let letter of text) {
        if (alfabet.includes(letter)) {
            let shiftPos = (alfabet.indexOf(letter) - shift + alfabet.length) % alfabet.length;
            result += alfabet[shiftPos];
        } else {
            result += letter;
        }
    }
    return result;
}

document.getElementById('encrypt-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const direction = document.getElementById('direction').value;
    const text = document.getElementById('text').value.toLowerCase();
    const shift = parseInt(document.getElementById('shift').value);

    let result;
    if (direction === 'encode') {
        result = encrypt(text, shift);
    } else if (direction === 'ontcijfer') {
        result = decrypt(text, shift);
    }

    document.getElementById('result').textContent = result;
});
