//Modal
const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const openModaledit = () => document.getElementById('modaledit')
    .classList.add('active')

const closeModaledit = () => document.getElementById('modaledit')
    .classList.remove('active')

document.getElementById('add-plano')
	.addEventListener('click', openModal)

document.getElementById('modal-close')
	.addEventListener('click', closeModal)

document.getElementById('edit-plano')
	.addEventListener('click', openModaledit)

document.getElementById('modal-close-edit')
	.addEventListener('click', closeModaledit)

