
//selecting the parent attribute
var getForm = document.querySelector('#form1');

//listener on the form and passing the event object as the 
getForm.addEventListener('click',(event) => {

//can now listen for interaction with clicks within the form    
    if(event.target.tagName == 'LABEL'){
      
        event.target.textContent = 'Pressed';
    console.log(event.path);
    }
});



//console.log(getLabel);

