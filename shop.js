function createShopList() {
    const worksheets = [
    {worksheetImage: 'picture1.jpg',
     worksheetTitle: '"Autumn" Worksheet',
     worksheetDescription: 'Worksheet "Autumn" is a small book with the vocabulary connected to the autumn weather and autumn activities. Inside you will find several vocabulary materials and self-check exercises with answers.',
     worksheetLink: 'item1.html',
     worksheetPrice: 8,
     worksheetCurrency: '$',
     worksheetDiscount: null },
     {worksheetImage: 'picture1.jpg',
     worksheetTitle: 'Похуй что это',
     worksheetDescription: 'Похуй, что это, но чуть больше слов',
     worksheetLink: 'index.html',
     worksheetPrice: 100,
     worksheetCurrency: '$',
     worksheetDiscount: null },
     {worksheetImage: 'picture1.jpg',
     worksheetTitle: 'Похуй что это',
     worksheetDescription: 'Похуй, что это, но чуть больше слов',
     worksheetLink: 'index.html',
     worksheetPrice: 100,
     worksheetCurrency: '$',
     worksheetDiscount: null },
     {worksheetImage: 'picture1.jpg',
     worksheetTitle: 'Похуй что это',
     worksheetDescription: 'Похуй, что это, но чуть больше слов',
     worksheetLink: 'index.html',
     worksheetPrice: 100,
     worksheetCurrency: '$',
     worksheetDiscount: null },
     {worksheetImage: 'picture1.jpg',
     worksheetTitle: 'Похуй что это',
     worksheetDescription: 'Похуй, что это, но чуть больше слов',
     worksheetLink: 'index.html',
     worksheetPrice: 100,
     worksheetCurrency: '$',
     worksheetDiscount: null },
     {worksheetImage: 'picture1.jpg',
     worksheetTitle: 'Похуй что это',
     worksheetDescription: 'Похуй, что это, но чуть больше слов',
     worksheetLink: 'index.html',
     worksheetPrice: 100,
     worksheetCurrency: '$',
     worksheetDiscount: null }
    ];

    const shopContainer = document.getElementById('mainShopContainer');

    for (let worksheet of worksheets) {
    const itemContainer = document.createElement('div');
    itemContainer.className = 'itemContainer';

    const imgContainer = document.createElement('img');
    imgContainer.className = 'imgContainer';
    imgContainer.src = worksheet.worksheetImage;

    const titleContainer = document.createElement('h3');
    titleContainer.className = 'titleContainer';
    titleContainer.innerHTML = worksheet.worksheetTitle;
    titleContainer.onclick = function(){
        window.location.href = worksheet.worksheetLink;
    }

    const descriptionContainer = document.createElement('p');
    descriptionContainer.className = 'descriptionContainer';
    descriptionContainer.innerHTML = worksheet.worksheetDescription;
    descriptionContainer.onclick = function(){
        window.location.href = worksheet.worksheetLink;
    }

    const newContainer = document.createElement('div');
    newContainer.className = 'newContainer';

    const priceContainer = document.createElement('h4');
    priceContainer.className = 'priceContainer';
    priceContainer.innerHTML = worksheet.worksheetPrice + worksheet.worksheetCurrency;

    const shopButton = document.createElement('button');
    shopButton.className = 'shopButton';
    shopButton.innerHTML = 'Add to Cart';
   

    newContainer.appendChild(priceContainer);
    newContainer.appendChild(shopButton);

    itemContainer.appendChild(imgContainer);
    itemContainer.appendChild(titleContainer);
    itemContainer.appendChild(descriptionContainer);
    itemContainer.appendChild(newContainer);

    shopContainer.appendChild(itemContainer);
    }
}

createShopList();