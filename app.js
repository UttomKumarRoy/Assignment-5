// Common Function for ordered list
function addList(btn, name) {
    const list = document.querySelector('#list');
    const data = document.getElementById(name).innerText;
    const li = document.createElement('li');
    li.innerHTML = data;
    let numb = list.childNodes.length;
    if (numb >= 6) {
        alert("You can not select more than 5 players. ")
    } else {
        list.appendChild(li);
    }
    document.getElementById(btn).setAttribute('disabled', true);
}

// Players add Event Listener
document.getElementById('messi-btn').addEventListener('click', function() {
    addList('messi-btn', 'messi-name');
});

document.getElementById('mbappe-btn').addEventListener('click', function() {
    addList('mbappe-btn', 'mbappe-name');
});

document.getElementById('neymar-btn').addEventListener('click', function() {
    addList('neymar-btn', 'neymar-name');
});

document.getElementById('renato-btn').addEventListener('click', function() {
    addList('renato-btn', 'renato-name');
});

document.getElementById('sergio-btn').addEventListener('click', function() {
    addList('sergio-btn', 'sergio-name');
});

document.getElementById('victor-btn').addEventListener('click', function() {
    addList('victor-btn', 'victor-name');
});

//Budget Calculation

document.getElementById('btn-calculate').addEventListener('click', function() {
    const players = document.getElementById('list').childNodes.length - 1;
    const costPerPlayer = parseFloat(document.getElementById('player-cost').value);
    if (isNaN(costPerPlayer)) {
        alert('Please enter a valid number');
        document.getElementById('player-cost').value = '';
    } else {
        const playersExpenses = players * costPerPlayer;
        document.getElementById('player-expenses').innerHTML = playersExpenses;
    }
})

// Total Calculation