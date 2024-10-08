// Selected player functionality
function selectPlayer(params) {
    const playerName = params.parentNode.childNodes[3].innerText;

    document.getElementById('player-total-money').classList.remove('btn-disabled');


    const ol = document.getElementById('olList');
    
    if(ol.children.length === 5) {
        // alert('Maximum 5 players allowed');
        document.getElementById('player_modal').showModal();
        return;
    }

    params.parentNode.childNodes[7].classList.add('btn-disabled'); 

    const li = document.createElement('li');
    li.innerText = playerName;
    ol.appendChild(li);    
}


// Input field validation functionality
function inputFieldValidation(value) {

    if(isNaN(value) || value <= 0) {
        // alert('Invalid price. Please enter a valid price.');
        document.getElementById('calculate_modal').showModal();
        return true;
    }
    return false;
}


// Make input field empty functionality
function makeInputFieldEmpty(inputFiledName) {
    document.getElementById(inputFiledName).value = '';
}


// Player Total Expenses Calculations
function playerTotalMoney(params) {
    const perPlayerPrice = parseInt(document.getElementById('player-price').value);

    const validation =  inputFieldValidation(perPlayerPrice);

    makeInputFieldEmpty('player-price');

    if(validation) {
        return;
    }

    const ol = document.getElementById('olList').children.length;

    const totalMoney = perPlayerPrice * ol;

    document.getElementById('player-total-expenses').innerText = totalMoney;

    params.parentNode.children[3].classList.add('btn-disabled')
    document.getElementById('total-calculations').classList.remove('btn-disabled');
}


// All players, coach and managers final money calculation
function totalCalculations() {
    const managerPrice = parseInt(document.getElementById('manager-price').value);
    const coachPrice = parseInt(document.getElementById('coach-price').value);

    const validation1 =  inputFieldValidation(managerPrice);
    const validation2 = inputFieldValidation(coachPrice);

    makeInputFieldEmpty('manager-price');
    makeInputFieldEmpty('coach-price');

    if(validation1 || validation2) {
        return;
    }

    const playerPrice = parseInt(document.getElementById('player-total-expenses').innerText);

    const totalExpenses = managerPrice + coachPrice + playerPrice;
    document.getElementById('final-price').innerText = totalExpenses;
    document.getElementById('total-calculations').classList.add('btn-disabled');
}
