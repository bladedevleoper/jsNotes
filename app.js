const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');
const listItems = document.getElementsByTagName('li');

//we can narrow the listener to a number of elements such as the ul
const listUl = listDiv.querySelector('ul');

//instead of looping through each of the elements to target event clicks, we can target the ancestor element which is the div.
// for (let i = 0; i < listItems.length; i += 1) {
//   listItems[i].addEventListener('mouseover', () => {
//     listItems[i].textContent = listItems[i].textContent.toUpperCase();
//   });
//   listItems[i].addEventListener('mouseout', () => {
//     listItems[i].textContent = listItems[i].textContent.toLowerCase();
//   });
// }

console.log(document.getElementsByTagName('p'));

//have to add the event property as a parameter, so that the parameter will have access to the event object
listUl.addEventListener('click', (event) => {
//inside the event handler, this will target each div, therefore we must declare an if statement to check that the appropriate element is being targeted.
//we have to target the appropriate element within the parent element which are the li tags we can now use the event.target.tagName property
//event.target.tagName this will return all elements in uppercase
    if(event.target.tagName == 'BUTTON'){
      //will return the event parent where the click came from, which we have to 
      let li = event.target.parentNode;
      //will store the targets parent of the li which is the UL
      let ul = li.parentNode;
      //call remove the even target of li
      ul.removeChild(li);
        //event.target.textContent = event.target.textContent.toUpperCase();
    }
        
      });
// listDiv.addEventListener('mouseout', (event) => {
//     if(event.target.tagName == 'LI'){
//         event.target.textContent = event.target.textContent.toLowerCase();
//     }
    
//       });

//Test the document where each element is clicked
//include an event parameter, so that the click event can use the event object
// document.addEventListener('click', (event) => {

//     console.log(event.target);

// });

toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';                        
    listDiv.style.display = 'none';
  }                         
});

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  //creates the new element
  let li = document.createElement('li');

  //changes the text content of the new li element with the input from text box
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = '';
});
  
removeItemButton.addEventListener('click', () => {
//gets all uls on page, but only targeting element 0 of the array
  let ul = document.getElementsByTagName('ul')[0];
  //gets the last child element
  let li = document.querySelector('li:last-child');
  ul.removeChild(li);
});
  
  
  
  