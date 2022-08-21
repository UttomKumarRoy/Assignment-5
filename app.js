 function addList(btn, name) {
     const list = document.querySelector('#list');
     const data = document.getElementById(name).innerText;
     const li = document.createElement('li');
     li.innerHTML = `${data}`;
     let numb = list.childNodes.length;
     if (numb >= 6) {
         alert("You can not select more than 5 players. ")
     } else {
         list.appendChild(li);
     }
     document.getElementById(btn).setAttribute('disabled', true);
 }

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