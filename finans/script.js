let btn = document.querySelector('.addition__btn');
let input1 = document.querySelector('.addition__name1');
let name = document.querySelector('.bl2__name');
let price = document.querySelector('.bl2__price');
let input2 = document.querySelector('.addition__name2');
let category = document.querySelector('.bl2__category');
let select = document.querySelector('.select');

let tbody = document.querySelector('tbody');
let pig = document.querySelector('pig');

btn.addEventListener('click', () => {
    tbody.insertAdjacentHTML('beforeEnd',
        `<tr class="">
        </tr>`
    )
})