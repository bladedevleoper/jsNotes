
/*
  in this example of code, we are looking over using previousElementSibling and insertBefore
*/




const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const listUl = listDiv.querySelector('ul');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');
const listItems = document.getElementsByTagName('li');

listUl.EventListener('click', (event) =>{
  //event.target will show where the event was triggered, like clicking a h1 will show it was triggered
 
  if(event.target.tagName == 'BUTTON'){
    
        if(event.target.className == 'remove'){ //this will check the event target class name
          let li = event.target.parentNode;     
          let ul = li.parentNode;
          ul.removeChild(li);
        }
    
        if(event.target.className == 'up'){ //this will check the event target class name
          let li = event.target.parentNode;     
          let previousLi = li.previousElementSibling;
          let ul = li.parentNode;
          ul.insertBefore(li, previousLi);
        
          
        }

        if(event.target.className == 'up'){//
            let li = event.target.parentNode;     
                let previousLi = li.previousElementSibling;
                let ul = li.parentNode;
                ul.insertBefore(li, previousLi);
          }
  }
                          
});