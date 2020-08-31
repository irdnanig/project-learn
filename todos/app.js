const ul = document.querySelector('ul');
const add = document.querySelector('.add');
const search = document.querySelector('.search input');

const generateTemplate = todo => {
    const template = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    ul.innerHTML += template;
};


add.addEventListener('submit', e=> {
    e.preventDefault();
    const todo = add.add.value.trim();
    generateTemplate(todo);
    add.reset();
})


ul.addEventListener('click', e=> {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});





//keyup
const filterTodos = (term) => {
    Array.from(ul.children)
        .filter((todo => !todo.textContent.includes(term)))
        .forEach((todo) => todo.classList.add('filtered'));
     Array.from(ul.children)
        .filter((todo => todo.textContent.includes(term)))
        .forEach((todo) => todo.classList.remove('filtered'));    
};


search.addEventListener('keyup', () => {
    const term = search.value.trim();
    filterTodos(term);
});