const buregr = document.querySelector('#burger');
const menu_pizza = document.querySelector('#menu_pizza');

buregr.addEventListener('click',() => {
    if( menu_pizza.classList.contains('hidden')){
        menu_pizza.classList.remove('hidden');
    }
    else{
        menu_pizza.classList.add('hidden');
    }
})