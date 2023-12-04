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
        worksheetTitle: 'Genitive Case',
        worksheetDescription: 'The grammar book of how to use Genitive Case in Russian. Simple explanations and useful examples. More than 20 exercises to check yourself after learning the theory. With answers in the end.',
        worksheetLink: 'index.html',
        worksheetPrice: 30,
        worksheetCurrency: '$',
        worksheetDiscount: null,
        worksheetCategory: {category: Category.GRAMMAR, level: Level.A2, format: Format.PDF}
    },
    {
        id: 3,
        worksheetImage: 'picture1.jpg',
        worksheetTitle: 'Reflexive Verbs',
        worksheetDescription: 'The big book of most frequently used reflexive verbs in Russian. More than 50 pages covered with the reflexive verbs, their conjugation and examples of how to use them. Exercises included.',
        worksheetLink: 'index.html',
        worksheetPrice: 25,
        worksheetCurrency: '$',
        worksheetDiscount: null,
        worksheetCategory: {category: Category.GRAMMAR, level: Level.B1, format: Format.PDF}
    },
    {
        id: 4,
        worksheetImage: 'picture1.jpg',
        worksheetTitle: 'Russian Phrasal Verbs',
        worksheetDescription: 'Full collection of Russian Phrasal Verbs ("Идиомы") from our website with explanations, examples and advice of where and how to use them. You can print them and use as flashcards.',
        worksheetLink: 'index.html',
        worksheetPrice: 12,
        worksheetCurrency: '$',
        worksheetDiscount: null,
        worksheetCategory: {category: Category.VOCABULARY, level: Level.A2, format: Format.JPG}
    },
    {
        id: 5,
        worksheetImage: 'picture1.jpg',
        worksheetTitle: '"Spring" Worksheet',
        worksheetDescription: 'Worksheet "Spring" is a small book with the vocabulary connected to the spring weather and spring activities. Inside you will find several vocabulary materials and self-check exercises with answers.',
        worksheetLink: 'index.html',
        worksheetPrice: 8,
        worksheetCurrency: '$',
        worksheetDiscount: null,
        worksheetCategory: {category: Category.VOCABULARY, level: Level.A1, format: Format.PDF}
    },
    {
        id: 6,
        worksheetImage: 'picture1.jpg',
        worksheetTitle: 'A Gift from Grandmother',
        worksheetDescription: '"A Gift from Grandmother" is an adaptation of a story written by famous Russian writer. The story includes explanation of verbs of motion and exercises on grammar and vocabulary.',
        worksheetLink: 'index.html',
        worksheetPrice: 23,
        worksheetCurrency: '$',
        worksheetDiscount: null,
        worksheetCategory: {category: Category.STORY, level: Level.A2, format: Format.PDF}
    },
    {
        id: 7,
        worksheetImage: 'picture1.jpg',
        worksheetTitle: 'Prepositional Case',
        worksheetDescription: 'The grammar book of how to use Prepositive Case in Russian. Simple explanations and useful examples. More than 20 exercises to check yourself after learning the theory. With answers.',
        worksheetLink: 'index.html',
        worksheetPrice: 30,
        worksheetCurrency: '$',
        worksheetDiscount: null,
        worksheetCategory: {category: Category.GRAMMAR, level: Level.A2, format: Format.PDF}
    },
    {
        id: 8,
        worksheetImage: 'picture1.jpg',
        worksheetTitle: 'Verbs of Motion',
        worksheetDescription: 'Simple explanation of verbs of motion. Pictured tables and flashcards for better understanding of the verbs with and without prefixes. Including cards with exercises.',
        worksheetLink: 'index.html',
        worksheetPrice: 27,
        worksheetCurrency: '$',
        worksheetDiscount: null,
        worksheetCategory: {category: Category.GRAMMAR, level: Level.B1, format: Format.JPG}
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

function setupFormatsFilters() {
    const formatsContainer = document.getElementById('formatsContainer');
    const formats = [Format.JPG, Format.PDF];

    for (let format of formats) {
        const formatCheckBoxContainer = document.createElement('div');
        formatCheckBoxContainer.className = 'checkBoxContainer';
        
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.name = format;
        input.value = format;
        input.id = format;
        input.className = 'format';
        formatCheckBoxContainer.appendChild(input);

        input.addEventListener('click', function() {
            if (input.checked) {
                selectedFormats.push(format);
                createShopList(filterWorksheets());
            } else {
                removeSelectedFormat(format);
                createShopList(filterWorksheets());
            }
        });

        const label = document.createElement('label');
        label.innerHTML = format;
        label.className = 'categoriesLabel';

        formatCheckBoxContainer.appendChild(label);
        formatsContainer.appendChild(formatCheckBoxContainer);
    }
}


function setupFilters() {
    setupCategoriesFilters();
    setupLevelsFilters();
    setupFormatsFilters();
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

function removeSelectedFormat(format) {
    let indexToRemove = 0;
    for(let index = 0; index <= selectedFormats.length; index++) {
        if (selectedFormats[index] === format) {
            indexToRemove = index;
        }
    }
    selectedFormats.splice(indexToRemove, 1);
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

    const levelsFilteredWorksheets = categoriesFilteredWorksheets.filter(function(worksheet){
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

    const formatsFilteredWorksheets = levelsFilteredWorksheets.filter(function(worksheet) {
        if (selectedFormats.length === 0) {
            return true;
        }
        let shouldShow = false;
        for (let format of selectedFormats) {
            if (worksheet.worksheetCategory.format === format) {
                shouldShow = true;
            }
        }
        return shouldShow; 
    });

    return formatsFilteredWorksheets;
}


createShopList(dataBase);
setupFilters();