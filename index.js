const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const buttonCheck = document.getElementById('check')

document.getElementById('add-fatura')
	.addEventListener('click', openModal)

document.getElementById('modal-close')
	.addEventListener('click', closeModal)

buttonCheck.onclick = function() {

    if(buttonCheck.classList == 'active') {
        buttonCheck.classList.remove('active')
        buttonCheck.classList.add('button__check')

    } else {
        buttonCheck.classList.remove('button__check')
        buttonCheck.classList.add('active')
    }
    
    
}