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


