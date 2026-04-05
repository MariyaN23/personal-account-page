document.addEventListener('DOMContentLoaded', () => {
    const settingsButtons = document.querySelectorAll('.ads-table__settings-btn')
    settingsButtons.forEach(btn => {
        btn.addEventListener('click', (event) => {
            event.stopPropagation()
            const dropdown = btn.nextElementSibling
            document.querySelectorAll('.ads-table__dropdown').forEach(d => {
                if (d !== dropdown) {
                    d.classList.remove('ads-table__dropdown--active')
                }
            })
            dropdown.classList.toggle('ads-table__dropdown--active')
        })
    })
    document.addEventListener('click', () => {
        document.querySelectorAll('.ads-table__dropdown').forEach(d => {
            d.classList.remove('ads-table__dropdown--active')
        })
    })
})
