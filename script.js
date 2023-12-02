

function constructNavigationBar() {
    const navigationBar = document.getElementById("navigationBar");
    const navigationItems = [
        {text: "Courses", link: "index.html", dropdown: [
            {text: "Individual Lessons", link: "index.html"},
            {text: "Group Lessons", link: "index.html"},
            {text: "Online Courses", link: "index.html"}
        ]},
        {text: "Shop", link: "shop.html"},
        {text: "Information", link: "index.html", dropdown: [
            {text: "About Us", link: "index.html"},
            {text: "FAQ", link: "index.html"}
        ]},
        {text: "Social Media", link: "index.html"},
        {text: "Contact Us", link: "index.html"}
    ];

    //logo image plus link
    const logoLink = document.createElement('a');
    logoLink.href = 'index.html';
    const logo = document.createElement('img');
    logo.src = 'Frame.png';
    logo.alt = 'Logo';
    logo.style.height = '45px';
    logo.style.marginRight = '90px';
    logo.style.marginLeft = '20px';

    logoLink.appendChild(logo);

    const cartLink = document.createElement('a');
    cartLink.href = 'index.html'; //add cart page!!
    cartLink.style.marginTop = '7px'; // Adjust the value as needed
    cartLink.style.marginLeft = 'auto'; // Push cartLink to the right
    cartLink.style.marginRight = '50px';
    const cartLogo = document.createElement('img');
    cartLogo.src = 'cart.svg';
    cartLogo.alt = 'Cart';
    cartLogo.style.height = '40px';
    

    cartLink.appendChild(cartLogo);

    const navContainer = document.createElement('div');
    navContainer.id = 'nav-container';
    navContainer.style.display = 'flex';
    navContainer.style.alignItems = 'center'; // Center items vertically

    //creating hamburger menu
    const hamburgerButton = document.createElement('button');
    hamburgerButton.innerHTML = '☰';
    hamburgerButton.id = 'hamburgerButton';
    hamburgerButton.style.display = 'none';
    
    

    const navItemsContainer = document.createElement('div');
    navItemsContainer.style.display = 'flex';
    navItemsContainer.style.justifyContent = 'left';
    navItemsContainer.style.flexGrow = '0,5';

    navContainer.appendChild(logoLink);
    navContainer.appendChild(navItemsContainer);
    

    for (let item of navigationItems) {
        let cell = document.createElement('div');
        cell.innerHTML = item.text;
        cell.href = item.link;
        cell.id = 'navCell';
        cell.style.display = 'block';
        cell.style.color = '#757a79';
        cell.style.padding = '18px';
        cell.style.textDecoration = "none";
        cell.style.position = 'relative';
        cell.style.transition = 'background-color 0.3s, border-radius 0.3s';

        if (item.link) {
            cell.addEventListener('click', function () {
                window.location.href = item.link;
            });
        }

        if (item.dropdown && item.dropdown.length > 0) {
            const dropdownContainer = document.createElement('div');
            dropdownContainer.className = 'dropdown';

            dropdownContainer.style.display = 'none';
            dropdownContainer.style.position = 'absolute';
            dropdownContainer.style.top = '100%'; // Position below the parent
            dropdownContainer.style.left = '0';
            dropdownContainer.style.backgroundColor = '#f5d061';
            dropdownContainer.style.textDecoration = 'none';
            dropdownContainer.style.padding = '10px';
            dropdownContainer.style.transition = 'background-color 0.3s, border-radius 0.3s';
            dropdownContainer.style.borderRadius = '10px';
            

            for (let dropdownItem of item.dropdown) {
                let dropdownCell = document.createElement('a');
                dropdownCell.innerHTML = dropdownItem.text;
                dropdownCell.href = dropdownItem.link;

                dropdownCell.style.display = 'block';
                dropdownCell.style.color = '#757a79'; // Text color for dropdown items
                dropdownCell.style.textDecoration = 'none';
                dropdownCell.style.padding = '8px';
                dropdownCell.style.fontSize = '14px';

                if (dropdownItem.link) {
                    dropdownCell.addEventListener('click', function () {
                        window.location.href = dropdownItem.link;
                    });
                }
                
                dropdownContainer.appendChild(dropdownCell);
            }
            cell.appendChild(dropdownContainer);

            cell.addEventListener('mouseover', function () {
                cell.style.backgroundColor = '#f5d061';
                dropdownContainer.style.display = 'block';
                cell.style.cursor = 'pointer';
            });
            cell.addEventListener('mouseout', function () {
                cell.style.backgroundColor = 'transparent';
                dropdownContainer.style.display = 'none';
                cell.style.cursor = 'pointer';
            });
    
        }

        cell.addEventListener('mouseover', function () {
            cell.style.backgroundColor = '#f5d061';
            cell.style.cursor = 'pointer';
            cell.style.borderRadius = '10px';
        });
        cell.addEventListener('mouseout', function () {
            cell.style.backgroundColor = 'transparent';
            cell.style.cursor = 'pointer';
            cell.style.borderRadius = '0px';
        });
       

        navContainer.appendChild(cell);
    }

    navContainer.appendChild(cartLink);

    
    navigationBar.appendChild(navContainer);

}

constructNavigationBar();       


const categoriesData = [
    {photo: 'picture1.jpg', explanation: 'Russian for Business', link: 'index.html'},
    {photo: 'picture1.jpg', explanation: 'Russian Idioms in Use', link: 'index.html'},
    {photo: 'picture1.jpg', explanation: 'Express Course of Russian', link: 'index.html'},
    {photo: 'picture1.jpg', explanation: 'Group Russian Lessons', link: 'index.html'}
];

const containerTop = document.getElementById('container-top');

categoriesData.forEach(item => {
    const container = document.createElement('div');
    container.className = 'container';

    const imgTop = document.createElement('img');
    imgTop.id = 'img-top';
    imgTop.src = item.photo;
    imgTop.alt = 'Photo';
    container.appendChild(imgTop);

    const text = document.createElement('div');
    text.className = 'text';
    text.textContent = item.explanation;
    container.appendChild(text);

    const learnMoreButton = document.createElement('button');
    learnMoreButton.textContent = 'Learn More';
    learnMoreButton.className = 'learn-more-button';
    learnMoreButton.addEventListener('click', () => {
        window.location.href = item.link; // Redirect to the specified link
    });
    container.appendChild(learnMoreButton);

    containerTop.appendChild(container);
});


