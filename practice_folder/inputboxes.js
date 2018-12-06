//when we require to traverse from one element to the next parent > child, we have to select the container that is the closest to the element itself. Such as a ul tag that contains li children.

var inputContainer = document.querySelector('.container');

//now we require to allocate the parentNode to a variable
//this will mean that 
var formArea = inputContainer.parentNode;
var inputID = 'person';
var inputEmail = 'email';
let inputCount = 1; 

//adding the event listener on the formArea that contains the labels and 
formArea.addEventListener('click', (event) => {

    //inside here we can now work with the event object
    //this variable will check if the event.target occured with the add button
    var addButton = document.querySelector('#add');
    var newInput = document.createElement('input');

    var newLabel = document.createElement('label');
    //event.target = this will tell us where the event was triggered from, we need to put a conditional to check if the target is a button.
    if(event.target.tagName == 'BUTTON' && event.target == addButton ){
        var nameConcat = inputID + '_' + inputCount;
        var emailConcat = inputEmail + '_' + inputCount;
        //let emailCount = 0;
        newLabel.setAttribute('for', 'name');
        newLabel.textContent = 'Name';
        formArea.appendChild(newLabel);
        newInput.setAttribute('type','text');
        newInput.setAttribute('name', nameConcat);
        formArea.appendChild(newInput);
    
        // newLabel.setAttribute('for', 'email');
        // newLabel.textContent = 'email';
        // formArea.appendChild(newLabel);
        // newInput.setAttribute('type','text');
        // newInput.setAttribute('name', emailConcat);
        // formArea.appendChild(newInput);
        inputCount++;
        console.log(inputCount);
    }

});

//console.log(textField);
//console.log(inputContainer);