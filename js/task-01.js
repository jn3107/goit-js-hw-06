const navItemEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${navItemEl.length}`);

navItemEl.forEach(category => {
    const navTitleEL = category.querySelector('h2').textContent;
    const navCountEl = category.querySelectorAll('ul > li').length;
    console.log(`Category: ${navTitleEL}`);
    console.log(`Elements: ${navCountEl}`);
    });