const readAsText = response => response.text();
const logResponse = response => console.log `server response ${response}`;
const logError = error => console.error `server error response ${error}`;

// fetch('http://localhost:3000', { method: 'HEAD' })
//     // .then(readAsText)
//     .then(logResponse)
//     .catch(logError)

//food-menu section
const handleFoodMenuItemClick = (e) => {
    //if no modifier select only this item
    if (!(e.ctrlKey || e.metaKey)) {
        //deselect all items
        menuItems.forEach((item) => item.classList.remove('selected-menu-item'));
        //select clicked item
        e.target.classList.add('selected-menu-item');
    } else {
        e.target.classList.toggle('selected-menu-item');
    }

}

const menuItems = document.querySelectorAll('.food-menu li');
menuItems.forEach((item) => {
    item.addEventListener('click', handleFoodMenuItemClick);
    //prevent text selection on click
    item.addEventListener('mousedown', e => e.preventDefault());
});

//register serviceWorker for push notification test
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
        .then(swReg => {
            console.log('service worker registration successful', swReg);
        })
        .catch(err => {
            console.error('service worker registration error', err);
        });
}

//request permission
if (window.Notification) {
    Notification.requestPermission()
        .then(status => {
            console.log('Notification request made, status:', status);
        })
        .catch(error => {
            console.error('Notification request couldn\'t complete', error);
        })
}