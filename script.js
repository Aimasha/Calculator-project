const billAmount = document.querySelector('#bill-amount');
const tipPercent = document.querySelector('#tip-percent');
const numOfPeople = document.querySelector('#num-of-people');
const calcBtn = document.querySelector('#calc-btn');
const outputSpan = document.querySelector('#tip');
const bottomSec = document.querySelector('.bottom-section');
const each = document.querySelector('#each');

bottomSec.style.display = "none";
each.style.display = 'none';

function calculateTip() {
    if (numOfPeople.value ==='' || numOfPeople.value <= 1) {
        numOfPeople.value = 1;
        each.style.display = "none";
    } else if (numOfPeople.value > 1) {
        each.style.display = "block";
    }
    
    if ( billAmount.value === '' || tipPercent.value === 0) {
        alert('Please enter values');
        return;
    }
    let tipAmount = (billAmount.value * tipPercent.value) / numOfPeople.value;

    outputSpan.innerText = tipAmount.toFixed(2); 
    bottomSec.style.display = 'block';  
}

calcBtn.addEventListener('click', calculateTip);