import "./style.scss";

const adsData = [
    {
        id: 1,
        name: "Телевизор Blaupunkt 50\" 50UJW5000T",
        url: "./assets/Blaupunkt-50-50UJW5000T.webp",
        serialNumber: "№ 100524674",
        article: "1020",
        date: "04 сен 2021",
        condition: "новый",
        priceBYN: "9 400 BYN",
        priceUSD: "2 322 USD",
        status: "Активен",
        viewCount: "283",
        phoneCount: "7",
    },
    {
        id: 2,
        name: "Телевизор JVC 50\" LT-50MU7500",
        url: "./assets/no-product-image.webp",
        serialNumber: "№ 100524674",
        article: "1020",
        date: "04 сен 2021",
        condition: "новый",
        priceBYN: "9 400 BYN",
        priceUSD: "2 322 USD",
        status: "Активен",
        viewCount: "910 283",
        phoneCount: "5 987",
    },
    {
        id: 3,
        name: "Телевизор Blaupunkt 50\" 50UJW5000T",
        url: "./assets/JVC-50-LT-50MU7500.webp",
        serialNumber: "№ 100524674",
        article: "1020",
        date: "04 сен 2021",
        condition: "новый",
        priceBYN: "9 400 BYN",
        priceUSD: "2 322 USD",
        status: "Не активен",
        viewCount: "283",
        phoneCount: "7",
    },
    {
        id: 4,
        name: "Телевизор JVC 50\" LT-50MU7500",
        url: "./assets/no-product-image.webp",
        serialNumber: "№ 100524674",
        article: "1020",
        date: "04 сен 2021",
        condition: "новый",
        priceBYN: "9 400 BYN",
        priceUSD: "2 322 USD",
        status: "Активен",
        viewCount: "910 283",
        phoneCount: "5 987",
    },
    {
        id: 5,
        name: "Телевизор Blaupunkt 50\" 50UJW5000T",
        url: "./assets/Blaupunkt-50-50UJW5000T.webp",
        serialNumber: "№ 100524674",
        article: "1020",
        date: "04 сен 2021",
        condition: "новый",
        priceBYN: "9 400 BYN",
        priceUSD: "2 322 USD",
        status: "Пауза",
        viewCount: "283",
        phoneCount: "7",
    },
    {
        id: 6,
        name: "Телевизор JVC 50\" LT-50MU7500",
        url: "./assets/JVC-50-LT-50MU7500.webp",
        serialNumber: "№ 100524674",
        article: "1020",
        date: "04 сен 2021",
        condition: "новый",
        priceBYN: "9 400 BYN",
        priceUSD: "2 322 USD",
        status: "Пауза",
        viewCount: "910 283",
        phoneCount: "5 987",
    },
    {
        id: 7,
        name: "Телевизор Blaupunkt 50\" 50UJW5000T",
        url: "./assets/Blaupunkt-50-50UJW5000T.webp",
        serialNumber: "№ 100524674",
        article: "1020",
        date: "04 сен 2021",
        condition: "новый",
        priceBYN: "9 400 BYN",
        priceUSD: "2 322 USD",
        status: "Пауза",
        viewCount: "283",
        phoneCount: "7",
    },
]

const tableBody = document.getElementById("table-body")
const mappedTableRows = adsData.map((product) => {
    const isInactive = product.status === "Не активен"
    let statusClass;
    switch (product.status) {
        case "Не активен":
            statusClass = "status--inactive"
            break
        case "Пауза":
            statusClass = "status--paused"
            break
        default:
            statusClass = "status--active"
    }
    const rowModifier = isInactive ? "ads-table__row--inactive" : ""

    return `<tr class="ads-table__row ${rowModifier}">
        <td class="ads-table__cell" data-label="Выбрать">
          <input type="checkbox"
                 class="ads-table__checkbox"
                 id=${product.id}
                 aria-label="Выбрать объявление">
        </td>
        <td class="ads-table__cell" data-label="Фото и название">
          <div class="ads-table__info">
            <img
                src=${product.url}
                alt=${product.name}
                class="ads-table__image"
            >
            <div class="ads-table__text-content">
              <p class="ads-table__name">${product.name}</p>
              <p class="ads-table__serial-number">${product.serialNumber}</p>
            </div>
          </div>
        </td>
        <td class="ads-table__cell ads-table__article" data-label="Артикул">${product.article}</td>
        <td class="ads-table__cell ads-table__date" data-label="Дата подачи">${product.date}</td>
        <td class="ads-table__cell ads-table__condition" data-label="Состояние">${product.condition}</td>
        <td class="ads-table__cell" data-label="Цена">
          <div class="ads-table__price-content">
            <p class="ads-table__price-byn">${product.priceBYN}</p>
            <p class="ads-table__price-usd">${product.priceUSD}</p>
          </div>
        </td>
        <td class="ads-table__cell" data-label="Статус">
          <div
              class="ads-table__status status ${statusClass} status--base"
              role="status"
              aria-label="Активен"
          >
          </div>
        </td>
        <td class="ads-table__cell" data-label="Просмотры объявления">
          <div class="ads-table__ad-views">
            <img
                src="./assets/eye-open.svg"
                alt="Просмотры"
                class="ads-table__view-icon"
                width="24"
                height="24"
            >
            <span class="ads-table__view-count">${product.viewCount}</span>
          </div>
        </td>
        <td class="ads-table__cell" data-label="Просмотры телефона">
          <div class="ads-table__phone-views">
            <img
                src="./assets/phone.svg"
                alt="Просмотры"
                class="ads-table__phone-icon"
                width="24"
                height="24"
            >
            <span class="ads-table__phone-count">${product.phoneCount}</span>
          </div>
        </td>
        <td class="ads-table__cell" data-label="Настройки">
          <button class="ads-table__settings-btn" type="button">
            <img
                src="./assets/kebab.svg"
                alt="Просмотры"
                class="ads-table__settings-icon"
                width="24"
                height="24"
            >
            <span class="ads-table__settings-text">Изменить</span>
          </button>
        </td>
      </tr>`
})

tableBody.innerHTML = mappedTableRows.join('')

const selectionPanel = document.querySelector('.selection-panel');
const countText = document.querySelector('.selection-panel__count');

function updateSelection() {
    const checkedCheckboxes = tableBody.querySelectorAll('.ads-table__checkbox:checked')
    const count = checkedCheckboxes.length

    if (count > 0) {
        selectionPanel.classList.add('selection-panel--active')
        countText.textContent = `Выбрано ${count} на странице:`
    } else {
        selectionPanel.classList.remove('selection-panel--active')
    }
}

tableBody.addEventListener('change', (e) => {
    if (e.target.classList.contains('ads-table__checkbox')) {
        updateSelection()
    }
})
