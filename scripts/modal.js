const openModalBtn = document.querySelector('.ads-manager__add-btn')
const modal = document.querySelector('#addNewAd')
const closeModalBtn = modal.querySelector('.modal__close')
const overlay = modal.querySelector('.modal__overlay')

const openModal = () => {
    modal.classList.add('modal--open')
    document.body.style.overflow = 'hidden'
}

export const closeModal = () => {
    modal.classList.remove('modal--open')
    document.body.style.overflow = ''
}

openModalBtn.addEventListener('click', openModal)
closeModalBtn.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('modal--open')) {
        closeModal()
    }
})
