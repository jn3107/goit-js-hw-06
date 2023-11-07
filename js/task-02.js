const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsEl = document.querySelector('#ingredients');
console.log(ingredientsEl)

const markup = ingredients.map((ingredient) => {
  const navItemEl = document.createElement('li');
  navItemEl.classList.add('item');
  navItemEl.textContent = ingredient;
  return navItemEl;
});

ingredientsEl.append(...markup);