const Category = Object.freeze({
    VOCABULARY: 'vocabulary',
    GRAMMAR: 'grammar',
    STORY: 'story',
});

const Level = Object.freeze({
    A1: 'A1(Elementary)',
    A2: 'A2(Basic)',
    B1: 'B1(Intermediate)',
});

const Format = Object.freeze({
    PDF: 'PDF',
    JPG: 'JPG'
});

let selectedCategories = [];
let selectedLevels = [];
let selectedFormats = [];

const dataBase = [
    {
        id: 1,
        worksheetImage: 'picture1.jpg',
        worksheetTitle: '"Autumn" Worksheet',
        worksheetDescription: 'Worksheet "Autumn" is a small book with the vocabulary connected to the autumn weather and autumn activities. Inside you will find several vocabulary materials and self-check exercises with answers.',
        worksheetLink: 'item1.html',
        worksheetPrice: 8,
        worksheetCurrency: '$',
        worksheetDiscount: null,
        worksheetCategory: {category: Category.VOCABULARY, level: Level.A1, format: Format.PDF}
    },
    {
        id: 2,
        worksheetImage: 'picture1.jpg',
        worksheetTitle: 'Похуй что это',
        worksheetDescription: 'Похуй, что это, но чуть больше слов',
        worksheetLink: 'index.html',
        worksheetPrice: 100,
        worksheetCurrency: '$',
        worksheetDiscount: null,
        worksheetCategory: {category: Category.GRAMMAR, level: Level.A2, format: Format.PDF}
    },
    {
        id: 3,
        worksheetImage: 'picture1.jpg',
        worksheetTitle: 'Похуй что это',
        worksheetDescription: 'Похуй, что это, но чуть больше слов',
        worksheetLink: 'index.html',
        worksheetPrice: 100,
        worksheetCurrency: '$',
        worksheetDiscount: null,
        worksheetCategory: {category: Category.VOCABULARY, level: Level.A1, format: Format.JPG}
    },
    {
        id: 4,
        worksheetImage: 'picture1.jpg',
        worksheetTitle: 'Похуй что это',
        worksheetDescription: 'Похуй, что это, но чуть больше слов',
        worksheetLink: 'index.html',
        worksheetPrice: 100,
        worksheetCurrency: '$',
        worksheetDiscount: null,
        worksheetCategory: {category: Category.STORY, level: Level.A2, format: Format.PDF}
    },
    {
        id: 5,
        worksheetImage: 'picture1.jpg',
        worksheetTitle: 'Похуй что это',
        worksheetDescription: 'Похуй, что это, но чуть больше слов',
        worksheetLink: 'index.html',
        worksheetPrice: 100,
        worksheetCurrency: '$',
        worksheetDiscount: null,
        worksheetCategory: {category: Category.STORY, level: Level.B1, format: Format.PDF}
    },
    {
        id: 6,
        worksheetImage: 'picture1.jpg',
        worksheetTitle: 'Похуй что это',
        worksheetDescription: 'Похуй, что это, но чуть больше слов',
        worksheetLink: 'index.html',
        worksheetPrice: 100,
        worksheetCurrency: '$',
        worksheetDiscount: null,
        worksheetCategory: {category: Category.STORY, level: Level.A1, format: Format.JPG}
    }
];

function createShopList(worksheets) {
    const shopContainer = document.getElementById('mainShopContainer');
    shopContainer.innerHTML = '';

    for (let worksheet of worksheets) {
        const itemContainer = document.createElement('div');
        itemContainer.className = 'itemContainer';

        const imgContainer = document.createElement('img');
        imgContainer.className = 'imgContainer';
        imgContainer.src = worksheet.worksheetImage;

        const titleContainer = document.createElement('h3');
        titleContainer.className = 'titleContainer';
        titleContainer.innerHTML = worksheet.worksheetTitle;
        titleContainer.onclick = function () {
            window.location.href = worksheet.worksheetLink;
        }

        const descriptionContainer = document.createElement('p');
        descriptionContainer.className = 'descriptionContainer';
        descriptionContainer.innerHTML = worksheet.worksheetDescription;
        descriptionContainer.onclick = function () {
            window.location.href = worksheet.worksheetLink;
        }

        const newContainer = document.createElement('div');
        newContainer.className = 'newContainer';

        const priceContainer = document.createElement('h4');
        priceContainer.className = 'priceContainer';
        priceContainer.innerHTML = worksheet.worksheetPrice + worksheet.worksheetCurrency;

        const containerForShopButton = document.createElement('div');
        containerForShopButton.className = "container-for-shop-button";

        const shopButton = document.createElement('button');
        shopButton.className = 'shopButton';
        shopButton.innerHTML = 'Add to Cart';
        shopButton.onclick = function () {
            const isSuccessful = setCookie(worksheet, 1);
            console.log(isSuccessful);
            if (isSuccessful) {
                let messageElement = document.createElement('div');
                messageElement.className = 'add-to-cart-message';
                messageElement.innerHTML = 'Your item is added to cart!';
                containerForShopButton.appendChild(messageElement);
            }
        }

        containerForShopButton.appendChild(shopButton);


        newContainer.appendChild(priceContainer);
        newContainer.appendChild(containerForShopButton);

        itemContainer.appendChild(imgContainer);
        itemContainer.appendChild(titleContainer);
        itemContainer.appendChild(descriptionContainer);
        itemContainer.appendChild(newContainer);

        shopContainer.appendChild(itemContainer);
    }
}

