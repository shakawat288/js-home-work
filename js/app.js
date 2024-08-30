const psktoggler = document.querySelector('section .form-input .passwordtoggler')
const inputpsk = document.querySelector('section .form-input input')


const psktogglerfun = () => {
    

    inputpsk.type == 'password' ? inputpsk.type = 'text' : inputpsk.type = 'password'
    
    inputpsk.type == 'password' ?
    psktoggler.innerHTML = '<i class="bi bi-eye-slash"></i>'  :
    psktoggler.innerHTML = '<i class="bi bi-eye"></i>'
}

psktoggler.addEventListener('click', psktogglerfun)

const showTogglerBtn = () => {
    
    // Element.classList.add
    // Element.classList.remove
    console.log(pskToggler.classList);
    

    inputpsk.value.length > 6 ? 
    psktoggler.classList.add('show') : 
    psktoggler.classList.remove('show')
    
    
}


inputpsk.addEventListener('keyup',showTogglerBtn )

const cursor = document.querySelector('.cursor')
const cursorsm = document.querySelector('.cursorsm')

const customMouseCursor = (event) => {

    const {pagex: left, pageY: top} = event;
    console.log(top);

    cursor.style.top = top+'px'
    cursor.style.left = left+'px'
    cursorsm.style.top = top+'px'
    cursorsm.style.left = left+'px'

}

window.addEventListener('mousemove', customMouseCursor)