//Modal
const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')



document.getElementById('add-plano')
	.addEventListener('click', openModal)

document.getElementById('modal-close')
	.addEventListener('click', closeModal)




