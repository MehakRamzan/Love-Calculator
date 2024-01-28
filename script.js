var bton = document.getElementById('btn');
var loveText = document.getElementById('love-text');
var lovePer = document.getElementById('love-per');
var inputFields = document.querySelectorAll('.input-field'); // Select all elements with class 'input-field'

var score = Math.random();
score = score * 100 + 1;
score = Math.floor(score) + "%";
lovePer.innerHTML = score;

bton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    var inputsValid = true;

    inputFields.forEach(function(inputField) {
        if (inputField.value === '') {
            inputsValid = false;
            return;
        }
    });

    if (!inputsValid) {
        alert("Invalid Entry");
    } else {
        loveText.style.display = "block";
        lovePer.style.display = "block";
    }
});