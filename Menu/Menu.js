/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>
*/

function menuFunction(arr) {
  const menu = document.createElement('div');
  const list = document.createElement('ul');
  const listItem1 = document.createElement('li');
  const listItem2 = document.createElement('li');
  const listItem3 = document.createElement('li');
  const listItem4 = document.createElement('li');
  const listItem5 = document.createElement('li');
  const listItem6 = document.createElement('li');

  menu.appendChild(list);
  list.appendChild(listItem1);
  list.appendChild(listItem2);
  list.appendChild(listItem3);
  list.appendChild(listItem4);
  list.appendChild(listItem5);
  list.appendChild(listItem6);

  listItem1.textContent = arr[0];
  listItem2.textContent = arr[1];
  listItem3.textContent = arr[2];
  listItem4.textContent = arr[3];
  listItem5.textContent = arr[4];
  listItem6.textContent = arr[5];

  menu.classList.add("menu");

  const menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function() {
    menu.classList.toggle("menu--open");
  });

  return menu;
}

/*
  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/ 

const header = document.querySelector('.header');
console.log(header);
header.appendChild(menuFunction(menuItems));
