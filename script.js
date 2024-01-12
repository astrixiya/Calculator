function updateInfo(message) {
    //récuperer l'id et afficher le message en utilisant innerhtml
    var infoBox = document.getElementById('infoBox');
    infoBox.innerHTML = message;
    message == '' ? infoBox.style.display = 'none' : infoBox.style.display ='block';
}

function toggleCalculator(action) {
    var calculatorForm = document.getElementById('calculatorForm');
    
    // display or show en fonction de "action"
    if (action === 'apparaître') {
        calculatorForm.style.display = 'block';
    } else if (action === 'disparaître') {
        calculatorForm.style.display = 'none';
    }
}

document.getElementById('calculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // récupérer les valeurs du calculateur
    var operation = document.getElementById('operation').value;
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    // calcul en fonction de l'opération choisie
    var result;
    switch (operation) {
        case 'addition':
            result = num1 + num2;
            operation = '+';
            break;
        case 'soustraction':
            result = num1 - num2;
            operation = '-';break;
        case 'multiplication':
            result = num1 * num2;
            operation = '*';
            break;
        case 'division':
            result = num1 / num2;
            operation = '/'; break;
        default:
            result = 'Error';
    }

    // affichage du résultat
    alert( num1 + ' ' + operation + ' ' + num2 + ' = ' + result);
});