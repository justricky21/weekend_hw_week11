document.addEventListener("DOMContentLoaded", () =>{
    const newUniqueForm = document.querySelector('#new-unique-form');
    newUniqueForm.addEventListener('submit', handleNewUniqueFormSubmit);

    const clearUniqueListButton = document.querySelector('#clear-all');
    clearUniqueListButton.addEventListener('click', handleClearAllClick);
})

const handleNewUniqueFormSubmit = function(event){
    event.preventDefault();

    const unique = createUnique(event.target);
    const uniqueList = document.querySelector('#unique-list');
    uniqueList.appendChild(unique);

    event.target.reset();
}

const createUnique = function (form) {
    const unique = document.createElement('li');
    unique.classList.add('unique');

    const name = document.createElement('h3');
    name.textContent = form.name.value;
    unique.appendChild(name);

    const branch = document.createElement('h4');
    branch.textContent = form.branch.value;
    unique.appendChild(branch);

    const power = document.createElement('p');
    power.textContent = form.power.value;
    unique.appendChild(power);

    return unique;
}

const handleClearAllClick = function (event) {
    const uniqueList = document.querySelector('#unique-list');
    uniqueList.innerHTML = '';
}

