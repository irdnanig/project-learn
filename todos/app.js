const ul = document.querySelector('ul');
const trash = document.querySelector('.delete');
const add = document.querySelector('.add');

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

