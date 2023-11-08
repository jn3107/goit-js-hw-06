const navlistEl = document.querySelector('#categories');
const navItemEl = navlistEl.children;
console.log(`Number of categoris: ${navItemEl.length}`);

[...navlistEl.children].forEach(item => {
    const navEl = item.lastElementChild.children
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${navEl.length}`);
});