function setCookie(value, days) {
    let oldCookies = getCookie();
    if (oldCookies != null) {
        for (let item of oldCookies) {
            if (item.id === value.id) {
                return false;
            }
        }
        oldCookies.push(value);
    } else {
        oldCookies = [value];
    }

    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);

    document.cookie = `worksheets=${JSON.stringify(oldCookies)};expires=${expires.toUTCString()};path=/`;
    return true;
}


function getCookie() {
    const cookieName = `worksheets=`;
    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(cookieName) === 0) {
            return JSON.parse(cookie.substring(cookieName.length, cookie.length));
        }
    }

    return null;
}

function setupCategoriesFilters() {
    const categoriesContainer = document.getElementById('categoriesContainer');
    const categories = [Category.GRAMMAR, Category.STORY, Category.VOCABULARY];

    for (let category of categories) {
        const categoryCheckBoxContainer = document.createElement('div');
        categoryCheckBoxContainer.className = 'checkBoxContainer';
        
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.name = category;
        input.value = category;
        input.id = category;
        input.className = 'category';
        categoryCheckBoxContainer.appendChild(input);

        input.addEventListener('click', function() {
            if (input.checked) {
                selectedCategories.push(category);
                createShopList(filterWorksheets());
            } else {
                removeSelectedCategory(category);
                createShopList(filterWorksheets());
            }
        });

        const label = document.createElement('label');
        label.innerHTML = category;
        label.className = 'categoriesLabel';

        categoryCheckBoxContainer.appendChild(label);
        categoriesContainer.appendChild(categoryCheckBoxContainer);
    }
}

function setupLevelsFilters() {
    const levelsContainer = document.getElementById('levelsContainer');
    const levels = [Level.A1, Level.A2, Level.B1];

    for (let level of levels) {
        const levelCheckBoxContainer = document.createElement('div');
        levelCheckBoxContainer.className = 'checkBoxContainer';
        
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.name = level;
        input.value = level;
        input.id = level;
        input.className = 'level';
        levelCheckBoxContainer.appendChild(input);

        input.addEventListener('click', function() {
            if (input.checked) {
                selectedLevels.push(level);
                createShopList(filterWorksheets());
            } else {
                removeSelectedLevel(level);
                createShopList(filterWorksheets());
            }
        });

        const label = document.createElement('label');
        label.innerHTML = level;
        label.className = 'categoriesLabel';

        levelCheckBoxContainer.appendChild(label);
        levelsContainer.appendChild(levelCheckBoxContainer);
    }
}

function setupFilters() {
    setupCategoriesFilters();
    setupLevelsFilters();
}

function removeSelectedCategory(category) {
    let indexToRemove = 0;
    for(let index = 0; index <= selectedCategories.length; index++) {
        if (selectedCategories[index] === category) {
            indexToRemove = index;
        }
    }
    selectedCategories.splice(indexToRemove, 1);
}

function removeSelectedLevel(level) {
    let indexToRemove = 0;
    for(let index = 0; index <= selectedLevels.length; index++) {
        if (selectedLevels[index] === level) {
            indexToRemove = index;
        }
    }
    selectedLevels.splice(indexToRemove, 1);
}

function filterWorksheets() {
    let copy = dataBase;
    const categoriesFilteredWorksheets = copy.filter(function(worksheet) {
        if (selectedCategories.length === 0) {
            return true;
        }

        let shouldShow = false;
        for (let category of selectedCategories) {
            if (worksheet.worksheetCategory.category === category) {
                shouldShow = true;
            } 
        }
        return shouldShow;
    });

    const levelsFilteredWorksheet = categoriesFilteredWorksheets.filter(function(worksheet){
        if (selectedLevels.length === 0) {
            return true;
        }
        let shouldShow = false;
        for (let level of selectedLevels) {
            if (worksheet.worksheetCategory.level === level) {
                shouldShow = true;
            }
        }
        return shouldShow;
    });

    return levelsFilteredWorksheet;
}


createShopList(dataBase);
setupFilters();