const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
    
    if (input.value !== '') {
        

        const li =document.createElement('li');
        li.textContent = input.value;

        const deletebutton = document.createElement('button');
        deletebutton.textContent = '❌';
        deletebutton.setAttribute('aria-label', 'Remove ${input.value}');

        deletebutton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();
        });

        li.append(deletebutton);
        list.append(li);

        input.value = '';
    }

    input.focus();
});