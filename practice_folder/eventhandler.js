
//main container
const listDiv = document.querySelector('.listDiv'); 
//change the listener on the parent element closest to the event listeners
const listUl = listDiv.parentNode; 


listUl.addEventListener('click', (event) => {

    // query where the event has come from
    if(event.target.tagName == 'BUTTON'){ 
        
        //where we want the target to take place
        //as the button is inside the li div, the li tag needs to become the parent,
        // so we can just append the parentNode property on the end of target.
        var li = event.target.parentNode;
        
        //setting the ul as the parent node of the where the target is happening
        var ul = li.parentNode;

        //remove the element that is pressed
        ul.removeChild(li);
        

    }
    
});






