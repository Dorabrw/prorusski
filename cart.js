function setupOrderList() {
    const shopItems = getCookie();

    const mainContainer = document.getElementById('itemContainer');
    mainContainer.innerHTML = "";
    if (shopItems == null || shopItems.length === 0) {
        const emptyCartTitle = document.createElement('img');
        emptyCartTitle.className = 'empty-cart-title';
        emptyCartTitle.src = 'Frame 7.png';
        mainContainer.appendChild(emptyCartTitle);
    } else {
        for (let shopItem of shopItems) {
            const checkoutItem = document.createElement('div');
            checkoutItem.className = 'checkout-item';

            const checkoutItemPhoto = document.createElement('div');
            const itemImg = document.createElement('img');
            itemImg.src = shopItem.worksheetImage;
            itemImg.className = 'checkout-photo';
            checkoutItemPhoto.appendChild(itemImg);

            const checkoutItemInfo = document.createElement('div');
            checkoutItemInfo.className = 'checkout-item-info';

            const checkoutTitle = document.createElement('h3');
            checkoutTitle.innerHTML = shopItem.worksheetTitle;
            checkoutTitle.className = 'checkout-title';

            const checkoutDescription = document.createElement('h4');
            checkoutDescription.innerHTML = shopItem.worksheetDescription;
            checkoutDescription.className = 'checkout-description';

            const checkoutPrice = document.createElement('h3');
            checkoutPrice.innerHTML = shopItem.worksheetPrice + shopItem.worksheetCurrency;
            checkoutPrice.className = 'checkout-price';

            const checkoutButton = document.createElement('button');
            checkoutButton.innerHTML = 'Remove item';
            checkoutButton.className = 'remove-button';
            checkoutButton.onclick = function () {
                removeWorsheetFromCookiesAndRefreshList(shopItem.id, 1);
                setTotalPrice();
            }

            checkoutItemInfo.appendChild(checkoutTitle);
            checkoutItemInfo.appendChild(checkoutDescription);
            checkoutItemInfo.appendChild(checkoutPrice);
            checkoutItemInfo.appendChild(checkoutButton);

            checkoutItem.appendChild(checkoutItemInfo);

            checkoutItem.appendChild(checkoutItemPhoto);
            mainContainer.appendChild(checkoutItem);

        }
    }
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

function removeWorsheetFromCookiesAndRefreshList(id, days) {
    let oldCookies = getCookie();
    for (let index = 0; index < oldCookies.length; index++) {
        if (oldCookies[index].id === id) {
            oldCookies.splice(index, 1);
        }
    }

    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);

    document.cookie = `worksheets=${JSON.stringify(oldCookies)};expires=${expires.toUTCString()};path=/`;

    setupOrderList();
}

function setTotalPrice() {
    const totalPriceSpan = document.getElementById('totalPrice');
    const cart = getCookie();
    let totalPrice = 0;
    if (cart != null && cart.length > 0) {
        for (let worksheet of cart) {
         totalPrice += worksheet.worksheetPrice;   
        }
        
    }
    totalPriceSpan.innerHTML = 'Total price: ' + totalPrice + '$';
}

function setupSubmit(){
    const submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', function(){
        alert("Your order has been successfully placed!");
        removeAllWorsheetsFromCookiesAndRefreshList(1);
    });
}

function removeAllWorsheetsFromCookiesAndRefreshList(days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);

    document.cookie = `worksheets=${JSON.stringify(null)};expires=${expires.toUTCString()};path=/`;

    setupOrderList();
    setTotalPrice();
}

setTotalPrice();
setupOrderList();
setupSubmit();

